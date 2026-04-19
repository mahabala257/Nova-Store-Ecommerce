# 🛒 Nova Store – Complete E-Commerce Project Details

## 📋 Project Overview
| Property | Details |
|----------|---------|
| **Name** | Nova Store |
| **Version** | 1.0.0 |
| **Type** | Full-stack E-Commerce Web App |
| **Tech Stack** | Node.js + Express, Vanilla HTML/CSS/JS |
| **Server** | `http://localhost:3000` |
| **Storage** | JSON (products), localStorage (cart/wishlist), In-Memory (users) |

## ✅ Complete Features

### 🛍️ Customer Features
- [x] Browse 20+ products in responsive grid
- [x] Product details (`/product.html?id=1`)
- [x] Shopping Cart (add/remove/view)
- [x] Wishlist (add/remove/move to cart)
- [x] Mock checkout → Order success
- [x] LocalStorage persistence

### 👤 User Authentication
| Feature | Endpoint | Notes |
|---------|----------|-------|
| Register | `POST /register` | username/email/password → login |
| Login | `POST /login` | Sets session → `/dashboard` |
| Dashboard | `GET /dashboard` | Products + cart (login required) |
| Logout | `GET /logout` | Clears session |

### 🛠️ Admin Panel
- [x] Add products: `POST /admin/add` (name/price/image/desc)
- Updates `data/products.json` live

### 📱 Frontend Pages
```
public/
├── index.html (Home/Catalog)
├── product.html (Detail)
├── cart.html
├── wishlist.html
├── login.html
├── register.html
├── admin.html
├── order-success.html
└── styles.css (Responsive theme)
```

### 🔌 Backend APIs
| Endpoint | Method | Returns |
|----------|--------|---------|
| `/data/products.json` | GET | All 20 products |
| `/api/products/:id` | GET | Single product |

## 🏗️ Product Catalog (Sample)
| ID | Name | Price | Category | Rating |
|----|------|-------|----------|--------|
| 1 | Wireless Headphones | ₹149.99 | Electronics | 4.6 |
| 2 | Organic Face Cream | ₹34.99 | Beauty | 4.2 |
| 9 | Yoga Mat | ₹29.99 | Fitness | 4.7 |
| 20 | Grapefruit Toner | ₹18.99 | Beauty | 4.4 |

*(Full list in `data/products.json` - 20 items, images in `public/images/`)*

## 🚀 Quick Start
```bash
cd d:/e-com
npm install
npm start  # or: node server.js
```
- ✅ Visit `http://localhost:3000`
- All features work **out-of-the-box**

## 📁 Full File Structure
```
d:/e-com/
├── server.js                 # Backend (Express server)
├── package.json              # Dependencies
├── data/
│   └── products.json         # 20 Products
├── public/                   # Static frontend
│   ├── *.html (8 pages)
│   ├── styles.css            # Modern responsive CSS
│   └── images/ (21 PNGs)
└── views/
    └── dashboard.html        # Authenticated page
```

## 🎨 Styling Highlights
- **CSS Grid/Flexbox**: Responsive product grids
- **Theme**: Pink-Blue gradients, hover animations
- **Mobile-First**: `@media (max-width: 500px)`
- **Custom Properties**: `--red`, `--pink`, `--blue`

## 🔮 Limitations (MVP)
- No real database/payments
- In-memory users (lost on restart)
- No search/filter/orders history

## 📈 Future Enhancements
1. MongoDB/PostgreSQL
2. JWT auth
3. Stripe/PayPal
4. User profiles/orders
5. Search & filters

**Author**: mahal (C:/Users/mahal)  
**Generated**: By BLACKBOXAI Analysis
