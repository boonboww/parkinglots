// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router'

export const Login = () => {
  return (
    <div className='bg-white-300 flex items-center justify-center h-screen px-5 cursor-default'>
      <div className="flex gap-5 bg-white w-full h-[70%] max-w-[500px] p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

        <form className='w-full' id="mainForm" noValidate>
          <h2 className='text-center mb-5 font-bold text-2xl'>Login</h2>

          <div className="relative mb-4 font-medium">
            <label className='block mb-[5px]' htmlFor="phone">Phone</label>
            <input className='w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none' type="tel" id="phone" placeholder="Enter your phone" autoComplete="off" />
            <i className="icon"></i>
          </div>

          <div className="relative mb-6 font-medium">
            <label className='block mb-[5px]' htmlFor="password">Password</label>
            <input className='w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none' type="password" id="password" placeholder="Enter your password" autoComplete="off" />
            <i className="absolute top-[50%] right-4 translate-y-[50%] cursor-pointer fa-regular fa-eye"></i>
          </div>
          <div className='relative mb-6 font-medium flex gap-2 '>
            <input className='w-4 ml-1' type='checkbox' />
            <label>remember</label>
          </div>

          <button className='w-full border-none p-2 font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg cursor-pointer text-base transition-all duration-300 ease-in-out'
            type="submit">Submit</button>
          <p className="text-center text-sm mt-4">Don't have an account? <Link to={'/register'} className="hover:underline font-bold">Sign up</Link></p>
          <div className='flex flex-row text-center w-full mt-4'>
            <div className='border-b-2 mb-2.5 mr-2 w-full'></div><div className='text-sm font-bold w-fit'>OR</div><div className='border-b-2 mb-2.5 ml-2 w-full'></div>
          </div>
          <button

            className={`w-full mt-4 flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium `}>
            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_17_40)">
                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </button>
        </form>

      </div>
    </div>
  )
}
