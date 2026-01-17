# 🛡️ Activity Log / Audit Trail API

A **Node.js + Express + MongoDB** based backend API that records **sensitive user actions** such as user updates and deletions.
The system maintains a **secure audit trail** accessible only to **admin users**.

---

## 🚀 Features

* User Registration & Login (JWT Authentication)
* Role-based access (`user`, `admin`)
* Logs sensitive actions:

  * User Update
  * User Deletion
* Stores audit logs in MongoDB
* Filter audit logs by:

  * User
  * Action
  * Date range
* Admin-only access to audit logs
* Secure JWT-based authorization

---

## 🗂️ Folder Structure

```
Syntecxhub_ActivityLogOrAuditTrailAPI
│
├── controllers
│   ├── authController.js
│   ├── userController.js
│   └── auditLogController.js
│
├── models
│   ├── User.js
│   └── AuditLog.js
│
├── routes
│   ├── authRoutes.js
│   ├── userRoutes.js
│   └── auditLogRoutes.js
│
├── middleware
│   ├── auth.js
│   └── isAdmin.js
│
├── utils
│   └── auditLogger.js
│
├── config
│   └── db.js
│
├── app.js
├── server.js
├── .env
├── package.json
└── README.md
```

---

## 🧰 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT Authentication**
* **bcryptjs**
* **dotenv**

---

## ⚙️ Environment Variables (`.env`)

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/auditdb
JWT_SECRET=secret123
```

---

## 📦 Install Dependencies

```bash
npm install
```

If missing packages:

```bash
npm install express mongoose jsonwebtoken bcryptjs dotenv
```

---

## ▶️ Run Server

```bash
node server.js
```

Server will run at:

```
http://localhost:5000
```

---

## 🔐 API Endpoints

### 🔹 Auth Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register user     |
| POST   | /api/auth/login    | Login & get token |

---

### 🔹 User Routes (Protected)

| Method | Endpoint       | Description |
| ------ | -------------- | ----------- |
| PUT    | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |

---

### 🔹 Audit Log Routes (Admin Only)

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | /api/audit-logs | Fetch audit logs |

**Query Filters (optional):**

```
?userId=
?action=
&startDate=
&endDate=
```

---

## 🔑 Authorization

Add this header in Postman:

```
Authorization: Bearer <JWT_TOKEN>
```

Only **admin users** can access audit logs.

---

## 🧪 Testing

* Tested using **Postman**
* Verified JWT authentication
* Verified admin-only access control
* Verified audit logs creation on user update/delete

---

## 📌 Example Audit Log Entry

```json
{
  "action": "USER_UPDATED",
  "performedBy": "adminUserId",
  "targetUser": "userId",
  "resourceType": "User",
  "metadata": {
    "updatedFields": ["email", "role"]
  }
}
```

---

## 👩‍💻 Author

**Niruba Ninmathirasa**


Software Developer Intern

---

## 📄 License

This project is for **educational purposes** under Syntecxhub Internship Program.



