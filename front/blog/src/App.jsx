// import { Route, Routes } from 'react-router-dom';  // Correct imports for React Router v6
// import Home from './components/home';
// import Register from './components/register';
// import Login from './components/login';
// import CreateBlog from './components/createblog';
// import BlogCard from './components/blogcard';

// function App() {
//   return (
//     <div>
//       <Routes> {/* Use Routes instead of Switch in React Router v6 */}
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/createblog" element={<CreateBlog />} />
//         <Route path='/blog' element={<BlogCard/>}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import CreateBlog from './components/createblog';
import BlogCard from './components/blogcard';

function App() {
  return (
    <>
    <div>
      {/* Navigation Bar */}
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My Blogs
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/blog"> View Blogs</Button>
          {/* <Button color="inherit" component={Link} to="/createblog">Create Blog</Button> */}
          {/* <Button color="inherit" component={Link} to="/register">Register</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button> */}
         
        </Toolbar>
        
      </AppBar>
      
      {/* Main Content */}
      <Container style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blog" element={<BlogCard />} />
        </Routes>
        
      </Container>
    </div>
    <div>
      <BlogCard/>
    </div>
    </>
  );
}

export default App;
