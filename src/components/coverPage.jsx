import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";  // Importing a professional spinner icon from react-icons

function LoadingScreen() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-teal-800 via-teal-600 to-gray-800 h-screen">
      <motion.div
        className="bg-white bg-opacity-15 shadow-lg backdrop-blur-md p-8 rounded-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="mb-4 font-extrabold text-4xl text-white animate-pulse"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
           Connect Point
        </motion.h1>
        <p className="text-gray-200 text-md italic">
          We're preparing your personalized experience...
        </p>
        <div className="relative flex justify-center mt-6">
          <motion.div
            className="text-4xl text-white animate-spin"
            animate={{
              rotate: 360,
            }}
            transition={{
              loop: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
          >
            <AiOutlineLoading3Quarters />
          </motion.div>

          <motion.div
            className="absolute bg-teal-300 bg-opacity-25 blur-lg rounded-full w-16 h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              loop: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
        
      </motion.div>
    </div>
  );
}

export default LoadingScreen;
