import React, { useState, useEffect } from "react";
import { FiHome, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

function Navbar_admin() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

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
    <div className="flex flex-col h-screen justify-between bg-white">
      <div className="w-64 text-black pt-12 flex flex-col">
        <div className="text-2xl font-bold mb-12 flex items-center gap-2 justify-center">
          <h1>Admin Panel</h1>
        </div>

        <nav className="flex-1 px-4 font-semibold text-[#9197B3]">
          <ul>
            <li className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer my-2 ${
              location.pathname === "/admin/dashboard" ? "bg-[#5932EA] text-white" : "hover:bg-[#5932EA] hover:text-white"
            }`}>
              <Link to="/admin/dashboard" className="flex items-center gap-3 w-full">
                <FiHome /> Dashboard
              </Link>
            </li>
            <li className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer my-2 ${
              location.pathname === "/admin/useradmin" ? "bg-[#5932EA] text-white" : "hover:bg-[#5932EA] hover:text-white"
            }`}>
              <Link to="/admin/useradmin" className="flex items-center gap-3">
                <FiUsers /> Users
              </Link>
            </li>
            <li className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer my-2 ${
              location.pathname === "/admin/settings" ? "bg-[#5932EA] text-white" : "hover:bg-[#5932EA] hover:text-white"
            }`}>
              <Link to="/admin/settings" className="flex items-center gap-3">
                <FiSettings /> Settings
              </Link>
            </li>
            <li className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer my-2 ${
              location.pathname === "/admin/help" ? "bg-[#5932EA] text-white" : "hover:bg-[#5932EA] hover:text-white"
            }`}>
              <Link to="/admin/help" className="flex items-center gap-3">
                <MdOutlineLiveHelp /> Help
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center gap-2 mb-24">
        <div className="relative">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white shadow-lg object-cover cursor-pointer"
            onClick={toggleMenu}
          />
          {isMenuVisible && (
            <div className="absolute left-1 mt-2 font-semibold text-[#9197B3] bg-[#F9FBFF] p-2 shadow-lg rounded-lg">
              <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center p-3 hover:bg-[#5932EA] hover:text-white rounded-2xl cursor-pointer transition duration-200 ease-in-out w-24 h-12"
              >
                <span>Home</span>
                <FiHome size={20} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center p-3 hover:bg-[#5932EA] hover:text-white rounded-2xl cursor-pointer transition duration-200 ease-in-out w-24 h-12 mt-2"
              >
                <span>Logout</span>
                <FiLogOut size={20} />
              </button>
            </div>
          )}
        </div>
        <div>
          <h5 className="font-bold">Admin</h5>
          <p className="text-[#9197B3]">Project Manager</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar_admin;
