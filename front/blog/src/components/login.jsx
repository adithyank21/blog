// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();  // Initialize the useNavigate hook

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', formData);

//       // Save user data (e.g., token, userId) to localStorage
//       localStorage.setItem('userId', response.data.userId);
//       setSuccessMessage(response.data.message);

//       // Redirect to CreateBlog page after successful login
//       navigate('/createblog');  // Redirect to /createblog route

//     } catch (error) {
//       setErrorMessage(error.response?.data?.error || 'Something went wrong');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//       {errorMessage && <p>{errorMessage}</p>}
//       {successMessage && <p>{successMessage}</p>}
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Stack,
} from '@mui/material';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);

      // Save user data (e.g., token, userId) to localStorage
      localStorage.setItem('userId', response.data.userId);
      setSuccessMessage(response.data.message);

      // Redirect to CreateBlog page after successful login
      navigate('/createblog');

    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Something went wrong');
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
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: '10px 0' }}
          >
            Login
          </Button>
        </Stack>
      </form>

      {/* Display Error or Success Messages */}
      {errorMessage && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {successMessage}
        </Alert>
      )}
    </Box>
  );
};

export default Login;
