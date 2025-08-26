import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import ResearchDashboard from "../pages/ResearchDashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import React from "react";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<ResearchDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;