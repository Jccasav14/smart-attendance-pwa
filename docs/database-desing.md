# Database Design – Smart Attendance PWA

## Overview

The system uses PostgreSQL via Supabase.

The database follows a relational structure with role-based access control.

---

## Tables

### users

Description: Stores user profile information.

Fields:
- id (uuid, primary key)
- email (text, unique)
- role (text) – 'teacher' or 'student'
- created_at (timestamp)

---

### classes

Description: Represents a class created by a teacher.

Fields:
- id (uuid, primary key)
- name (text)
- teacher_id (uuid, foreign key → users.id)
- created_at (timestamp)

---

### enrollments

Description: Links students to classes.

Fields:
- id (uuid, primary key)
- class_id (uuid, foreign key → classes.id)
- student_id (uuid, foreign key → users.id)

---

### sessions

Description: Attendance session for a specific class.

Fields:
- id (uuid, primary key)
- class_id (uuid, foreign key → classes.id)
- start_time (timestamp)
- end_time (timestamp)
- is_active (boolean)
- created_at (timestamp)

---

### qr_tokens

Description: Temporary tokens used to validate QR scans.

Fields:
- id (uuid, primary key)
- session_id (uuid, foreign key → sessions.id)
- token_hash (text)
- expires_at (timestamp)

---

### attendance

Description: Stores attendance records.

Fields:
- id (uuid, primary key)
- session_id (uuid, foreign key → sessions.id)
- student_id (uuid, foreign key → users.id)
- scanned_at (timestamp)
- status (text) – 'present'

Constraint:
- Unique (session_id, student_id)