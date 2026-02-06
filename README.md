# Twitter Clone Backend

This is a simple backend project for a Twitter clone, built with **Node.js**, **Express**, and **EJS** templates. It supports basic CRUD operations for tweets.

---

## Features

- Create, Read, Update, Delete (CRUD) tweets
- Each tweet has a unique ID using `uuid`
- Express routes with `method-override` to support PATCH and DELETE in forms
- EJS templates for rendering HTML views
- Simple frontend served with Express

---

## Project Structure


project-root/
├─ public/ # Static assets (CSS, JS, images)
├─ views/ # EJS templates (index.ejs, show.ejs, new.ejs, edit.ejs)
├─ node_modules/ # Dependencies (ignored in Git)
├─ index.js # Main server file
├─ package.json # Project dependencies
├─ package-lock.json
└─ README.md


---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Sneha28-p/Twitter_clone.git
cd Twitter_clone
```

2. **Install dependencies:**
   npm install

3.**Run the server:**
---
  For development (auto-reload):
      nodemon index.js
---
  For production:
      node index.js

4.**Open in your browser:**
     http://localhost:8080/tweets


