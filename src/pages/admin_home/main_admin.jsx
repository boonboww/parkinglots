import React from "react";
import { Routes, Route } from "react-router-dom";  
import Dashboard from "./dashboard";
import User_admin from "./user_admin";
import Settings from "./setting";
import Help from "./help";

function Main_admin() {
  return (
    <div className="bg-[#F9FBFF] flex-1 flex flex-col px-16">
      {/* Header */}
      <header className="pt-12  flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Admin Panel</h2>
        <div className="relative">
        <input type="text" placeholder="Search" className=" border pl-10 py-2 rounded-xl shadow-[0px 10px 60px 0px rgba(226, 236, 249, 0.50)]" />
        <i class="fa-solid fa-magnifying-glass text-[#7E7E7E] absolute top-[50%] translate-y-[-50%] left-2"></i>
        </div>
      
      </header>

      {/* Content Area */}
      <main className="flex-1 mt-6">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="useradmin" element={<User_admin />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Routes>
      </main>
    </div>
  );
}

export default Main_admin;
