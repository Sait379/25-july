# 📘 University API
A simple Node.js + Express REST API connected to a PostgreSQL database, allowing CRUD operations for users, posts, and comments.

# 🚀 Tech Stack
- Node.js

- Express.js

- PostgreSQL

- bcrypt – for password hashing

- jsonwebtoken (JWT) – token generation (used only for issuing, not verifying)

- nodemon – for development auto-reloading

# 📂 Database Schema
- The PostgreSQL database is named: university

# Tables:
- users

- posts

- comments (used instead of post_comments due to PostgreSQL naming issues)

**⚙️ To generate the database and seed data, run the following scripts:**
```
psql -U <your_user> -d university -f users_posts.sql
psql -U <your_user> -d university -f posts.sql
psql -U <your_user> -d university -f comments.sql
```



# 📫 API Endpoints
 - Base URL: ```http://localhost:3000/```

# 🌐 Public Pages

| Method | Endpoint   | Description  |
| ------ | ---------- | ------------ |
| GET    | `/`        | Home page    |
| GET    | `/about`   | About page   |
| GET    | `/contact` | Contact page |

## 👤 Users
| Method | Endpoint        | Description                    |
| ------ | --------------- | ------------------------------ |
| GET    | `/api/users`    | Get all users                  |
| GET    | `/api/user/:id` | Get a user by ID               |
| POST   | `/api/user`     | Register a new user            |
| PUT    | `/api/user/:id` | Update user by ID              |
| DELETE | `/api/user/:id` | Delete user by ID              |
| POST   | `/login`        | Login user (returns JWT token) |


## 🔐 Auth
Passwords are hashed using bcrypt.

Tokens are generated using jsonwebtoken, but no verification middleware is implemented.

## 📦 Installation
```
git clone https://github.com/yourusername/university-api.git
cd university-api
npm install
npm run dev  # Starts server using nodemon
```

***Note: Remember to update db.js with your PostgreSQL credentials.***

## 📝 Notes
The app avoids using a table named comments due to naming conflicts in PostgreSQL.

You can expand the project by adding JWT verification, pagination, or role-based access.

## 📧 Contact
Maintained by [Harmmandeep01](http://www.github.com/harmandeep01)

Feel free to contribute, report issues, or suggest improvements.