// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router'

export const Register = () => {
    return (
        <div className='bg-white-300 flex items-center justify-center h-screen px-5 font-medium'>
            <div className="flex gap-5 bg-white w-full max-w-[500px] p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

                <form className='w-full' id="mainForm" noValidate>
                    <h2 className='text-center mb-5 text-2xl'>Personal Information</h2>
                    <div className="relative mb-4">
                        <label className='block mb-[5px]' htmlFor="name">Name</label>
                        <input className='w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none' type="text" id="name" placeholder="Enter your name" autoComplete="off" />
                        <i className="icon"></i>
                    </div>

                    <div className="relative mb-4">
                        <label className='block mb-[5px]' htmlFor="phone">Phone</label>
                        <input className='w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none' type="tel" id="phone" placeholder="Enter your phone" autoComplete="off" />
                        <i className="icon"></i>
                    </div>

                    <div className="relative mb-6">
                        <label className='block mb-[5px]' htmlFor="password">Password</label>
                        <input className='w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none' type="password" id="password" placeholder="Enter your password" autoComplete="off" />
                        <i className="icon"></i>
                    </div>

                    <div className="relative mb-6">
                        <label className='block mb-[5px]' htmlFor="password">Confirm Password</label>
                        <input className='w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none' type="password" id="password" placeholder="Enter your password" autoComplete="off" />
                        <i className="icon"></i>
                    </div>

                    <button className='w-full border-none p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg cursor-pointer text-base transition-all duration-300 ease-in-out'
                        type="submit">Submit</button>

                    <div className="text-sm text-center mt-4">
                        Already have an account? {'   '}
                        <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
