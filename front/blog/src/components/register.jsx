// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [formData, setFormData] = useState({ username: '', email: '', password: '' });
//   const [errorMessage, setErrorMessage] = useState(''); // State for error message
//   const [successMessage, setSuccessMessage] = useState(''); // State for success message

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage(''); // Clear previous error message
//     setSuccessMessage(''); // Clear previous success message

//     try {
//       // Sending POST request to backend
//       const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      
//       // On successful registration
//       setSuccessMessage(response.data.message);
//       console.log(response.data.message); // Success message from server
//     } catch (error) {
//       // Handling error
//       setErrorMessage(error.response?.data?.error || "Something went wrong");
//       console.error(error.response?.data?.error || "Something went wrong");
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
      
//       {/* Display error message if any */}
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      
//       {/* Display success message if registration is successful */}
//       {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <button type="submit">Register</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Alert, Stack } from '@mui/material';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      setSuccessMessage(response.data.message);
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
        Register
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: '10px 0' }}
          >
            Register
          </Button>
        </Stack>
      </form>

      {/* Error and Success Messages */}
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

export default Register;
