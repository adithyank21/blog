// const express = require('express');
// const Blog = require('../models/blog'); // Ensure the correct path and model name

// const router = express.Router();

// // Create a new blog
// router.post('/', async (req, res) => {
//   try {
//     const { title, description, author } = req.body;

//     // Create and save the new blog
//     const newBlog = new Blog({ title, description, author });
//     await newBlog.save();

//     res.status(201).json({ message: "Blog created successfully", blog: newBlog });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error creating blog" });
//   }
// });

// // Get all blogs
// router.get('/', async (req, res) => {
//   try {
//     // Fetch all blogs and populate the author's username
//     const blogs = await Blog.find().populate('author', 'username');
//     res.json(blogs);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error fetching blogs" });
//   }
// });

// // Like a blog
// router.post('/:id/like', async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) return res.status(404).json({ error: "Blog not found" });

//     // Increment the likes
//     blog.likes = (blog.likes || 0) + 1;
//     await blog.save();

//     res.json({ message: "Blog liked successfully", likes: blog.likes });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error liking blog" });
//   }
// });

// // Dislike a blog
// router.post('/:id/dislike', async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) return res.status(404).json({ error: "Blog not found" });

//     // Increment the dislikes
//     blog.dislikes = (blog.dislikes || 0) + 1;
//     await blog.save();

//     res.json({ message: "Blog disliked successfully", dislikes: blog.dislikes });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error disliking blog" });
//   }
// });

// module.exports = router;




// const express = require('express');
// const blogController = require('../controllers/blogController');

// const router = express.Router();

// // Blog Routes
// router.post('/', blogController.createBlog);
// router.get('/', blogController.getAllBlogs);
// router.post('/:id/like', blogController.likeBlog);
// router.post('/:id/dislike', blogController.dislikeBlog);

// module.exports = router;

// const express = require('express');
// const Blog = require('../models/blog');
// const router = express.Router();

// Get all blogs
// router.get('/', async (req, res) => {
//   try {
//     const blogs = await Blog.find().populate('userId', 'username'); // Populate userId to get the username
//     res.status(200).json(blogs);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch blogs' });
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     console.log('Fetching blogs...');
//     const blogs = await Blog.find().populate('userId', 'username');
//     console.log('Blogs fetched:', blogs);

//     if (!blogs || blogs.length === 0) {
//       return res.status(404).json({ error: 'No blogs found' });
//     }

//     res.status(200).json(blogs);
//   } catch (error) {
//     console.error('Error fetching blogs:', error.message);
//     res.status(500).json({ error: 'Failed to fetch blogs' });
//   }
// });

// router.get('/', async (req, res) => {
//   const { user_id } = req.query;

//   try {
//     const blogs = user_id
//       ? await Blog.find({ userId: user_id }).populate('userId', 'username')
//       : await Blog.find().populate('userId', 'username');

//     res.status(200).json(blogs);
//   } catch (error) {
//     console.error('Error fetching blogs:', error.message);
//     res.status(500).json({ error: 'Failed to fetch blogs' });
//   }
// });





// // Create a new blog
// router.post('/', async (req, res) => {
//   try {
//     const { title, description, userId } = req.body;
//     const newBlog = new Blog({ title, description, userId });
//     await newBlog.save();
//     res.status(201).json(newBlog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create blog' });
//   }
// });

// // Like a blog
// router.put('/like/:id', async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     blog.likes += 1;
//     await blog.save();
//     res.status(200).json(blog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to like blog' });
//   }
// });

// // Dislike a blog
// router.put('/dislike/:id', async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     blog.dislikes += 1;
//     await blog.save();
//     res.status(200).json(blog);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to dislike blog' });
//   }
// });

// module.exports = router;






const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Create Blog
router.post('/', async (req, res) => {
  const { title, description, userId } = req.body;

  try {
    const blog = new Blog({ title, description, userId });
    await blog.save();
    res.status(201).json({ message: 'Blog created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating blog' });
  }
});

// Get Blogs
// router.get('/', async (req, res) => {
//   const { user_id } = req.query;

//   try {
//     const blogs = user_id
//       ? await Blog.find({ userId: user_id }).populate('userId', 'username')
//       : await Blog.find().populate('userId', 'username');

//     res.status(200).json(blogs);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching blogs' });
//   }
// });

router.get('/', async (req, res) => {
  try {
    // Fetch all blogs with their associated user information (username)
    const blogs = await Blog.find().populate('userId', 'username');
    
    // Return the blogs to the client
    res.status(200).json(blogs);
  } catch (error) {
    // Handle any errors during fetching
    res.status(500).json({ error: 'Error fetching blogs' });
  }
});


// Like Blog
router.post('/:id/like', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    blog.likes += 1;
    await blog.save();
    res.status(200).json({ message: 'Blog liked successfully', likes: blog.likes });
  } catch (error) {
    res.status(500).json({ error: 'Error liking the blog' });
  }
});

// Dislike Blog
router.post('/:id/dislike', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    blog.dislikes += 1;
    await blog.save();
    res.status(200).json({ message: 'Blog disliked successfully', dislikes: blog.dislikes });
  } catch (error) {
    res.status(500).json({ error: 'Error disliking the blog' });
  }
});


module.exports = router;
