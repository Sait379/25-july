# 👩‍💼 Employee Management API

This is a simple **Node.js CRUD API** project that performs operations on employee data using Express and an in-memory JSON file (`employee.json`).

## 📁 Project Structure

kirti/
├── controllers/
│ └── employeeController.js
├── routes/
│ └── employeeRoutes.js
├── employee.json
├── server.js
└── README.md

pgsql
Copy
Edit

## 🚀 Features

- 📖 Get all employees
- 🔍 Get employee by ID
- ➕ Add new employee
- 📝 Update existing employee
- ❌ Delete employee

## 🛠️ Tech Stack

- Node.js
- Express.js
- JSON as data store (no database)
- ES6 Modules

## 📦 Install & Run

```bash
# 1. Clone the repo
git clone https://github.com/Sait379/25-july.git

# 2. Navigate into the project
cd 25-july/kirti

# 3. Install dependencies
npm install

# 4. Start the server
node server.js

```
## 🧪 API Endpoints (Use Postman)

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | `/employees`     | Get all employees   |
| GET    | `/employees/:id` | Get employee by ID  |
| POST   | `/employees`     | Add new employee    |
| PUT    | `/employees/:id` | Update existing     |
| DELETE | `/employees/:id` | Delete employee     |
