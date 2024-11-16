// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
// //   author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
//   likes: { type: Number, default: 0 },
//   dislikes: { type: Number, default: 0 }
// });

// module.exports = mongoose.model('blog', blogSchema);


const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who created the blog
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
});

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;

