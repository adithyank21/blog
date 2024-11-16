import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Create the root element for the app
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter> {/* Wrap the App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
