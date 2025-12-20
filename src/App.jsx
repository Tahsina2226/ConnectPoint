import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingScreen from "./components/coverPage.jsx";
import Roots from "./pages/Roots.jsx";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import Friends from "./pages/Friends.jsx";
import Chat from "./pages/Chat.jsx";
import Notifications from "./pages/Notifications.jsx";
import Profile from "./pages/Profile.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx"; // ✅ import ProtectedRoute

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        {
          path: "/explore",
          element: (
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          ),
        },
        {
          path: "/friends",
          element: (
            <ProtectedRoute>
              <Friends />
            </ProtectedRoute>
          ),
        },
        {
          path: "/chat",
          element: (
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          ),
        },
        {
          path: "/notifications",
          element: (
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/admin",
          element: (
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="transition-opacity duration-700 ease-in">
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </div>
  );
}

export default App;
