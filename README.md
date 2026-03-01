# Smart Attendance PWA

Smart Attendance is a QR-based attendance system built as a Progressive Web App (PWA).  
It allows teachers to generate dynamic QR codes for class sessions and students to scan them to register attendance securely.

---

## Live Demo
Coming soon...

---

## Project Goal
The goal of this project is to build a modern, secure, and scalable attendance system using QR codes with anti-cheating mechanisms. 

This project is designed as a portfolio-ready full-stack application.

---

## Features (MVP)
- User authentication (Teacher / Student)
- Create classes
- Start attendance sessions
- Generate dynamic QR codes
- Scan QR codes using device camera
- Register attendance in real-time
- Attendance dashboard
- Export attendance data (CSV)

---

## Tech Stack
**Frontend:**
- Next.js
- Tailwind CSS
- TypeScript
- PWA configuration

**Backend:**
- Next.js API Routes (or NestJS in future versions)

**Database:**
- Supabase (PostgreSQL)

**Authentication:**
- Supabase Auth

**Deployment:**
- Vercel (Frontend)
- Supabase (Database)

---

## Architecture Overview
- PWA installable from browser
- Dynamic QR tokens with expiration
- Role-based access control
- Secure attendance validation
- Cloud-hosted database

---

## Project Structure
`# smart-attendance-pwa`