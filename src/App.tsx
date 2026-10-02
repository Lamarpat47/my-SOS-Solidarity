import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./pages/Footer"; // Global footer retained here

import FullEnglishHome from "./pages/FullEnglishHome";
import ContactUs from "./pages/ContactUs"; // 1. Import ContactUs

// Action Components
import ActionsYaounde from "./pages/ActionsYaounde";
import ActionsDouala from "./pages/ActionsDouala";
import ActionsBafoussam from "./pages/ActionsBafoussam";

export const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Global Navbar */}
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<FullEnglishHome />} />

            {/* Contact Page Route */}
            <Route path="/contact" element={<ContactUs />} /> {/* 2. Add Route */}

            {/* City Action Routes */}
            <Route path="/ActionsYaounde" element={<ActionsYaounde />} />
            <Route path="/ActionsDouala" element={<ActionsDouala />} />
            <Route path="/ActionsBafoussam" element={<ActionsBafoussam />} />

            {/* Default /actions route */}
            <Route path="/actions" element={<Navigate to="/ActionsDouala" replace />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer kept for all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;