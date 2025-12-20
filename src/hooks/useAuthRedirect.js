import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config"; // make sure path is correct
import { useNavigate } from "react-router-dom";

/**
 * Custom hook to redirect authenticated users to home
 * Usage: just call useAuthRedirect() in Login or SignUp components
 */
const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is logged in, redirect to Home
        navigate("/");
      }
    });

    // Clean up listener on unmount
    return () => unsubscribe();
  }, [navigate]);
};

export default useAuthRedirect;
