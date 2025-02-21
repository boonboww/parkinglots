import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import Swal from 'sweetalert2'


export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const profilePic = result.user.photoURL;
        localStorage.setItem("isAuth", "true"); // Lưu trạng thái đăng nhập
        localStorage.setItem("profilePic", profilePic);
        navigate("/"); // Chuyển sang trang chủ
      })
      .catch((error) => {
         Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: error.message
              });
      });
  };

  const login = async (event) => {
    event.preventDefault(); // Ngăn reload trang khi submit
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      localStorage.setItem("isAuth", "true"); // Lưu trạng thái đăng nhập
      navigate("/"); // Chuyển sang trang chủ
    } catch (error) {
       Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: error.message
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

          {/* Remember Me Checkbox */}
          <div className="relative mb-6 font-medium flex gap-2">
            <input className="w-4 ml-1" type="checkbox" />
            Remember Me
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
            <Link to={"/register"} className="hover:underline font-bold">
              Sign up
            </Link>
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
