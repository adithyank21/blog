// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateBlog = () => {
//   const [formData, setFormData] = useState({ title: '', description: '', content: '' });
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');

//     // Frontend validation
//     if (!formData.title || !formData.description || !formData.content) {
//       setErrorMessage('All fields are required.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/blogs', formData);
//       setSuccessMessage(response.data.message); // Success response from the backend
//       setFormData({ title: '', description: '', content: '' }); // Clear form on success
//     } catch (error) {
//       console.error('Error creating blog:', error.response?.data || error.message);
//       setErrorMessage(error.response?.data?.error || 'Internal server error.');
//     }
//   };

//   return (
//     <div>
//       <h1>Create Blog</h1>
//       {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={formData.title}
//           onChange={handleChange}
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//         <textarea
//           name="content"
//           placeholder="Content"
//           value={formData.content}
//           onChange={handleChange}
//         />
//         <button type="submit">Create Blog</button>
//       </form>
//     </div>
//   );
// };

// export default CreateBlog;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId'); // Retrieve user ID from localStorage
    if (!userId) {
      setErrorMessage('User not logged in.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:5000/api/blogs',
        formData,
        { headers: { userId } } // Send user ID in headers
      );
      navigate('/'); // Redirect to the homepage
    } catch (error) {
      console.error('Error creating blog:', error.response?.data || error.message);
      setErrorMessage('Failed to create the blog.');
    }
  };

  return (
    <div>
      <h1>Create Blog</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <textarea name="content" placeholder="Content" onChange={handleChange} required />
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
