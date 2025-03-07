import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { FiLogOut, FiShoppingCart, FiSettings } from "react-icons/fi"; // Thêm icon settings
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Import Firestore

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [role, setRole] = useState(null); // State lưu role của user

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        // Nếu có user, lấy role từ Firestore
        const db = getFirestore();
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setRole(userDoc.data().role); // Lấy role từ Firestore (ví dụ: "admin" hoặc "user")
        }
      } else {
        setRole(null); // Reset role nếu đăng xuất
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsMenuVisible(false);
      setRole(null); // Reset role khi đăng xuất
    } catch (error) {
      console.error("Lỗi đăng xuất:", error);
    }
  };

  return (
    <div className="w-full text-white flex items-center bg-gray-900 h-[10vh] shadow-lg py-4 sticky top-0 z-50">
      <div className="flex-1">
        <h2 className="ml-8 bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl font-bold">
          Parking Lots
        </h2>
      </div>
      <div className="flex justify-center flex-1 space-x-8">
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
            <div className="flex items-center gap-6">
              <Link
                to="/pay"
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                <FiShoppingCart size={28} />
              </Link>
              <img
                src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg cursor-pointer"
                onClick={() => setIsMenuVisible(!isMenuVisible)}
              />
            </div>
            {isMenuVisible && (
              <div className="absolute right-0 mt-3 bg-gray-800 p-3 shadow-lg rounded-lg w-40">
                {role === "admin" && (
                  <Link
                    to="/admin"
                    className="flex items-center w-full p-2 text-white hover:bg-blue-600 rounded-lg"
                  >
                    <FiSettings size={20} className="mr-2" /> Admin Panel
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center w-full p-2 text-white hover:bg-red-600 rounded-lg"
                >
                  <FiLogOut size={20} className="mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
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
