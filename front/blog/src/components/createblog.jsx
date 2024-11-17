



// import React, { useState } from 'react';
// import axios from 'axios';

// function CreateBlog() {
//   const [formData, setFormData] = useState({ title: '', description: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem('userId');
//     try {
//       const response = await axios.post('http://localhost:5000/api/blogs', { ...formData, userId });
//       console.log(response.data.message);
//     } catch (error) {
//       console.error('Error creating blog:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="title" placeholder="Title" onChange={handleChange} />
//       <textarea name="description" placeholder="Description" onChange={handleChange} />
//       <button type="submit">Create Blog</button>
//     </form>
//   );
// }

// export default CreateBlog;



import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';

function CreateBlog() {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    try {
      const response = await axios.post('http://localhost:5000/api/blogs', { ...formData, userId });
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error creating blog');
      setSuccessMessage('');
      console.error('Error creating blog:', error);
    }
  };

  return (
    <Box
      sx={{
        width: 400,
        margin: 'auto',
        mt: 10,
        padding: 3,
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        Create Blog
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Description"
          name="description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, padding: '10px 0' }}
        >
          Create Blog
        </Button>
      </form>

      {/* Success and Error Messages */}
      {successMessage && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errorMessage}
        </Alert>
      )}
    </Box>
  );
}

export default CreateBlog;
