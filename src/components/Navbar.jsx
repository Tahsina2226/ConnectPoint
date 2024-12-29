import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaHome, FaCompass, FaUserFriends, FaComments, FaBell, FaUser, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/explore', label: 'Explore', icon: <FaCompass /> },
    { path: '/friends', label: 'Friends', icon: <FaUserFriends /> },
    { path: '/chat', label: 'Chat', icon: <FaComments /> },
    { path: '/notifications', label: 'Notifications', icon: <FaBell /> },
    { path: '/profile', label: 'Profile', icon: <FaUser /> },
    { path: '/admin', label: 'Admin', icon: <FaLock /> },
    { path: '/login', label: 'Login', icon: <FaLock /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-800 via-teal-900 to-slate-800 shadow-lg text-white">
      <div className="flex justify-between items-center mx-auto p-4 max-w-7xl">
        <motion.div
          className="font-bold text-4xl"
          animate={{
            y: [0, -10, 0], // Bouncing effect
            opacity: [1, 0.8, 1], // Opacity change
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            loop: Infinity,
          }}
        >
          <Link
            to="/"
            className="text-teal-400 hover:text-teal-300 transition duration-300"
          >
            ConnectPoint
          </Link>
        </motion.div>

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

        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-gradient-to-r from-slate-800 via-teal-900 to-slate-800 lg:static lg:flex lg:space-x-6 lg:w-auto lg:block`}
        >
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`border-slate-700 border-b lg:border-none ${
                location.pathname === item.path ? 'bg-teal-700' : ''
              }`}
            >
              <Link
                to={item.path}
                className={`flex items-center space-x-2 block p-3 lg:p-2 text-sm ${
                  location.pathname === item.path
                    ? 'text-teal-300'
                    : 'hover:text-teal-300 transition duration-300'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
