# 📌 Next.js Auth Template

A **session-based authentication template** built with **Next.js 15 (App Router)** and **TypeScript**.  
Designed to be reusable and extendable for any project that needs a clean, production-ready auth setup.

---

## ✨ Features

- 🔑 **Session-based authentication** (Redis-backed for fast lookups, edge-compatible with Upstash)
- ⚡ **Full TypeScript support**
- 🎨 **Shadcn-UI compatible** components
- ✅ **Zod validation** for forms
- 🔄 **Server Actions** for secure server-side logic
- 🎯 **Client-side form error handling** with `useActionState`
- 🎬 **View Transitions** for smooth page navigation
- 🛡️ **Middleware-based route protection** (public & protected routes)
- 🗄️ **Postgres + Redis integration** for persistence and speed

---

## 📂 Project Structure

```bash
app/
  (protected)/...          # Protected routes (require auth)
  (public)/
    sign-in                # Sign-in page
    sign-up                # Sign-up page

lib/
  actions/auth.action.ts   # Authentication server actions
  auth/session.ts          # Session handling logic
  components/ui/...        # UI components (shadcn-ready)
  db/
    postgres.ts            # PostgreSQL connection
    redis.ts               # Redis connection (Upstash)
    schema.sql             # SQL schema
  types/auth.types.ts      # Auth-related types
  utils.ts                 # Utility functions

middleware.ts              # Handling permissions (auth)
___
```

## 🚀 Getting Started

### 1.Clone this repo

```bash
git clone https://github.com/your-username/nextjs-auth-template.git
cd nextjs-auth-template
```

### 2.Install dependencies

```bash
pnpm install   # or npm/yarn
```

### 3.Set up environment variables

```bash
DB_CONNECT_STRING=your_postgres_url
REDIS_URL=your_upstash_redis_url
REDIS_TOKEN=your_upstach_redis_token
```

### 4.Run database schema

```bash
psql < lib/db/schema.sql

```

### 5.Start the dev server

```bash
pnpm dev

```

## 📜 License

This project is licensed under the **MIT License** – free to use, modify, and share.
