import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Swal from "sweetalert2";

export const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      const user = userCredential.user;

      // Gửi email xác nhận
      await sendEmailVerification(user);

      Swal.fire({
        title: "Đăng ký thành công!",
        text: "Vui lòng kiểm tra email để xác minh tài khoản trước khi đăng nhập.",
        icon: "success",
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({ icon: "error", title: "Oops...", text: error.message });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Register</h2>
        <form onSubmit={register} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Nhập email của bạn"
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Nhập mật khẩu"
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Đăng ký
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Đã có tài khoản? <Link to="/login" className="text-blue-600 hover:underline">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
};
