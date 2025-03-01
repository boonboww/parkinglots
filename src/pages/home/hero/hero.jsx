// eslint-disable-next-line no-unused-vars
import React from "react";

const Hero = () => {
    return (
        <section className="relative bg-no-repeat bg-center bg-cover h-[90vh] w-full pt-[30%] md:pt-0 bg-[url('../../../../src/assets/banner.jpg')]">
            <div className="relative z-10 pt-[15%] text-center w-full">
                <div className="heading mt-[130px]">
                    <h1 className="text-white text-[60px]">Search Your Next Parking Lots</h1>
                    <p className="text-white opacity-80">Find the most convenient and closest parking lot to you.</p>
                </div>

                <form className="bg-[rgba(255,255,255,0.8)] rounded-[10px] mt-[10px] flex w-full max-w-[1200px] mx-auto">
                    <div className="p-[15px] border-l border-[rgba(128,128,128,0.2)] w-full">
                        <span className="text-[14px] text-gray-500">City/Street</span>
                        <input
                            className="p-[10px] w-full border border-[rgba(128,128,128,0.2)] mt-[5px] rounded-[5px]"
                            type="text"
                            placeholder="Location"
                        />
                    </div>
                    <div className="p-[15px] border-l border-[rgba(128,128,128,0.2)] w-full">
                        <span className="text-[14px] text-gray-500">Price Range</span>
                        <input
                            className="p-[10px] w-full border border-[rgba(128,128,128,0.2)] mt-[5px] rounded-[5px]"
                            type="text"
                            placeholder="Price Range"
                        />
                    </div>
                    <div className="p-[15px] border-l border-[rgba(128,128,128,0.2)] w-full md:w-auto">
                        <h4 className="font-medium">Advance Filter</h4>
                    </div>
                    <button className="mt-[15px] p-[10px] rounded-[5px] flex items-center justify-center">
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
