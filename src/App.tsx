import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Discover from "./pages/Discover.js";
import Home from "./pages/Home.jsx";
import AppRoutes from "./routes/appRoutes.js";

const App = () => {
  return (
    <section className="flex gap-6">
      <Sidebar />
      <AppRoutes />
    </section>
  );
};

export default App;
