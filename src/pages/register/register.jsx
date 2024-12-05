// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router';
import { handleSubmit } from './connect';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Register = () => {
    const [birthday, setBirthday] = useState(null);

    return (
        <div className="bg-white-300 flex items-center justify-center h-screen px-5 font-medium">
            <div className="flex gap-5 bg-white w-full max-w-[500px] p-6 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <form className="w-full" id="mainForm" noValidate onSubmit={handleSubmit}>
                    <h2 className="text-center mb-5 text-2xl font-bold">Personal Information</h2>

                    {/* UserName Input */}
                    <div className="relative mb-4">
                        <label className="block mb-[5px] font-medium" htmlFor="name">
                            UserName
                        </label>
                        <input
                            className="w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none"
                            type="text"
                            id="name"
                            name="username"
                            placeholder="Enter your name"
                            autoComplete="off"
                            required
                        />
                    </div>

                    {/* Full Name Input */}
                    <div className="relative mb-4">
                        <label className="block mb-[5px] font-medium" htmlFor="fullname">
                            Full Name
                        </label>
                        <input
                            className="w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none"
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Enter your full name"
                            autoComplete="off"
                            required
                        />
                    </div>

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
                            autoComplete="off"
                            required
                        />
                    </div>

                    {/* Birthday Input  */}
                    <div className="relative mb-4">
                        <label className="block mb-[5px] font-medium" htmlFor="birthday">
                            Birthday
                        </label>
                        <DatePicker
                            className="w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none"
                            selected={birthday}
                            onChange={(date) => setBirthday(date)}
                            dateFormat="MM/dd/yyyy"
                            placeholderText="MM/dd/yyyy"
                            required
                        />
                    </div>
                    {/* Birthday Input
                    <div className="relative mb-4">
                        <label
                            className="block mb-[5px] font-medium"
                            htmlFor="birthday"
                        >
                            Birthday
                        </label>
                        <input
                            className="w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none"
                            type="text"
                            id="dob"
                            name="dob"
                            required
                        />
                    </div> */}

                    {/* Phone Input */}
                    <div className="relative mb-4">
                        <label className="block mb-[5px] font-medium" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            className="w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none"
                            type="tel"
                            id="phone_number"
                            name="phone_number"
                            placeholder="Enter your phone"
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
                            required
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="relative mb-6">
                        <label className="block mb-[5px] font-medium" htmlFor="confirmpassword">
                            Confirm Password
                        </label>
                        <input
                            className="w-full p-2 pr-10 border-2 border-[#ddd] rounded-lg outline-none"
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Confirm your password"
                            autoComplete="off"
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
                        Already have an account?{' '}
                        <Link
                            to={'/login'}
                            className="text-center text-sm hover:underline font-bold"
                        >
                            Continue
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
