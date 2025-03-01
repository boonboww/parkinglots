import React from "react";
import { FiUsers, FiDollarSign, FiShoppingCart } from "react-icons/fi";

function Dashboard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Dashboard Overview</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-500 text-white rounded-lg shadow flex items-center gap-4">
          <FiUsers size={30} />
          <div>
            <h4 className="text-xl font-semibold">Total Users</h4>
            <p className="text-2xl">1,230</p>
          </div>
        </div>
        <div className="p-4 bg-green-500 text-white rounded-lg shadow flex items-center gap-4">
          <FiDollarSign size={30} />
          <div>
            <h4 className="text-xl font-semibold">Revenue</h4>
            <p className="text-2xl">$45,600</p>
          </div>
        </div>
        <div className="p-4 bg-red-500 text-white rounded-lg shadow flex items-center gap-4">
          <FiShoppingCart size={30} />
          <div>
            <h4 className="text-xl font-semibold">Pending Orders</h4>
            <p className="text-2xl">18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
