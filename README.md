# 🛒 Shopping Cart — Full-Stack E-Commerce with Stripe

A fully functional e-commerce shopping cart application with a complete Stripe Checkout integration.
This project was **hand-coded from scratch**, giving me deep experience with backend behavior, API routing, payment flows, and client/server communication.

> ⚡ Live Demo: *https://powderblue-pheasant-997935.hostingersite.com/*

---

## ✨ Features

* 🛍️ **Interactive product display**
* 🛒 **Dynamic shopping cart** (add, remove, update)
* 💳 **Secure Stripe Checkout** integration
* 🔄 **Success / Cancel payment routing**
* 🔐 **Environment-based API switching**
  (local server vs. deployed Render backend)
* 🚀 **Fully responsive UI** with TailwindCSS
* 🛠 **Custom backend (Node.js/Express)** — no templates, no generators
* 🌐 **Cross-origin support (CORS) fixed & tested**
* 🔧 **Clean folder structure for scaling**

---

## 🧩 Tech Stack

### **Frontend**

* React
* Vite
* TailwindCSS
* React Router

### **Backend**

* Node.js
* Express
* Stripe API

### **Deployment**

* Render (Backend)
* *(Optional: Netlify / Vercel for frontend)*

---

## 📷 Screenshots

> *(Replace these with real images)*

### 🏠 Home Page

![Home Page](./screenshots/home.png)

### 🛒 Cart Page

![Cart Page](./screenshots/cart.png)

### ✅ Payment Success

![Success Page](./screenshots/success.png)

### ❌ Payment Failed

![Cancel Page](./screenshots/cancel.png)

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

---

## 🔧 Environment Variables

Create a `.env` file inside your **server** directory:

```
STRIPE_SECRET=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
```

Create a `.env` inside your **client**:

```
VITE_API_URL=http://localhost:5000/api
```

---

## ▶️ Running the Project Locally

### **Start Backend**

```bash
cd server
npm run dev
```

### **Start Frontend**

```bash
cd client
npm run dev
```

Your app is now live at:
👉 [http://localhost:5173](http://localhost:5173)
Backend runs at:
👉 [http://localhost:5000](http://localhost:5000)

---

## 🚀 Production Deployment

### **Backend (Render)**

1. Push your code to GitHub
2. Go to Render → "New Web Service"
3. Select your repo
4. Add environment variables
5. Deploy

### **Frontend**

Choose one:

#### Netlify

```
Build command: npm run build
Publish directory: dist
```

#### Vercel

```
Framework: Vite
```

---

## 📁 Folder Structure

```
/project-root
 ├── client/               # React + Vite frontend
 │   ├── src/              # Components and pages live here
 │   ├── public/
 │   └── vite.config.js
 │
 ├── server/               # Node + Express backend
 │   ├── routes/
 │   ├── index.js
 │   └── .env              # No access allowed on Github
 │
 ├── README.md
 └── package.json
```

---

## 📘 What I Learned

* How payment gateways work
* How to securely send data between front & back
* Stripe Session creation & redirect URLs
* Deploying APIs and handling CORS
* Client/Server environment variable management
* Error handling in distributed systems

This project gave me real-world experience building a commercial-style payment system from scratch.

---

## 👤 Author

**Ria Choi**
💼 www.linkedin.com/in/ria-choi-76a658309
📧 riiachoii@gmail.com

If you like this project, consider ⭐ starring the repo!
