# Authentication System Setup

This project now has a complete registration and login system integrated.

## Features

- **Registration Form**: Collects Full Name, Email, Phone, and Team Leader/Referral
- **Auto-Generated Passwords**: System generates an 8-character password for each new user
- **Login System**: Users can log in with their email and password
- **Protected Dashboard**: Dashboard is only accessible to logged-in users
- **Session Management**: Secure cookie-based sessions (30-day expiry)

## Database Setup

### 1. Create a PostgreSQL Database on Railway

```bash
# Login to Railway
railway login

# Create new project or link existing
railway link

# Add PostgreSQL plugin
# (Do this via Railway dashboard: railway.app)
```

### 2. Get Database URL

From Railway dashboard, copy your PostgreSQL connection string (the one with pooling is recommended).

### 3. Update Environment Variables

Edit `.env` file:
```bash
DATABASE_URL="your-railway-postgres-url-here"
SESSION_SECRET="18/r1adRWivRPgvIxPXsNhBvhsDUXSw9OxTkmWN8hlE="
```

### 4. Push Database Schema

```bash
npm run db:push
```

This creates the `User` table in your database.

## Vercel Deployment

Add these environment variables in Vercel dashboard:

1. Go to: https://vercel.com/sony-hos-projects/lee-meadows-bg/settings/environment-variables
2. Add:
   - `DATABASE_URL`: Your Railway PostgreSQL URL
   - `SESSION_SECRET`: `18/r1adRWivRPgvIxPXsNhBvhsDUXSw9OxTkmWN8hlE=`

## User Flow

1. **New Users**:
   - Click "Get Started" or "Register"
   - Fill in registration form (Full Name, Email, Phone, Team Leader)
   - System generates password and displays it
   - User is automatically logged in and redirected to dashboard

2. **Existing Users**:
   - Click "Log In"
   - Enter email and password
   - Redirected to dashboard

3. **Logged-in Users**:
   - See "Dashboard" button in navbar instead of "Get Started"
   - Can access /dashboard page
   - Can log out from dashboard header

## Database Schema

```prisma
model User {
  id        String   @id @default(cuid())
  fullName  String
  email     String   @unique
  phone     String
  teamUnder String
  password  String   // Hashed with bcrypt
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Security Features

- Passwords hashed with bcrypt (10 rounds)
- HTTP-only session cookies
- Session cookies secure in production
- Email uniqueness enforced at database level
- Input validation with Zod schemas

## Testing Locally

1. Make sure DATABASE_URL is set in `.env`
2. Run `npm run db:push`
3. Run `npm run dev`
4. Visit http://localhost:3000
5. Click "Get Started" and register a new account
6. Your password will be displayed - save it!
7. You'll be redirected to /dashboard
8. Try logging out and logging back in

## Files Added/Modified

### New Files:
- `prisma/schema.prisma` - Database schema
- `lib/db.ts` - Prisma client singleton
- `lib/auth.ts` - Session management and password generation
- `app/actions/auth.ts` - Server Actions for auth
- `components/RegistrationForm.tsx` - Registration form
- `components/LoginForm.tsx` - Login form
- `components/AuthModal.tsx` - Modal wrapper
- `components/DashboardHeader.tsx` - Dashboard header with logout

### Modified Files:
- `package.json` - Added auth dependencies
- `app/page.tsx` - Integrated auth modal
- `app/dashboard/page.tsx` - Added auth protection
- `.gitignore` - Already includes .env

## Support

If you encounter any issues, check:
1. DATABASE_URL is correct in .env
2. Prisma client is generated: `npm run db:generate`
3. Database schema is pushed: `npm run db:push`
4. All dependencies are installed: `npm install`
