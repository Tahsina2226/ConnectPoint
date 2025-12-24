/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const Roots = () => (
  <div>
    <Navbar />
    <Outlet />
    <Toaster position="top-right" /> {/* always mounted */}
  </div>
);

export default Roots;
