import React from "react";
import { Routes, Route } from "react-router-dom";  // Đảm bảo đã import Routes và Route
import Dashboard from "./dashboard";
import User_admin from "./user_admin";
import Settings from "./setting";

function Main_admin() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <h2 className="text-xl font-semibold">Admin Panel</h2>
        <div className="flex items-center gap-4">
          <span className="text-gray-700">Admin</span>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border"
          />
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="useradmin" element={<User_admin />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default Main_admin;
