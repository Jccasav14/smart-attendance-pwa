# Architecture Overview – Smart Attendance PWA

## Application Type

Progressive Web Application (PWA)

The application runs in the browser and can be installed on mobile devices.

---

## High-Level Architecture

Client (Next.js PWA)
    |
    | HTTPS
    |
Backend (Next.js API Routes)
    |
    |
Supabase (PostgreSQL + Auth)

---

## Authentication Flow

1. User logs in via Supabase Auth.
2. Supabase returns a secure JWT.
3. JWT is sent with API requests.
4. Backend validates role and permissions.

---

## Attendance Flow

1. Teacher creates a session.
2. Backend generates a temporary QR token.
3. QR token is displayed to students.
4. Student scans QR code.
5. Student sends token to backend.
6. Backend validates:
   - Session is active
   - Token is valid
   - Token not expired
   - Student not already marked present
7. Attendance record is stored.

---

## Security Model

- QR tokens expire quickly.
- Each student can only check in once per session.
- All validation happens server-side.
- Role-based access is enforced on API level.
- Tokens are hashed before storage.

---

## Deployment Plan

Frontend:
- Vercel

Backend:
- Next.js API routes deployed with frontend

Database:
- Supabase PostgreSQL