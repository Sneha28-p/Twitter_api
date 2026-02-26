# 🐦 Twitter Clone – Backend (Node.js + Express + EJS)

A Twitter-inspired full-stack web application built using **Node.js, Express, and EJS templating**, implementing complete CRUD functionality for managing tweets with dynamic server-side rendering.

---

## 🚀 Features

- Create, Read, Update, and Delete (CRUD) tweets  
- Unique tweet IDs generated using `uuid`  
- RESTful routing implementation  
- Method-Override support for PATCH and DELETE requests  
- Dynamic HTML rendering using EJS templates  
- Express middleware handling  
- Static assets served via Express  

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- EJS (Embedded JavaScript Templates)  
- UUID  
- Method-Override  
- HTML  
- CSS  

---

## 📂 Project Structure

```
project-root/
│
├── public/           # Static files (CSS, JS, images)
├── views/            # EJS templates
│   ├── index.ejs
│   ├── show.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── index.js          # Main server file
├── package.json      # Project dependencies
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sneha28-p/Twitter_clone.git
cd Twitter_clone
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Server

For development (auto-reload):

```bash
nodemon index.js
```

For production:

```bash
node index.js
```

### 4️⃣ Open in Browser

```
http://localhost:8080/tweets
```

---

## 📌 What This Project Demonstrates

- Strong understanding of RESTful routing  
- Backend development using Express.js  
- Server-side rendering using EJS  
- Handling HTTP methods beyond GET/POST  
- Structured project organization  
- Dynamic data manipulation using UUID  

---

## 📈 Future Improvements

- Database integration (MongoDB / MySQL)  
- Authentication system  
- User accounts & sessions  
- Deployment to cloud platform  

---

## 👩‍💻 Author

Sneha Patted  
GitHub: https://github.com/Sneha28-p  
LinkedIn: https://www.linkedin.com/in/sneha-patted-108271338

---

⭐ If you found this project helpful, feel free to give it a star!
