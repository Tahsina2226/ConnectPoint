/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuthRedirect from "../hooks/useAuthRedirect";
import { useAuth } from "../components/Auth/AuthContext"; // ✅ import context

const storage = getStorage();

const SignUp = () => {
  useAuthRedirect();

  const navigate = useNavigate();
  const { setUser } = useAuth(); // ✅ use context to update user globally
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileFile, setProfileFile] = useState(null);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const firebaseErrorMessages = {
    "auth/email-already-in-use": "This email is already registered.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/weak-password": "Password should be at least 6 characters.",
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      let photoURL = null;

      if (profileFile) {
        const storageRef = ref(storage, `profilePics/${userCredential.user.uid}`);
        await uploadBytes(storageRef, profileFile);
        photoURL = await getDownloadURL(storageRef);
      }

      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL,
      });

      await userCredential.user.reload();

      // ✅ Update global user context so Navbar shows immediately
      setUser({ ...auth.currentUser });

      toast.success("Sign Up Successful!");
      navigate("/");

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setProfileFile(null);
    } catch (err) {
      const message =
        firebaseErrorMessages[err.code] || "Failed to sign up. Please try again.";
      setError(message);
      toast.error(message);
      console.error(err);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await result.user.reload();

      setUser({ ...auth.currentUser }); // update context
      toast.success("Signed in with Google!");
      navigate("/");
    } catch (err) {
      const message =
        firebaseErrorMessages[err.code] || "Failed to sign up with Google.";
      setError(message);
      toast.error(message);
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-blue-500">
      <Toaster position="top-right" />
      <form
        onSubmit={handleSignUp}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring focus:ring-purple-400"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfileFile(e.target.files[0])}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring focus:ring-purple-400"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring focus:ring-purple-400"
          required
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-400 pr-10"
            required
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="relative mb-6">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-400 pr-10"
            required
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:from-blue-500 hover:to-purple-500 transition"
        >
          Sign Up
        </button>

        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Sign Up with Google
        </button>
      </form>
    </div>
  );
};

export default SignUp;
