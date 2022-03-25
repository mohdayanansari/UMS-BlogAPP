import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth, Home, Post } from "../pages";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Post />} />
        {/* Auth Route */}
        <Route path="/auth" element={<Auth/>} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
