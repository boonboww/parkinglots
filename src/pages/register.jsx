// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Dùng useNavigate để điều hướng
import "react-datepicker/dist/react-datepicker.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate(); // Hook để điều hướng trang

  const register = async (event) => {
    event.preventDefault(); // Ngăn trang reload khi submit form
    try {
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      alert("Đăng ký thành công! Chuyển sang trang đăng nhập...");
      navigate("/login"); // Chuyển sang trang đăng nhập
    } catch (error) {
      alert("Lỗi đăng ký: " + error.message);
    }
  };

  return (
    <div className="bg-white-300 flex items-center justify-center h-screen px-5 font-medium">
      <div className="flex gap-5 bg-white w-full max-w-[500px] p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <form className="w-full" id="mainForm" onSubmit={register}>
          <h2 className="text-center mb-5 text-2xl font-bold">Register</h2>

          {/* Email Input */}
          <div className="relative mb-4">
            <label className="block mb-[5px] font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(event) => setRegisterEmail(event.target.value)}
              autoComplete="off"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-6">
            <label className="block mb-[5px] font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="off"
              onChange={(event) => setRegisterPassword(event.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full border-none p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg cursor-pointer text-base transition-all duration-300 ease-in-out"
            type="submit"
          >
            Submit
          </button>

          {/* Link to login page */}
          <div className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-center text-sm hover:underline font-bold">
              Continue
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
