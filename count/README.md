# Daily Tracker — `count/`

Personal daily habit tracker built with Next.js, Drizzle ORM, Postgres (Neon), Auth.js, Recharts. UI is in Bangla, dark mode by default.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS (dark mode) |
| Database | Postgres via Neon (Vercel Storage) |
| ORM | Drizzle ORM + drizzle-kit migrations |
| Auth | Auth.js v5 (Credentials provider, JWT, bcrypt) |
| Charts | Recharts |
| Dates | date-fns + date-fns-tz (Asia/Dhaka) |
| Tests | Vitest |

## Local Development

### 1. Clone & install
```bash
git clone https://github.com/shourovhasansbt/mohammadshourov.com.git
cd mohammadshourov.com/count
npm install
```

### 2. Environment variables
Copy `.env.example` → `.env.local`:
```bash
cp .env.example .env.local
```

Fill in the values:

| Variable | Description |
|---|---|
| `DATABASE_URL` | Neon Postgres connection string (from Vercel Storage) |
| `AUTH_SECRET` | Random secret — `openssl rand -base64 32` |
| `ALLOW_REGISTRATION` | `true` or `false` — set `false` after creating your account |
| `ADMIN_EMAIL` | Email of the admin user |
| `ADMIN_PASSWORD` | (Optional) Initial password for the seed admin (default: `Admin@1234!`) |

### 3. Run migrations
```bash
npm run db:migrate
```

### 4. Seed admin user
```bash
npm run db:seed
```
This creates the `ADMIN_EMAIL` user with admin role (or upgrades an existing user).

### 5. Start dev server
```bash
npm run dev
```
Open http://localhost:3000

## Making a User an Admin

**Option A — Seed script** (easiest)
Set `ADMIN_EMAIL` env var to the user's email and run:
```bash
npm run db:seed
```

**Option B — Admin UI**
Log in as an existing admin → go to `/admin` → click the user → click "অ্যাডমিন বানান" (Make Admin).

**Option C — Direct SQL**
```sql
UPDATE users SET role = 'admin' WHERE email = 'user@example.com';
```

## Vercel Deployment

The project is deployed as a **separate Vercel project** with:
- **Root Directory**: `count`
- **Framework Preset**: Next.js

### Environment Variables on Vercel
Set these in Vercel Dashboard → Project Settings → Environment Variables:

```
DATABASE_URL          = (from Vercel Storage / Neon)
AUTH_SECRET           = (generate: openssl rand -base64 32)
ALLOW_REGISTRATION    = false
ADMIN_EMAIL           = your@email.com
```

### Post-deploy steps
1. Run migrations: `npx drizzle-kit migrate` (or use Vercel CLI with env vars)
2. Run seed: `npm run db:seed` (locally with production DATABASE_URL)

## Pages

| Route | Access | Description |
|---|---|---|
| `/login` | Public | Email + password login |
| `/register` | Public (if ALLOW_REGISTRATION=true) | Create account |
| `/dashboard` | Logged in | Stats, charts, log entries |
| `/history` | Logged in | All entries, filter, edit, delete, export CSV |
| `/admin` | Admin only | User management, stats |

## Database Schema

```sql
users (id, name, email, password_hash, role, created_at)
entries (id, user_id, occurred_at, mood_before, mood_after, trigger, note, created_at)
goals (id, user_id, target_streak_days, created_at)
```

## Security

- All routes protected by middleware + server-side session checks
- Passwords hashed with bcrypt (cost 12)
- JWT sessions (httpOnly cookies)
- Zod validation on all API routes
- Rate limiting on login (5 attempts / 15 min)
- `robots.txt`: Disallow all; `<meta robots>`: noindex, nofollow
- No secrets in code — env vars only

## Tests

```bash
npm test
```

Streak helper unit tests in `src/lib/streak.test.ts`.
