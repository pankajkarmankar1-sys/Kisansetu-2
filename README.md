# KisanSetu — Smart Tractor Booking Platform

India's smart agricultural tractor booking platform built with Next.js and Supabase.

## Setup

### 1. Clone / unzip the project

### 2. Install dependencies
```bash
npm install
```

### 3. Add environment variables
Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://dzzxapuektnamgabdxlq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Run Supabase SQL
In Supabase SQL Editor, run the complete schema from `supabase/schema.sql`

### 5. Run locally
```bash
npm run dev
```

### 6. Deploy to Vercel
- Push to GitHub
- Import in Vercel
- Add environment variables in Vercel dashboard
- Deploy

## Environment Variables (Vercel)
| Variable | Value |
|----------|-------|
| NEXT_PUBLIC_SUPABASE_URL | Your Supabase project URL |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Your Supabase anon key |

## Roles
- **Customer** — Book tractor services
- **Driver** — Accept and complete jobs
- **Admin** — Full management (password: kisan2025)
