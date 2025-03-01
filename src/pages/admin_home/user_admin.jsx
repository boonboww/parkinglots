import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

function User_admin() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Michael Johnson", email: "michael@example.com", role: "User" },
  ];

  return (
    <div className="flex-1 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Manage Users</h3>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Role</th>
              <th className="text-center p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3 text-center">
                  <button className="text-blue-500 hover:text-blue-700 mr-3">
                    <FiEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User_admin;
