// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router";

const footer = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <section className="bg-white py-10 text-black shadow-lg rounded-lg border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl">Do You Have Questions ?</h1>
              <p>We will help you to grow your career and growth.</p>
            </div>
            <button className="btn5 bg-[#F5F5F5] text-blue-600 py-3 px-6 rounded mr-[50px]">
              <Link to={"/contact"}>Contact Us Today</Link>{" "}
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h2 className="font-medium mt-4">
            Got feedback? Share your thoughts with us!
            </h2>
            <div className="mt-4 flex">
              <a href="/feedback">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
                  Feedback
                </button>
              </a>
            </div>
          </div>

          {footer.map((val, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-medium mb-6">{val.title}</h3>
              <ul className="space-y-4">
                {val.text.map((item, i) => (
                  <li key={i} className="text-gray-400">
                    {item.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Legal Info */}
      <div className="text-center py-4 bg-gray-900 text-gray-500">
        <span>© 2024 Parking Lots. Designed by Team One.</span>
      </div>
    </>
  );
};

export default Footer;
