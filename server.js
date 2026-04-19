const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/data', express.static(path.join(__dirname, 'data')));

// Users (in-memory for now)
let users = [];
let currentUser = null;

// Product data file
const productFilePath = path.join(__dirname, 'data', 'products.json');

// Helper to load products from JSON
function loadProducts() {
  try {
    const data = fs.readFileSync(productFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error loading products.json:", err);
    return [];
  }
}

// Helper to save products to JSON
function saveProducts(products) {
  fs.writeFileSync(productFilePath, JSON.stringify(products, null, 2));
}

// Admin - Add product
app.post('/admin/add', (req, res) => {
  const { name, price, image, description } = req.body;
  let products = loadProducts();
  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    name,
    price: parseFloat(price),
    image,
    description
  };
  products.push(newProduct);
  saveProducts(products);
  res.send(`<h2>Product Added! <a href="/admin.html">Add More</a> or <a href="/index.html">View Store</a></h2>`);
});

// Product API - individual product by ID
app.get('/api/products/:id', (req, res) => {
  const products = loadProducts();
  const product = products.find(p => p.id == req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ error: "Product not found" });
});

// Register
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.send('<h2>User already exists. <a href="/register.html">Go back</a></h2>');
  }
  users.push({ username, email, password });
  res.redirect('/login.html');
});

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const found = users.find(u => u.username === username && u.password === password);
  if (found) {
    currentUser = username;
    res.redirect('/dashboard');
  } else {
    res.send('<h2>Login failed. <a href="/login.html">Try again</a></h2>');
  }
});

// Dashboard
app.get('/dashboard', (req, res) => {
  if (!currentUser) return res.redirect('/login.html');
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Logout
app.get('/logout', (req, res) => {
  currentUser = null;
  res.redirect('/login.html');
});

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
