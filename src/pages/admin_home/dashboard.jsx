import React from "react";
import { FiUsers, FiDollarSign, FiShoppingCart } from "react-icons/fi";

function Dashboard() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md">
      <h3 className="text-lg font-bold mb-4">Dashboard Overview</h3>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="p-4 border-r border-gray-400 text-black  flex justify-center items-center gap-4">
          <div className="p-6 bg-[#D3FFE7] rounded-full">
          <FiUsers size={30} color="#00AC4F" />
          </div>

          <div>
            <h4 className="text-sm text-[#ACACAC] font-semibold">Total Users</h4>
            <p className="text-3xl font-semibold">1,230</p>
          </div>
        </div>
        <div className="p-4  text-black rounded-lg  flex justify-center items-center gap-4">
          <div className="p-6 bg-[#D3FFE7] rounded-full">
          <FiDollarSign size={30}  color="#00AC4F"/>
          </div>
          
          <div>
            <h4 className="text-sm text-[#ACACAC] font-semibold">Revenue</h4>
            <p className="text-3xl font-semibold">$45,600</p>
          </div>
        </div>
        <div className="p-4 border-l border-gray-400 text-black   flex justify-center items-center gap-4">
          <div className="p-6 bg-[#D3FFE7] rounded-full">
          <FiShoppingCart size={30}  color="#00AC4F"/>
          </div>
          
          <div>
            <h4 className="text-sm text-[#ACACAC] font-semibold">Pending Orders</h4>
            <p className="text-3xl font-semibold">18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
