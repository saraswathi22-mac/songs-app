import React from "react";
import { Route, Routes } from "react-router-dom";
import Discover from "../pages/Discover";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
    </Routes>
  );
};

export default AppRoutes;
