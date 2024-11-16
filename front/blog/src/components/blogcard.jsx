// BlogCard.js
function BlogCard({ blog }) {
  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      <p>By: {blog.username}</p> {/* Display the username of the blog creator */}
      <p>Likes: {blog.likes} | Dislikes: {blog.dislikes}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  );
}

export default BlogCard;
