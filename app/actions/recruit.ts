'use server';

import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { z } from 'zod';

// Session type for recruits
interface RecruitSession {
  recruitId?: string;
  recruitSlug?: string;
  isLoggedIn: boolean;
}

const sessionOptions = {
  password: process.env.SESSION_SECRET || 'complex_password_at_least_32_characters_long',
  cookieName: 'recruit_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
};

async function getRecruitSession() {
  return getIronSession<RecruitSession>(await cookies(), sessionOptions);
}

// Validation schemas
const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  referralCode: z.string().min(1, 'Referral code is required'),
  referralLink: z.string().url('Invalid referral link URL'),
});

const updateSchema = z.object({
  name: z.string().min(2).optional(),
  leader: z.string().optional().or(z.literal('')),
  headline: z.string().optional(),
  subheadline: z.string().optional(),
  bio: z.string().optional(),
  photoUrl: z.string().url().optional().or(z.literal('')),
  youtubeUrl: z.string().url().optional().or(z.literal('')),
  primaryColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Invalid color format').optional(),
  accentColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Invalid color format').optional(),
  referralCode: z.string().min(1).optional(),
  referralLink: z.string().url().optional(),
  telegramLink: z.string().url().optional().or(z.literal('')),
  whatsappLink: z.string().url().optional().or(z.literal('')),
  showTestimonials: z.boolean().optional(),
  showCalculator: z.boolean().optional(),
});

// Helper: Generate slug from name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Register new recruit
export async function registerRecruit(formData: FormData) {
  try {
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      password: formData.get('password') as string,
      referralCode: formData.get('referralCode') as string,
      referralLink: formData.get('referralLink') as string,
    };

    // Validate
    const validated = registerSchema.parse(data);

    // Check if email already exists
    const existing = await prisma.recruit.findFirst({
      where: { email: validated.email },
    });

    if (existing) {
      return { success: false, error: 'Email already registered' };
    }

    // Generate unique slug
    let slug = generateSlug(validated.name);
    let slugExists = await prisma.recruit.findFirst({ where: { slug } });
    let counter = 1;

    while (slugExists) {
      slug = `${generateSlug(validated.name)}-${counter}`;
      slugExists = await prisma.recruit.findFirst({ where: { slug } });
      counter++;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validated.password, 12);

    // Create recruit
    const recruit = await prisma.recruit.create({
      data: {
        slug,
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        password: hashedPassword,
        referralCode: validated.referralCode,
        referralLink: validated.referralLink,
      },
    });

    // Log them in
    const session = await getRecruitSession();
    session.recruitId = recruit.id;
    session.recruitSlug = recruit.slug;
    session.isLoggedIn = true;
    await session.save();

    return { success: true, slug: recruit.slug };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    console.error('Registration error:', error);
    return { success: false, error: 'Registration failed. Please try again.' };
  }
}

// Login recruit
export async function loginRecruit(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      return { success: false, error: 'Email and password required' };
    }

    const recruit = await prisma.recruit.findFirst({
      where: { email },
    });

    if (!recruit) {
      return { success: false, error: 'Invalid email or password' };
    }

    const validPassword = await bcrypt.compare(password, recruit.password);

    if (!validPassword) {
      return { success: false, error: 'Invalid email or password' };
    }

    // Create session
    const session = await getRecruitSession();
    session.recruitId = recruit.id;
    session.recruitSlug = recruit.slug;
    session.isLoggedIn = true;
    await session.save();

    return { success: true, slug: recruit.slug };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'Login failed. Please try again.' };
  }
}

// Logout recruit
export async function logoutRecruit() {
  const session = await getRecruitSession();
  session.destroy();
  redirect('/recruit/login');
}

// Get current recruit session
export async function getRecruitAuth() {
  const session = await getRecruitSession();

  if (!session.isLoggedIn || !session.recruitId) {
    return { isLoggedIn: false, recruit: null };
  }

  const recruit = await prisma.recruit.findUnique({
    where: { id: session.recruitId },
    select: {
      id: true,
      slug: true,
      name: true,
      email: true,
      phone: true,
      referralCode: true,
      referralLink: true,
      leader: true,
      headline: true,
      subheadline: true,
      bio: true,
      photoUrl: true,
      youtubeUrl: true,
      primaryColor: true,
      accentColor: true,
      testimonials: true,
      telegramLink: true,
      whatsappLink: true,
      showTestimonials: true,
      showCalculator: true,
    },
  });

  if (!recruit) {
    return { isLoggedIn: false, recruit: null };
  }

  return { isLoggedIn: true, recruit };
}

// Update recruit profile
export async function updateRecruitProfile(formData: FormData) {
  try {
    const session = await getRecruitSession();

    if (!session.isLoggedIn || !session.recruitId) {
      return { success: false, error: 'Not authenticated' };
    }

    const data: Record<string, unknown> = {};

    // Extract form data
    const fields = [
      'name', 'leader', 'headline', 'subheadline', 'bio', 'photoUrl', 'youtubeUrl',
      'primaryColor', 'accentColor', 'referralCode', 'referralLink',
      'telegramLink', 'whatsappLink'
    ];

    for (const field of fields) {
      const value = formData.get(field);
      if (value !== null) {
        data[field] = value as string;
      }
    }

    // Handle boolean fields
    data.showTestimonials = formData.get('showTestimonials') === 'true';
    data.showCalculator = formData.get('showCalculator') === 'true';

    // Validate
    const validated = updateSchema.parse(data);

    // Update
    await prisma.recruit.update({
      where: { id: session.recruitId },
      data: {
        ...validated,
        leader: validated.leader || null,
        photoUrl: validated.photoUrl || null,
        youtubeUrl: validated.youtubeUrl || null,
        telegramLink: validated.telegramLink || null,
        whatsappLink: validated.whatsappLink || null,
      },
    });

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    console.error('Update error:', error);
    return { success: false, error: 'Update failed. Please try again.' };
  }
}

// Update testimonials
export async function updateRecruitTestimonials(testimonials: Array<{ name: string; quote: string; result?: string }>) {
  try {
    const session = await getRecruitSession();

    if (!session.isLoggedIn || !session.recruitId) {
      return { success: false, error: 'Not authenticated' };
    }

    await prisma.recruit.update({
      where: { id: session.recruitId },
      data: { testimonials: testimonials as unknown as Prisma.InputJsonValue },
    });

    return { success: true };
  } catch (error) {
    console.error('Update testimonials error:', error);
    return { success: false, error: 'Update failed. Please try again.' };
  }
}

// Get recruit by slug (public)
export async function getRecruitBySlug(slug: string) {
  const recruit = await prisma.recruit.findFirst({
    where: { slug, isActive: true },
    select: {
      id: true,
      slug: true,
      name: true,
      referralCode: true,
      referralLink: true,
      leader: true,
      headline: true,
      subheadline: true,
      bio: true,
      photoUrl: true,
      youtubeUrl: true,
      primaryColor: true,
      accentColor: true,
      testimonials: true,
      telegramLink: true,
      whatsappLink: true,
      showTestimonials: true,
      showCalculator: true,
    },
  });

  return recruit;
}
