# Task Manager API

A well-structured **REST API** built using **Node.js, Express.js, and MongoDB** for managing tasks with **authentication, authorization, and persistent data storage**.

This project demonstrates how a backend evolves from basic structure to a **real-world database-driven system** using:

* MVC Architecture (Routes → Controllers → Models)
* MongoDB + Mongoose
* JWT Authentication
* Secure password hashing
* User-specific authorization
* Schema validation
* Relationship handling with `populate()`
* Consistent API responses

---

# Overview

This API allows users to:

* Sign up and create an account
* Log in securely
* Create new tasks
* Get all their tasks
* Get a single task by ID
* Update task details
* Delete tasks

---

# Data Models

## User

* `_id`
* `name`
* `email`
* `password` (hashed)
* `createdAt`
* `updatedAt`

## Task

* `_id`
* `title`
* `completed`
* `userId` (reference to User)
* `createdAt`
* `updatedAt`

---

# Key Backend Concepts

## Authentication & Security

* Password hashing using bcrypt
* JWT token generation on login
* Protected routes using middleware
* Environment variables using `.env`

## Authorization & Ownership

* Each user can access **only their own tasks**
* Ownership checks implemented for:

  * Get single task
  * Update task
  * Delete task

## Database & Relationships

* MongoDB used for persistent storage
* Mongoose schemas and models
* Task → User relationship using `userId`
* `.populate()` to fetch user details inside tasks

## Validation & Error Handling

* Schema-level validation (min length, required fields)
* Custom validation messages
* Proper error handling with meaningful responses

---

# Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JavaScript (ES Modules)**
* **bcryptjs**
* **jsonwebtoken**
* **dotenv**
* **Thunder Client / Postman**
* **Git & GitHub**

---

# Project Structure

```text
task-manager-api/
│
├── config/
│   └── db.js                 # MongoDB connection setup
│
├── controllers/
│   ├── authController.js    # Signup & login logic
│   └── taskController.js    # Task CRUD operations
│
├── middleware/
│   ├── authMiddleware.js    # JWT verification
│   ├── errorHandler.js      # Global error handler
│   ├── logger.js            # Request logger
│   └── validateTask.js      # Task validation middleware
│
├── models/
│   ├── User.js              # User schema & model
│   └── Task.js              # Task schema & model
│
├── routes/
│   ├── authRoutes.js        # Auth routes
│   └── taskRoutes.js        # Task routes
│
├── .env                     # Environment variables
├── .gitignore
├── package.json
├── README.md
└── server.js               # App entry point
```

---

# API Flow (High Level)

```text
Client Request
→ Route
→ Middleware (Auth / Validation)
→ Controller
→ Model (Mongoose)
→ MongoDB
→ Response
```

---

# Important Notes

* This project now uses **MongoDB for persistent storage**
* Data is no longer lost on server restart
* All task operations are **user-specific and secure**
* Backend follows **clean architecture and separation of concerns**

---

# Future Improvements

* Refresh tokens
* Role-based access control
* Pagination & filtering
* Deployment (Render / AWS)
* API documentation (Swagger)

---
