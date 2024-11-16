// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div>
//       <h1>Blog Website</h1>
//       <Link to="/login">Login</Link>
//       <Link to="/register">Register</Link>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogCard from './blogcard'; // Assuming you have BlogCard component

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data); // Set the blogs data
      } catch (error) {
        setErrorMessage('Failed to fetch blogs');
      }
    };

    fetchBlogs(); // Fetch blogs on component mount
  }, []); // Empty dependency array to run once when component mounts

  return (
    <div>
      <h1>Blog Website</h1>
      <Link to="/login">Login</Link>
  <Link to="/register">Register</Link>

      <h1>All Blogs</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
