# User Stories – Smart Attendance PWA

## Teacher User Stories

1. As a teacher, I want to create a class so that I can organize my students.

2. As a teacher, I want to start an attendance session so that students can register their presence.

3. As a teacher, I want to generate a dynamic QR code so that attendance can be validated securely.

4. As a teacher, I want the QR code to expire after a short period of time to prevent cheating.

5. As a teacher, I want to see the attendance list in real time so that I can monitor who has checked in.

6. As a teacher, I want to export attendance records as CSV so that I can keep external reports.

7. As a teacher, I want to close a session so that students cannot register attendance after class ends.

---

## Student User Stories

1. As a student, I want to log into the system so that my attendance is linked to my identity.

2. As a student, I want to scan a QR code using my phone camera so that I can register my attendance easily.

3. As a student, I want to receive confirmation when attendance is successfully recorded.

4. As a student, I want to see my attendance history so that I can track my participation.

5. As a student, I want to be prevented from checking in more than once per session.

---

## System User Stories

1. The system must validate that the QR token is active and not expired.

2. The system must ensure that a student can only register once per session.

3. The system must restrict access to teacher-only features.

4. The system must securely store attendance data in a PostgreSQL database.

5. The system must reject invalid or manipulated QR tokens.