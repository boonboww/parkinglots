// eslint-disable-next-line no-unused-vars
import React from "react";
import { list } from "./data_recent";

const RecentCard = () => {
  return (
    <div className="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ">
      {list.map((val, index) => {
        const { cover, category, location, name} = val;
        return (
          <div
            className="hover:-translate-y-1 hover:shadow-lg rounded-xl cursor-pointer border-2 border-neutral-300 overflow-hidden transition-all"
            key={index}
          >
            <div className="relative">
              <img
                className="w-full h-64 object-cover rounded-t-xl"
                src={cover}
                alt={name}
              />
              <div className="absolute top-4 left-4 bg-opacity-75 bg-black text-white px-3 py-1 rounded-lg">
                {category}
              </div>
            </div>

            <div className="text p-4 flex flex-col justify-between h-full">
              <div>
                <h4 className="text-xl font-semibold">{name}</h4>
                <p className="flex items-center text-gray-600 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  {location}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;
