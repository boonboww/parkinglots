import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import auth từ firebaseConfig.js
import { signOut } from "firebase/auth";
import { FiLogOut } from "react-icons/fi";

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Trạng thái điều khiển menu logout

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
      setIsMenuVisible(false); // Ẩn menu logout khi đã đăng xuất
    } catch (error) {
      console.error("Lỗi đăng xuất:", error);
    }
  };

  // Hàm để hiển thị/ẩn menu logout khi nhấn vào ảnh người dùng
  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <div className="w-full text-white flex items-center bg-gray-900 h-[10vh] shadow-[0_5px_30px_rgba(0,22,84,0.1)] py-4 sticky top-0 z-[99999]">
      <div className="flex-1">
        <h2 className="ml-8 bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl font-bold">
          Parking Lots
        </h2>
      </div>

      <div className="flex justify-center flex-1 space-x-8">
        <Link
          to="/"
          className="no-underline mx-3 hover:text-blue-700 duration-300"
        >
          HOME
        </Link>
        <Link
          to="/services"
          className="no-underline mx-3 hover:text-blue-700 duration-300"
        >
          SERVICES
        </Link>
        <Link
          to="/price"
          className="no-underline mx-3 hover:text-blue-700 duration-300"
        >
          PRICING
        </Link>
        <Link
          to="/contact"
          className="no-underline mx-3 hover:text-blue-700 duration-300"
        >
          CONTACT
        </Link>
      </div>

      <div className="flex-1 flex justify-end items-center gap-5 pr-12">
        {user ? (
          // Nếu đã đăng nhập
          <div className="relative">
            <img
              src={localStorage.getItem("profilePic")}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg object-cover cursor-pointer"
              onClick={toggleMenu} // Khi nhấn vào ảnh, sẽ toggle menu
            />

            {isMenuVisible && (
              <div className="absolute right-[50%] translate-x-[50%] mt-2 bg-gray-800 p-2 shadow-lg rounded-lg">
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center p-3 hover:bg-red-600 hover:text-white rounded-full cursor-pointer transition duration-200 ease-in-out w-24 h-12"
                >
                  <span>logout</span>  
                    <FiLogOut size={20} />
                </button>
              </div>
            )}
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
