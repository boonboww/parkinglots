import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import auth từ firebaseConfig.js
import { signOut } from "firebase/auth";
import { FiLogOut } from "react-icons/fi";

export const Navbar = () => {
  const [user, setUser] = useState(null);

  // Kiểm tra trạng thái đăng nhập khi component mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Hủy lắng nghe khi component unmount
  }, []);

  // Hàm logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Lỗi đăng xuất:", error);
    }
  };

  return (
    <div className="w-full text-white flex items-center bg-gray-900 h-[10vh] shadow-[0_5px_30px_rgba(0,22,84,0.1)] py-4 sticky top-0 z-[99999]">
      <div className="flex-1">
        <h2 className="ml-8 bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl font-bold">
          Parking Lots
        </h2>
      </div>

      <div className="flex justify-center">
        <Link
          to="/"
          className="no-underline mx-3 hover:text-green-400 duration-300"
        >
          HOME
        </Link>
        <Link
          to="/services"
          className="no-underline mx-3 hover:text-green-400 duration-300"
        >
          SERVICES
        </Link>
        <Link
          to="/price"
          className="no-underline mx-3 hover:text-green-400 duration-300"
        >
          PRICING
        </Link>
        <Link
          to="/contact"
          className="no-underline mx-3 hover:text-green-400 duration-300"
        >
          CONTACT
        </Link>
      </div>

      <div className="flex-1 flex justify-end items-center">
        {user ? (
          // Nếu đã đăng nhập
          <div className="flex items-center gap-4">
            <img
              src={localStorage.getItem("profilePic")}
              className="w-10 h-10 rounded-full"
            />

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded cursor-pointer mr-[10px]"
            >
              <FiLogOut />
            </button>
          </div>
        ) : (
          // Nếu chưa đăng nhập
          <>
            <Link
              to="/login"
              className="no-underline mx-3 hover:text-green-400 duration-300"
            >
              LOGIN
            </Link>
            <Link
              to="/register"
              className="no-underline mx-3 hover:text-green-400 duration-300"
            >
              REGISTER
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
