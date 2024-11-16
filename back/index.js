const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse incoming JSON requests

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/blog_app')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Database connection error:', error));

// Routes
app.use('/api/auth', userRoutes);  // Routes for user-related operations (register, login)
app.use('/api/blogs', blogRoutes);  // Routes for blog-related operations (create, like, dislike)

// Test Route (Optional - To verify server is working)
app.get('/', (req, res) => {
  res.send('Welcome to the Blog API');
});

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
