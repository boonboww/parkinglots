import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore"; // Để lấy dữ liệu người dùng từ Firestore
import Swal from "sweetalert2";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  // Hàm lấy role của user từ Firestore
  const getUserRole = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      return userDoc.exists() ? userDoc.data().role : "user"; // Mặc định "user"
    } catch (error) {
      console.error("Error fetching user role:", error);
      return "user";
    }
  };

  // Đăng nhập bằng Email/Password
  const login = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const user = userCredential.user;

      // Kiểm tra xác minh email
      if (!user.emailVerified) {
        Swal.fire({
          icon: "warning",
          title: "Email not verified",
          text: "Please check your email and verify your account before logging in.",
        });
        return;
      }

      // Kiểm tra thông tin người dùng trong Firestore
      const userRole = await getUserRole(user.uid);
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("userRole", userRole);

      Swal.fire({ title: "Login successful!", icon: "success" });

      // Điều hướng theo role
      userRole === "admin" ? navigate("/admin") : navigate("/");
    } catch (error) {
      Swal.fire({ icon: "error", title: "Login Failed", text: error.message });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={login} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="email_address">
              Email Address
            </label>
            <input
              type="email"
              id="email_address"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};
