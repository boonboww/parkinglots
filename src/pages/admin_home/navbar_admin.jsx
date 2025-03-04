import React, { useState, useEffect } from "react";
import { FiHome, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLiveHelp } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

function Navbar_admin() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Trạng thái điều khiển menu logout

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
      <div className="w-64  text-black pt-12 flex flex-col ">
        <div className="text-2xl font-bold mb-12 flex items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <path
              d="M18.5003 34.8876C17.4674 34.8876 16.419 34.6564 15.602 34.1784L7.12284 29.2914C3.66951 26.9634 3.45367 26.6089 3.45367 22.9551V14.0443C3.45367 10.3905 3.65409 10.0359 7.04576 7.73887L15.5865 2.80553C17.2053 1.86512 19.749 1.86512 21.3678 2.80553L29.8778 7.70803C33.3311 10.0359 33.547 10.3905 33.547 14.0443V22.9397C33.547 26.5934 33.3465 26.948 29.9549 29.2451L21.414 34.1784C20.5815 34.6564 19.5332 34.8876 18.5003 34.8876ZM18.5003 4.42428C17.8528 4.42428 17.2207 4.54762 16.7736 4.8097L8.29451 9.7122C5.78159 11.408 5.78159 11.408 5.78159 14.0443V22.9397C5.78159 25.5759 5.78159 25.5759 8.35617 27.318L16.7736 32.1743C17.6832 32.6984 19.3328 32.6984 20.2424 32.1743L28.7215 27.2718C31.219 25.5759 31.219 25.5759 31.219 22.9397V14.0443C31.219 11.408 31.219 11.408 28.6445 9.66595L20.227 4.8097C19.7799 4.54762 19.1478 4.42428 18.5003 4.42428Z"
              fill="black"
            />
            <path
              d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z"
              fill="black"
            />
          </svg>
          <h1 className="">Admin Panel</h1>
        </div>

        <nav className="flex-1 px-4 font-semibold text-[#9197B3]">
          <ul>
            <li className="flex items-center gap-4 p-4 hover:bg-[#5932EA] hover:text-white  rounded-2xl cursor-pointer">
              <Link to="/admin/dashboard" className="flex items-center gap-3">
                <FiHome /> Dashboard
              </Link>
            </li>
            <li className="flex items-center gap-4 p-4 hover:bg-[#5932EA] hover:text-white rounded-2xl cursor-pointer">
              <Link to="/admin/useradmin" className="flex items-center gap-3">
                <FiUsers /> Users
              </Link>
            </li>
            <li className="flex items-center gap-4 p-4 hover:bg-[#5932EA] hover:text-white rounded-2xl cursor-pointer">
              <Link to="/admin/settings" className="flex items-center gap-3">
                <FiSettings /> Settings
              </Link>
            </li>
            <li className="flex items-center gap-4 p-4 hover:bg-[#5932EA] hover:text-white  rounded-2xl cursor-pointer">
              <Link to="/admin/help" className="flex items-center gap-3">
                <MdOutlineLiveHelp /> help
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
            <div className="absolute left-1  mt-2 font-semibold text-[#9197B3] bg-[#F9FBFF] p-2 shadow-lg rounded-lg">
              <button
                onClick={handleLogout}
                className="flex items-center justify-center p-3 hover:bg-[#5932EA] hover:text-white rounded-2xl cursor-pointer transition duration-200 ease-in-out w-24 h-12"
              >
                <span>logout</span>
                <FiLogOut size={20} />
              </button>
            </div>
          )}
        </div>

        <div>
          <h5 className="font-bold">Admin</h5>
          <p className="text-[#9197B3]">project manager</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar_admin;
