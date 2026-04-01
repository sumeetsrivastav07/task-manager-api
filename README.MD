# Task Manager API

A beginner-friendly yet well-structured **REST API** built using **Node.js** and **Express.js** for managing tasks with **authentication, authorization, and secure backend architecture**.

This project was built to understand how a backend application evolves in a real-world style using:

- Routes
- Controllers
- Middleware
- Validation
- Error handling
- JWT Authentication
- Password Hashing
- User-specific Authorization
- Consistent API responses

---

# Overview

This API allows users to:

- Sign up and create an account
- Log in securely
- Create new tasks
- Get all their tasks
- Get a single task by ID
- Update task details
- Delete tasks

Each task contains:

- `id`
- `title`
- `completed`
- `createdAt`
- `userId`

Each user contains:

- `id`
- `name`
- `email`
- `password` (hashed)

This project currently uses **in-memory storage**, which means data is stored temporarily while the server is running.

> If the server restarts, all users and tasks are reset.

This is intentional for this stage because the focus of the project is on **Express architecture, authentication flow, route protection, and ownership-based access control**, not database persistence.

---

# Tech Stack

- **Node.js**
- **Express.js**
- **JavaScript (ES Modules)**
- **bcryptjs** (for password hashing)
- **jsonwebtoken** (for JWT authentication)
- **dotenv** (for environment variables)
- **Thunder Client** (for API testing)
- **Git & GitHub**

---

# Features

## Core API Features
- User signup
- User login
- Create a task
- Read all tasks
- Read one task by ID
- Update a task
- Delete a task

## Authentication & Security
- Password hashing using bcrypt
- JWT token generation on login
- Protected task routes
- Authentication middleware
- Environment-based JWT secret using `.env`

## Authorization & Ownership
- Each user can access **only their own tasks**
- Ownership checks for:
  - Get single task
  - Update task
  - Delete task

## Backend Concepts Implemented
- Express server setup
- Express Router
- Controller-based architecture
- Route-level middleware
- Global middleware
- Request validation
- Custom logger middleware
- Error-handling middleware
- 404 route handling
- Consistent JSON response structure

---

# Project Structure

```text
task-manager-api/
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   ├── logger.js
│   └── validateTask.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── .env
└── server.js