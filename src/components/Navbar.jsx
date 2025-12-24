import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaCompass,
  FaUserFriends,
  FaComments,
  FaBell,
  FaLock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../firebase.config";
import { useAuth } from "../components/Auth/AuthContext"; // ✅ use context

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading } = useAuth(); // ✅ use context
  const location = useLocation();

  if (loading) return null;

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/explore", label: "Explore", icon: <FaCompass /> },
    { path: "/friends", label: "Friends", icon: <FaUserFriends /> },
    { path: "/chat", label: "Chat", icon: <FaComments /> },
    { path: "/notifications", label: "Notifications", icon: <FaBell /> },
    ...(!user ? [{ path: "/login", label: "Login", icon: <FaLock /> }] : []),
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Logout failed!");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-slate-800 via-teal-900 to-slate-800 shadow-lg text-white relative">
      <Toaster position="top-right" />
      <div className="flex justify-between items-center mx-auto p-4 max-w-7xl">
        <motion.div
          className="font-bold text-4xl"
          animate={{ y: [0, -10, 0], opacity: [1, 0.8, 1] }}
          transition={{ duration: 1.5, ease: "easeInOut", loop: Infinity }}
        >
          <Link
            to="/"
            className="text-teal-400 hover:text-teal-300 transition duration-300"
          >
            ConnectPoint
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-teal-400 hover:text-teal-300 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Menu items */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-gradient-to-r from-slate-800 via-teal-900 to-slate-800 lg:static lg:flex lg:space-x-6 lg:w-auto lg:block`}
        >
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`border-slate-700 border-b lg:border-none ${
                location.pathname === item.path ? "bg-teal-700" : ""
              }`}
            >
              <Link
                to={item.path}
                className={`flex items-center space-x-2 block p-3 lg:p-2 text-sm ${
                  location.pathname === item.path
                    ? "text-teal-300"
                    : "hover:text-teal-300 transition duration-300"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Profile + Logout */}
        {user && (
          <div className="hidden lg:flex items-center space-x-3 ml-6">
            <img
              src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="profile"
              className="w-9 h-9 rounded-full border border-teal-400"
            />
            <div className="text-sm leading-tight">
              <p className="text-teal-300 font-semibold">
                {user.displayName || "User"}
              </p>
              <p className="text-gray-300 text-xs">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
