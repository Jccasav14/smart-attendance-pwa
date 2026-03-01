# MVP Definition – Smart Attendance PWA

##  Objective

Build a QR-based attendance system that allows teachers to generate session-based QR codes and students to scan them to register attendance securely.

---

##  User Roles

### Teacher
- Create classes
- Start attendance sessions
- Generate QR codes
- View attendance list
- Export attendance data

### Student
- Login to the system
- Scan QR code
- Register attendance
- View personal attendance history

---

##  Core Features (Must Have)

1. User authentication (Teacher / Student)
2. Create class
3. Create attendance session
4. Generate QR code linked to active session
5. Scan QR code with device camera
6. Register attendance in database
7. Attendance dashboard

---

##  Out of Scope (For Later Versions)

- Push notifications
- Advanced analytics
- AI attendance validation
- Geolocation verification
- Multi-organization support

---

##  Minimum Technical Requirements

- PWA installable on mobile
- Secure backend validation
- Role-based access control
- Expiring QR tokens
- PostgreSQL database
- Deployed live

---

##  MVP Success Criteria

The MVP is complete when:

- A teacher can create a session and generate a QR.
- A student can scan the QR and mark attendance.
- The teacher can see the updated attendance list.
- The application is deployed and publicly accessible.