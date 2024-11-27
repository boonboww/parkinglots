// eslint-disable-next-line no-unused-vars
import React from "react"
import { list } from "./data_recent"

const RecentCard = () => {
    return (
        <div className="content grid grid-cols-3 gap-4 mt-8">
            {list.map((val, index) => {
                const { cover, category, location, name, price } = val
                return (
                    <div className="box shadow" key={index}>
                        <div className="img">
                            <img className="w-full h-64 object-cover" src={cover} alt="" />
                        </div>
                        <div className="text pl-4">
                            <div className="category flex">
                                <span
                                    style={{
                                        background: category === "Empty" ? "#25b5791a" : "#ff98001a",
                                        color: category === "Empty" ? "#25b579" : "#ff9800"
                                    }}
                                >
                                    {category}
                                </span>
                            </div>
                            <h4>{name}</h4>
                            <p className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                {location}
                            </p>
                        </div>
                        <div className="button flex pl-4"> {/* Thêm padding-left cho button */}
                            <div>
                                <button className=" hover:bg-gray-200">
                                    {price}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RecentCard
