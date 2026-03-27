# Task Manager API

A beginner-friendly yet well-structured **REST API** built using **Node.js** and **Express.js** for managing tasks.

This project was built to understand how a backend application is structured in a real-world style using:

- Routes
- Controllers
- Middleware
- Validation
- Error handling
- Consistent API responses

---

# Overview

This API allows users to:

- Create new tasks
- Get all tasks
- Get a single task by ID
- Update task details
- Delete tasks

Each task contains:

- `id`
- `title`
- `completed`
- `createdAt`

This project currently uses **in-memory storage**, which means data is stored temporarily while the server is running.

> If the server restarts, all tasks are reset.

This is intentional for this stage because the focus of the project is on **Express fundamentals and backend architecture**, not database persistence.

---

# Tech Stack

- **Node.js**
- **Express.js**
- **JavaScript (ES Modules)**
- **Thunder Client** (for API testing)
- **Git & GitHub**

---

# Features

## Core API Features
- Create a task
- Read all tasks
- Read one task by ID
- Update task title or completion status
- Delete a task

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
│   └── taskController.js
│
├── middleware/
│   ├── errorHandler.js
│   ├── logger.js
│   └── validateTask.js
│
├── routes/
│   └── taskRoutes.js
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js