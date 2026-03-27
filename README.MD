# Task Manager API

A simple REST API built with Express.js to manage tasks.

## Features

- Create a task
- Get all tasks
- Get a single task by ID
- Update a task
- Delete a task
- Validation for task input
- Custom middleware logging
- Centralized error handling
- 404 route handling
- Consistent JSON API responses

---

## Tech Stack

- Node.js
- Express.js
- JavaScript (ES Modules)

---

## Project Structure

task-manager-api/
│
├── controllers/
│   └── taskController.js
│
├── routes/
│   └── taskRoutes.js
│
├── middleware/
│   ├── logger.js
│   ├── validateTask.js
│   └── errorHandler.js
│
├── server.js
├── package.json
└── README.md

---

## Installation

Clone the repository and install dependencies:

```bash
npm install