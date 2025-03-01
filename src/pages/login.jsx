import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { getUserRole } from "../authService/"; // Import hàm lấy role
import Swal from 'sweetalert2';
import GoogleButton from "react-google-button";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  // Đăng nhập bằng Google
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("profilePic", result.user.photoURL);

      const userRole = await getUserRole();
      Swal.fire({ title: "Login successful!", icon: "success" });

      // Check the role and navigate accordingly
      userRole === "admin" ? navigate("/admin") : navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: error.message
      });
    }
  };

  // Đăng nhập bằng Email & Password
  const login = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const userRole = await getUserRole();

      localStorage.setItem("isAuth", "true");
      Swal.fire({ title: "Login successful!", icon: "success" });

      // Check the role and navigate accordingly
      userRole === "admin" ? navigate("/admin") : navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message
      });
    }
  };

  return (
    <div className="bg-white-300 flex items-center justify-center h-screen px-5 cursor-default">
      <div className="flex relative gap-5 bg-white w-full h-[70%] max-w-[500px] p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <form className="w-full formLogin" onSubmit={login}>
          <h2 className="text-center mb-5 font-bold text-2xl">Login</h2>

          {/* Email Input */}
          <div className="relative mb-4 font-medium">
            <label className="block mb-[5px]" htmlFor="email_address">
              Email address
            </label>
            <input
              className="w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none"
              type="email"
              id="email_address"
              placeholder="Enter your email address"
              onChange={(event) => setLoginEmail(event.target.value)}
              autoComplete="off"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-6 font-medium">
            <label className="block mb-[5px]" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none"
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(event) => setLoginPassword(event.target.value)}
              autoComplete="off"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full border-none p-2 font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg cursor-pointer text-base transition-all duration-300 ease-in-out"
            type="submit"
          >
            Submit
          </button>

          <p className="text-center text-sm mt-4">
            Do not have an account?{" "}
            <a href="/register" className="hover:underline font-bold">
              Sign up
            </a>
          </p>

          <p className="flex justify-center items-center my-4">
            --Or continue with--
          </p>
          <div className="absolute left-[50%] translate-x-[-50%]">
            <GoogleButton onClick={signInWithGoogle} />
          </div>
        </form>
      </div>
    </div>
  );
};
