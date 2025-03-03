import React from "react";

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center h-[90vh] w-full flex items-center justify-center text-center bg-[url('../../../../src/assets/banner.jpg')]">
            <div className="relative z-10 w-full max-w-[1200px] px-6">
                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-white text-5xl font-bold leading-tight drop-shadow-lg">
                        Search Your Next Parking Spot
                    </h1>
                    <p className="text-white text-lg opacity-80 mt-2">
                        Find the most convenient and closest parking lot to you.
                    </p>
                </div>
                
                {/* Search Form */}
                <form className="bg-white bg-opacity-90 rounded-lg shadow-md flex flex-wrap md:flex-nowrap items-center p-4">
                    <div className="flex-1 px-4 py-2">
                        <label className="text-gray-600 text-sm font-medium">City/Street</label>
                        <input
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Enter location"
                        />
                    </div>
                    <div className="flex-1 px-4 py-2">
                        <label className="text-gray-600 text-sm font-medium">Price Range</label>
                        <input
                            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Enter price range"
                        />
                    </div>
                    <div className="px-4 py-2 hidden md:block">
                        <button className="text-blue-600 font-medium hover:underline">Advanced Filter</button>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg flex items-center justify-center transition duration-300 mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;