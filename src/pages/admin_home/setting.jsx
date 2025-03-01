import React from "react";

function Settings() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Change Password:</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Enter new password"
          />
        </div>
        <div>
          <label className="block text-gray-700">Notification Preferences:</label>
          <select className="w-full p-2 border border-gray-300 rounded mt-2">
            <option>Email</option>
            <option>SMS</option>
            <option>Push Notifications</option>
          </select>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;
