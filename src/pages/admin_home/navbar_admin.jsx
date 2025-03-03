import React, { useState, useEffect } from "react";
import { FiHome, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom"; 
import { auth } from "../../firebaseConfig"; 
import { signOut } from "firebase/auth"; 

function Navbar_admin() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); 
  }, []);

  
  const handleLogout = async () => {
    try {
      await signOut(auth); 
      setUser(null); 
      navigate("/login"); 
    } catch (error) {
      console.error("Lỗi đăng xuất:", error);
    }
  };

  return (
    <div className="w-64 bg-white text-black p-5 flex flex-col ">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
      <nav className="flex-1">
        <ul>
          <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded cursor-pointer">
            <Link to="/admin/dashboard" className="flex items-center gap-3">
              <FiHome /> Dashboard
            </Link>
          </li>
          <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded cursor-pointer">
            <Link to="/admin/useradmin" className="flex items-center gap-3">
              <FiUsers /> Users
            </Link>
          </li>
          <li className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded cursor-pointer">
            <Link to="/admin/settings" className="flex items-center gap-3">
              <FiSettings /> Settings
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded cursor-pointer"
      >
        <FiLogOut /> Logout
      </button>
    </div>
  );
}

export default Navbar_admin;
