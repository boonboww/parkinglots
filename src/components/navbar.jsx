// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <div className="w-full text-white flex items-center bg-gray-900 h-[10vh] shadow-[0_5px_30px_rgba(0,22,84,0.1)] py-4 sticky top-0 z-[99999]">

            <div className="flex-1"></div>


            <div className="flex justify-center">
                <Link to="/" className="no-underline  mx-3">HOME</Link>
                <Link to="/services" className="no-underline  mx-3">SERVICES</Link>
                <Link to="/price" className='no-underline  mx-3'>PICING</Link>
                <Link to="/contact" className="no-underline  mx-3">CONTACT</Link>

            </div>


            <div className="flex-1 flex justify-end">
                <Link to="/login" className="no-underline  mx-3">LOGIN</Link>
                <Link to="/register" className="no-underline  mx-3">REGISTER</Link>
            </div>
        </div>
    );
};

