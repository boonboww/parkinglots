// eslint-disable-next-line no-unused-vars
import React from 'react'

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
            <i class="absolute top-[50%] right-4 translate-y-[50%] cursor-pointer fa-regular fa-eye"></i>
          </div>
          <div className='relative mb-6 font-medium flex gap-2 '>
            <input className='w-4 ml-1' type='checkbox'/>
            <label>ghi nhớ đăng nhập</label>
          </div>

          <button className='w-full border-none p-2 font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg cursor-pointer text-base transition-all duration-300 ease-in-out'
            type="submit">Submit</button>
        </form>

      </div>
    </div>
  )
}
