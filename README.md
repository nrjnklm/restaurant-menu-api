# 🌶️ SpiceRoute --- Restaurant Menu Display API

A simple and elegant **Node.js + Express** project that serves a
restaurant menu through clean API endpoints and displays it on a
responsive frontend.\
Built as a learning project for creating APIs, serving static files, and
fetching data on the client side.

## 🏪 About the Restaurant

**SpiceRoute** is a cozy Indian-fusion restaurant offering a blend of
flavorful appetizers, hearty main courses, and delicious desserts ---
crafted with fresh ingredients and bold spices.

## 📌 Project Overview

This application includes:

-   A **Node.js + Express API** that provides menu data\
-   A **frontend (HTML/CSS/JS)** that fetches and displays the data\
-   Multiple endpoints: full menu, vegetarian, categories\
-   Clean project structure for learning & expansion

**Technologies Used:**\
Node.js, Express.js, HTML, CSS, JavaScript

## 📁 Project Structure

    restaurant-menu-api/
    ├─ server.js          # Express server + API routes
    ├─ package.json       # Dependencies & scripts
    ├─ .gitignore         # Ignored files
    ├─ README.md          # Documentation
    └─ public/            # Frontend files
         ├─ index.html
         ├─ style.css
         └─ script.js

## 🚀 How to Run the Project

### 1. Clone the repository

    git clone https://github.com/nrjnklm/restaurant-menu-api.git

### 2. Navigate to project folder

    cd restaurant-menu-api

### 3. Install dependencies

    npm install

### 4. Start the server

    node server.js

### 5. Open in browser

Visit: **http://localhost:3000**

## 📚 API Endpoints

  Method   Endpoint             Description
  -------- -------------------- ------------------------------------
  GET      `/menu`              Returns the full restaurant menu
  GET      `/menu/vegetarian`   Returns only vegetarian items
  GET      `/menu/categories`   Returns categories with item count

## 👨‍💻 Author

**Niranjan**
