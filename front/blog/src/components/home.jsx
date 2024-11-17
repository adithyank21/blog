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

//  export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 10,
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ color: '#4CAF50' }}>
        Welcome to the Blog Website
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, color: '#555' }}>
        Share your thoughts, connect with others, and explore amazing blogs!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mx: 1, padding: '10px 20px' }}
        component={Link}
        to="/login"
      >
        Login
      </Button>
      <Button
        variant="outlined"
        color="primary"
        sx={{ mx: 1, padding: '10px 20px' }}
        component={Link}
        to="/register"
      >
        Register
      </Button>
    </Box>
  );
}

export default Home;
