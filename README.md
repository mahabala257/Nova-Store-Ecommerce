# 🛒 Nova Store – E-Commerce Web Application

## 📌 Overview
Nova Store is a full-stack e-commerce web application built using **Node.js and Express.js** with a responsive frontend.

It allows users to browse products, manage cart/wishlist, and simulate purchases with authentication and admin features.

---

## 🚀 Key Highlights
- 🛍️ 20+ Products Catalog
- 🔐 User Authentication System
- 🛒 Cart & Wishlist (localStorage)
- 🛠️ Admin Product Management
- 📊 Full-stack architecture (Frontend + Backend)

---

## 📋 Project Details
| Property | Details |
|----------|---------|
| **Name** | Nova Store |
| **Version** | 1.0.0 |
| **Type** | Full-stack E-Commerce Web App |
| **Tech Stack** | Node.js + Express, HTML/CSS/JS |
| **Server** | `http://localhost:3000` |
| **Storage** | JSON, localStorage, In-Memory |

---

## ✅ Features

### 🛍️ Customer Features
- Browse 20+ products
- Product detail page
- Add to Cart / Wishlist
- Buy Now simulation
- Persistent cart using localStorage

### 👤 Authentication
| Feature | Endpoint |
|---------|----------|
| Register | `POST /register` |
| Login | `POST /login` |
| Dashboard | `GET /dashboard` |
| Logout | `GET /logout` |

### 🛠️ Admin
- Add products via `/admin/add`
- Updates product database dynamically

---

## 📱 Frontend Pages

```
public/
├── index.html
├── product.html
├── cart.html
├── wishlist.html
├── login.html
├── register.html
├── admin.html
├── order-success.html
```

---

## 🔌 Backend APIs
| Endpoint | Method |
|----------|--------|
| `/data/products.json` | GET |
| `/api/products/:id` | GET |

---

## 🚀 Quick Start
```bash
npm install
npm start
```

Open: `http://localhost:3000`

---

## 📁 Project Structure
```
e-com/
├── server.js
├── package.json
├── data/
│   └── products.json
├── public/
│   ├── *.html
│   ├── styles.css
│   └── images/
└── views/
    └── dashboard.html
```

---

## 🔮 Future Improvements
- Database integration (MongoDB)
- Payment gateway
- JWT authentication
- Order tracking

---

👨‍💻 **Author**: Mahalakshmi B (mahabala257)
