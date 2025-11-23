'use server';

import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { getSession, generatePassword } from '@/lib/auth';
import { redirect } from 'next/navigation';

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  teamUnder: z.string().min(2, 'Team name is required'),
  referralSource: z.string().min(2, 'Please tell us where you heard about us'),
});

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export async function registerUser(formData: FormData) {
  try {
    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      teamUnder: formData.get('teamUnder') as string,
      referralSource: formData.get('referralSource') as string,
    };

    const validated = registrationSchema.parse(data);

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email: validated.email },
    });

    if (existingUser) {
      return {
        success: false,
        error: 'An account with this email already exists. Please login instead.'
      };
    }

    // Generate password
    const plainPassword = generatePassword();
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Create user
    const user = await db.user.create({
      data: {
        fullName: validated.fullName,
        email: validated.email,
        phone: validated.phone,
        teamUnder: validated.teamUnder,
        referralSource: validated.referralSource,
        password: hashedPassword,
      },
    });

    // Create session
    const session = await getSession();
    session.userId = user.id;
    session.email = user.email;
    session.fullName = user.fullName;
    session.isLoggedIn = true;
    await session.save();

    return {
      success: true,
      password: plainPassword,
      user: {
        fullName: user.fullName,
        email: user.email,
      }
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message
      };
    }

    console.error('Registration error:', error);
    return {
      success: false,
      error: 'Failed to register. Please try again.'
    };
  }
}

export async function loginUser(formData: FormData) {
  try {
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    const validated = loginSchema.parse(data);

    // Find user
    const user = await db.user.findUnique({
      where: { email: validated.email },
    });

    if (!user) {
      return {
        success: false,
        error: 'Invalid email or password'
      };
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(validated.password, user.password);

    if (!isValidPassword) {
      return {
        success: false,
        error: 'Invalid email or password'
      };
    }

    // Create session
    const session = await getSession();
    session.userId = user.id;
    session.email = user.email;
    session.fullName = user.fullName;
    session.isLoggedIn = true;
    await session.save();

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message
      };
    }

    console.error('Login error:', error);
    return {
      success: false,
      error: 'Failed to login. Please try again.'
    };
  }
}

export async function logoutUser() {
  const session = await getSession();
  session.destroy();
  redirect('/');
}

export async function checkAuth() {
  const session = await getSession();
  return {
    isLoggedIn: session.isLoggedIn || false,
    user: session.isLoggedIn ? {
      fullName: session.fullName,
      email: session.email,
    } : null,
  };
}

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'New password must be at least 8 characters'),
});

export async function changePassword(formData: FormData) {
  try {
    const session = await getSession();
    if (!session?.userId) {
      return {
        success: false,
        error: 'Unauthorized. Please log in.'
      };
    }

    const data = {
      currentPassword: formData.get('currentPassword') as string,
      newPassword: formData.get('newPassword') as string,
    };

    const validated = changePasswordSchema.parse(data);

    // Get user from database
    const user = await db.user.findUnique({
      where: { id: session.userId },
    });

    if (!user) {
      return {
        success: false,
        error: 'User not found'
      };
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(validated.currentPassword, user.password);

    if (!isValidPassword) {
      return {
        success: false,
        error: 'Current password is incorrect'
      };
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(validated.newPassword, 10);

    // Update password
    await db.user.update({
      where: { id: session.userId },
      data: { password: hashedNewPassword },
    });

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message
      };
    }

    console.error('Change password error:', error);
    return {
      success: false,
      error: 'Failed to change password. Please try again.'
    };
  }
}
