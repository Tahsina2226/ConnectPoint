import React, { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import LoadingScreen from './components/coverPage.jsx';
import Roots from './pages/Roots.jsx';  
import Explore from './pages/Explore.jsx'
import Friends from './pages/Friends.jsx'
import Chat from './pages/Chat.jsx'
import Notifications from './pages/Notifications.jsx'
import Profile from './pages/Profile.jsx';
import Admin from './pages/Admin.jsx';
import Login from './pages/Login.jsx';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="transition-opacity duration-700 ease-in">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",  
    element: <Explore />, 
    
  },
  {
    path: "/friends",  
    element: <Friends />, 
    
  },
  {
    path: "/chat",  
    element: <Chat />, 
    
  },
  {
    path: "/notifications",  
    element: <Notifications />, 
    
  },
  {
    path: "/profile",  
    element: <Profile />, 
    
  },
  {
    path: "/admin",  
    element: <Admin />, 
    
  },
  {
    path: "/login",  
    element: <Login />, 
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
