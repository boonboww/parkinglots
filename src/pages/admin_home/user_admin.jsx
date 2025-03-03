import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

function User_admin() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      role: "User",
    },
    {
      id: 4,
      name: "Jane Cooper",
      email: "jane@microsoft.com",
      role: "User",
    },
    {
      id: 5,
      name: "Floyd Miles",
      email: "floyd@yahoo.com",
      role: "User",
    },
    {
      id: 6,
      name: "Ronald Richards",
      email: "Ronald@example.com",
      role: "User",
    },
    {
      id: 7,
      name: "Marvin McKinney",
      email: "Marvin@example.com",
      role: "User",
    },
    {
      id: 8,
      name: "Jerome Bell",
      email: "Jerome@example.com",
      role: "User",
    },
  ];

  return (
    <div className="flex-1 p-6 ">
      <div className="bg-white p-6 shadow rounded-3xl">
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <h3 className="text-2xl font-bold mb-2">All Customers</h3>
            <h4 className="text-[#16C098] text-sm">Active Members</h4>
          </div>
          <div className="flex gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#F9FBFF] py-2 px-6 rounded-3xl shadow placeholder:pl-2"
              />
              <i class="fa-solid fa-magnifying-glass text-[#7E7E7E] absolute top-[50%] translate-y-[-50%] left-2"></i>
            </div>
            <div className="py-2 px-4 rounded-3xl shadow bg-[#F9FBFF]">
              <span className="text-[#7E7E7E]">Short by: </span>
              <select>
                <option value="newest" selected>
                  {" "}
                  Newest
                </option>
                <option value="oldest">Oldest</option>
                <option value="popular">Popular</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-y-scroll h-[60vh]">
          <table className="min-w-full ">
            <thead>
              <tr className="text-[#B5B7C0]">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Email</th>
                <th className="text-left p-3">Role</th>
                <th className="text-center p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((user) => (
                <tr key={user.id} className="border-b font-medium">
                  <td className="p-6">{user.name}</td>
                  <td className="p-6">{user.email}</td>
                  <td className="p-6">{user.role}</td>
                  <td className="p-6 text-center">
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
    </div>
  );
}

export default User_admin;
