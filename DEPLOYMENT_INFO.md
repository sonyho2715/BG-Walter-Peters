# BG-Walter-Peters - Deployment Information

## ✅ Status: LIVE

**Deployed:** November 15, 2025
**Client:** Walter Peters
**Invitation Code:** A3k16Uam5S00
**Password:** Walter2025

---

## 🌐 Live URLs

### Production
```
https://bg-walter-peters.vercel.app
```

### Latest Deployment
```
https://bg-walter-peters-qp749vpm8-sony-hos-projects.vercel.app
```

### GitHub Repository
```
https://github.com/sonyho2715/BG-Walter-Peters
```

### Vercel Dashboard
```
https://vercel.com/sony-hos-projects/bg-walter-peters
```

---

## 🔑 Access Information

### Password Protection
**Password:** `Walter2025`

Users must enter this password to access the dashboard.

### Invitation Code
**Code:** `A3k16Uam5S00`
**Link:** `https://dsj927.com?code=A3k16Uam5S00`

This code is displayed inside the dashboard after authentication.

---

## 📋 What's Deployed

### Source
This deployment uses the **exact same code** as the main bg-trader-dashboard.vercel.app

**Source Location:**
```
/Users/sonyho/Active_Projects/Development/client-projects/BG Wealth Webapp/
```

### Technology Stack
- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

### Key Features
- ✅ Password protection (BGWealth2025)
- ✅ Bilingual interface (English/Vietnamese)
- ✅ Invitation code system (C5jnncnd6)
- ✅ Countdown timer for trading sessions
- ✅ Progress dashboard
- ✅ Tutorial videos
- ✅ Performance calculator
- ✅ FAQ section
- ✅ Dark mode support
- ✅ Alarm settings
- ✅ Print-friendly invitation cards

---

## 🎯 Comparison: Main vs Walter Peters

### Main Dashboard
- **URL:** https://bg-trader-dashboard.vercel.app
- **Code:** a0nkkt6gi400
- **Purpose:** Original instance

### Walter Peters Dashboard (This)
- **URL:** https://bg-walter-peters.vercel.app
- **Code:** A3k16Uam5S00
- **Purpose:** Walter Peters' dedicated instance

**Note:** Both use the same codebase. Only the invitation code differs.

---

## 📝 Configuration Details

### Invitation Code Location
File: `/components/InvitationCode.tsx`
```typescript
const INVITATION_CODE = 'A3k16Uam5S00';
const INVITATION_LINK = `https://dsj927.com?code=${INVITATION_CODE}`;
```

### Password Location
File: `/components/PasswordProtection.tsx`
```typescript
// Password: Walter2025
if (password === 'Walter2025') {
  setIsAuthenticated(true);
  // ...
}
```

---

## 🚀 Deployment Process

### Making Updates

1. **Edit Files**
   ```bash
   cd ~/Active_Projects/bg-walter-peters
   # Make your changes...
   ```

2. **Commit Changes**
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```

3. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Update Invitation Code

To change the invitation code:

1. Edit `components/InvitationCode.tsx`
2. Update the constants:
   ```typescript
   const INVITATION_CODE = 'YOUR_NEW_CODE';
   const INVITATION_LINK = `https://dsj927.com?code=${INVITATION_CODE}`;
   ```
3. Commit and deploy

---

## 🔗 Custom Domain Setup

### Current Configuration
The invitation link is configured as: `https://dsj927.com?code=A3k16Uam5S00`

### To Activate Custom Domain

1. Go to Vercel project settings:
   ```
   https://vercel.com/sony-hos-projects/bg-walter-peters/settings/domains
   ```

2. Add domain: `dsj927.com`

3. Configure DNS records as instructed by Vercel

---

## 🧪 Testing the Deployment

### 1. Test Password Protection
1. Visit: https://bg-walter-peters.vercel.app
2. You should see a password screen
3. Enter: `Walter2025`
4. You should be redirected to language selection

### 2. Test Invitation Code
1. After logging in with password
2. Select language (English or Vietnamese)
3. Scroll to "My invitation code" section
4. Verify code shows: `A3k16Uam5S00`
5. Verify link shows: `https://dsj927.com?code=A3k16Uam5S00`

### 3. Test Features
- ✅ Language toggle works
- ✅ Countdown timer displays
- ✅ Tutorial videos load
- ✅ Dark mode toggle works
- ✅ Copy invitation code button works
- ✅ Share button works
- ✅ Print button works

---

## 📊 Project Structure

```
bg-walter-peters/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── InvitationCode.tsx    ← Walter's code (C5jnncnd6)
│   ├── PasswordProtection.tsx ← Password screen
│   ├── LanguageSelector.tsx
│   ├── CountdownTimer.tsx
│   └── ... (other components)
├── contexts/
│   └── LanguageContext.tsx
├── hooks/
├── lib/
├── locales/
│   ├── en.ts
│   └── vi.ts
├── public/
│   └── docs/
├── types/
├── package.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🔐 Security Notes

- Password is stored in client-side code (session-based)
- No backend authentication system
- Session clears when browser is closed
- Invitation code is visible to authenticated users only

---

## 📞 Support & Maintenance

### View Deployment Logs
```bash
cd ~/Active_Projects/bg-walter-peters
vercel logs bg-walter-peters.vercel.app
```

### Check Deployment Status
```bash
vercel ls
```

### Inspect Deployment
```bash
vercel inspect bg-walter-peters.vercel.app
```

---

## 🔄 Syncing with Main Dashboard

If the main dashboard (bg-trader-dashboard.vercel.app) gets updated and you want to sync:

1. Go to source:
   ```bash
   cd "/Users/sonyho/Active_Projects/Development/client-projects/BG Wealth Webapp/"
   ```

2. Copy updates:
   ```bash
   rsync -av --exclude='.git' --exclude='node_modules' --exclude='.next' --exclude='.vercel' . ~/Active_Projects/bg-walter-peters/
   ```

3. Update invitation code:
   ```bash
   cd ~/Active_Projects/bg-walter-peters
   # Edit components/InvitationCode.tsx
   # Set INVITATION_CODE = 'A3k16Uam5S00'
   ```

4. Commit and deploy:
   ```bash
   git add .
   git commit -m "Sync with main dashboard"
   git push
   vercel --prod
   ```

---

## ✅ Deployment Checklist

- [x] Source code copied from BG Wealth Webapp
- [x] Invitation code updated to A3k16Uam5S00
- [x] Password confirmed (Walter2025)
- [x] Committed to GitHub
- [x] Deployed to Vercel
- [x] Production URL active
- [x] All features working
- [ ] Custom domain configured (optional)

---

**Project:** BG-Walter-Peters
**Status:** Production Ready
**Matches:** bg-trader-dashboard.vercel.app (with different invitation code)
**Last Updated:** November 15, 2025
