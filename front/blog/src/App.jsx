import { Route, Routes } from 'react-router-dom';  // Correct imports for React Router v6
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import CreateBlog from './components/createblog';
import BlogCard from './components/blogcard';

function App() {
  return (
    <div>
      <Routes> {/* Use Routes instead of Switch in React Router v6 */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path='/blog' element={<BlogCard/>}/>
      </Routes>
    </div>
  );
}

export default App;
