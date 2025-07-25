# 🎯 Project: 25-July Node + PostgreSQL API

A RESTful backend built with **Node.js**, **Express**, and **PostgreSQL**, organized in the **MVC pattern**. It includes CRUD operations for `users`, using environment configuration and proper folder structure.

---

## 🧱 Project Structure

25-july/
├── controllers/
│ └── userController.js
├── models/
│ └── userModel.js
├── routes/
│ └── user.js
├── config/
│ └── db.js
├── middlewares/
│ └── errorHandler.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🚀 Technologies Used

- Node.js
- Express.js
- PostgreSQL
- `pg` module for DB queries
- `dotenv` for environment configuration
- MVC architecture with modular code organization

---

## 🛠 Features

- **CRUD endpoints** for `Users`:
  - Create user  
  - Read all users or by ID  
  - Update user  
  - Delete user

- **Error handler middleware** for catching and returning server errors cleanly
- **Environment-based config** using `.env`
- **SQL query safety** via parameterized queries (prevents SQL injection)

---

## 📌 Setup Instructions
 ```bash
# 1. Clone the repo:
  
   git clone https://github.com/Sait379/25-july.git
   cd 25-july
# 2.Install dependencies:

npm install

# 3.Add a .env file:
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_PORT=5432
PORT=3000

# 4. Start the server:
node index.js

```

## 📬 API Endpoints
## 📬 API Endpoints

| Method | Endpoint     | Description          |
|--------|--------------|----------------------|
| GET    | `/users`     | Fetch all users      |
| GET    | `/users/:id` | Fetch user by ID     |
| POST   | `/add/users` | Create a new user    |
| PUT    | `/users/:id` | Update existing user |
| DELETE | `/users/:id` | Delete user by ID    |


