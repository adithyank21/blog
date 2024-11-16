const Blog = require('../models/blog');

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const newBlog = new Blog({ title, description, author });

    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating blog" });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username');
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching blogs" });
  }
};

// Like a blog
exports.likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    blog.likes = (blog.likes || 0) + 1;
    await blog.save();

    res.json({ message: "Blog liked successfully", likes: blog.likes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error liking blog" });
  }
};

// Dislike a blog
exports.dislikeBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    blog.dislikes = (blog.dislikes || 0) + 1;
    await blog.save();

    res.json({ message: "Blog disliked successfully", dislikes: blog.dislikes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error disliking blog" });
  }
};
