import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function BlogCard() {
  const [blogs, setBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchBlogs = async () => {
    const user_id = localStorage.getItem('userId');
    try {
      const response = await axios.get(`http://localhost:5000/api/blogs?user_id=${user_id}`);
      setBlogs(response.data);
    } catch (error) {
      setErrorMessage('Error fetching blogs');
      console.error(error);
    }
  };

  const handleLike = async (blogId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/blogs/${blogId}/like`);
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === blogId ? { ...blog, likes: response.data.likes } : blog
        )
      );
    } catch (error) {
      console.error('Error liking blog:', error);
    }
  };

  const handleDislike = async (blogId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/blogs/${blogId}/dislike`);
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === blogId ? { ...blog, dislikes: response.data.dislikes } : blog
        )
      );
    } catch (error) {
      console.error('Error disliking blog:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Blogs</h2>
      {errorMessage && (
        <p
          style={{
            color: 'red',
            textAlign: 'center',
            backgroundColor: '#ffe6e6',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          {errorMessage}
        </p>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog._id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px',
              backgroundColor: '#fff',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ color: '#1976d2', marginBottom: '10px' }}>{blog.title}</h3>
            <p style={{ color: '#555', marginBottom: '10px' }}>{blog.description}</p>
            <p style={{ color: '#888', fontSize: '0.9em', marginBottom: '10px' }}>
              By: {blog.userId?.username || 'Unknown Author'}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <button
                  onClick={() => handleLike(blog._id)}
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginRight: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <FaThumbsUp /> {blog.likes}
                </button>
                <button
                  onClick={() => handleDislike(blog._id)}
                  style={{
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <FaThumbsDown /> {blog.dislikes}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCard;
