import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Discover from "./pages/Discover.js";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <section className="flex gap-6">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </section>
  );
};

export default App;
