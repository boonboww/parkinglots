import React, { useEffect, useState } from "react"; // import các hook React và useState, useEffect.
import { Link } from "react-router-dom"; // import Link từ react-router-dom để điều hướng trang.
import { auth } from "../firebaseConfig"; // import đối tượng auth từ firebaseConfig.
import { signOut } from "firebase/auth"; // import function signOut để đăng xuất người dùng.
import { FiLogOut, FiShoppingCart } from "react-icons/fi"; // import các icon từ react-icons.

export const Navbar = () => {
  const [user, setUser] = useState(null); // State để lưu trữ thông tin người dùng đã đăng nhập.
  const [isMenuVisible, setIsMenuVisible] = useState(false); // State để điều khiển việc hiển thị menu dropdown.

  // useEffect hook theo dõi trạng thái đăng nhập của người dùng
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Cập nhật state user khi có sự thay đổi trạng thái đăng nhập.
    });
    return () => unsubscribe(); // cleanup để hủy đăng ký theo dõi khi component bị hủy.
  }, []);

  // Function để xử lý việc đăng xuất
  const handleLogout = async () => {
    try {
      await signOut(auth); // Gọi phương thức signOut từ Firebase để đăng xuất.
      setUser(null); // Reset state user sau khi đăng xuất.
      setIsMenuVisible(false); // Ẩn menu khi đăng xuất.
    } catch (error) {
      console.error("Lỗi đăng xuất:", error); // Hiển thị lỗi nếu đăng xuất không thành công.
    }
  };

  return (
    <div className="w-full text-white flex items-center bg-gray-900 h-[10vh] shadow-lg py-4 sticky top-0 z-50">
      <div className="flex-1">
        {/* Logo của trang web */}
        <h2 className="ml-8 bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl font-bold">
          Parking Lots
        </h2>
      </div>
      <div className="flex justify-center flex-1 space-x-8">
        {/* Các liên kết menu */}
        <Link to="/" className="hover:text-blue-700 duration-300">
          HOME
        </Link>
        <Link to="/services" className="hover:text-blue-700 duration-300">
          SERVICES
        </Link>
        <Link to="/price" className="hover:text-blue-700 duration-300">
          PRICING
        </Link>
        <Link to="/contact" className="hover:text-blue-700 duration-300">
          CONTACT
        </Link>
      </div>
      <div className="flex-1 flex justify-end items-center gap-5 pr-12 relative">
        {user ? (
          <div className="relative">
            {/* Nếu người dùng đã đăng nhập, hiển thị icon giỏ hàng và avatar người dùng */}
            <div className="flex items-center gap-6">
              <Link
                to="/pay"
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                <FiShoppingCart size={28} /> {/* Icon giỏ hàng */}
              </Link>
              <img
                src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" // Avatar mặc định từ Gravatar
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg cursor-pointer"
                onClick={() => setIsMenuVisible(!isMenuVisible)} // Click vào avatar để toggle menu dropdown.
              />
            </div>
            {/* Nếu menu dropdown được hiển thị, thêm một box menu */}
            {isMenuVisible && (
              <div className="absolute right-0 mt-3 bg-gray-800 p-3 shadow-lg rounded-lg w-32">
                <button
                  onClick={handleLogout} // Khi nhấn nút Logout, gọi handleLogout.
                  className="flex items-center justify-center w-full p-2 text-white hover:bg-red-600 rounded-lg"
                >
                  <FiLogOut size={20} className="mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // Nếu chưa đăng nhập, hiển thị các liên kết đăng nhập và đăng ký
          <>
            <Link to="/login" className="hover:text-green-400 duration-300">
              LOGIN
            </Link>
            <Link to="/register" className="hover:text-green-400 duration-300">
              REGISTER
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
