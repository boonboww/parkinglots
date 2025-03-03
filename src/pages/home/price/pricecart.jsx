// eslint-disable-next-line no-unused-vars
import React from 'react'
import { price } from "./data_price"

const PriceCard = () => {
    return (
        <div className='flex flex-row items-center justify-center gap-8 min-h-screen  p-8'>
            {price.map((item, index) => (
                <div className='box shadow-lg bg-white w-[27%] p-8 rounded-xl border border-gray-200' key={index}>
                    {/* Hiển thị nút "Best" chỉ khi có giá trị */}
                    {item.best && (
                        <div className='topbtn text-center mb-5'>
                            <button className='text-[20px] font-semibold text-white bg-orange-500 px-4 py-2 rounded-lg'>
                                {item.best}
                            </button>
                        </div>
                    )}

                    {/* Tên gói & Giá */}
                    <h3 className='text-center text-[22px] font-semibold text-gray-700'>{item.plan}</h3>
                    <h1 className='text-center text-[60px] font-bold text-gray-900'>
                        <span className='text-2xl font-medium'>$</span>{item.price}
                    </h1>
                    <p className='text-center text-gray-500'>{item.ptext}</p>

                    {/* Danh sách tính năng */}
                    <ul className='mt-[40px] space-y-4'>
                        {item.list.map((val, index) => {
                            const { text, change } = val;
                            return (
                                <li className="flex items-center space-x-4" key={index}>
                                    {/* Biểu tượng check hoặc x */}
                                    <div className={`w-[30px] h-[30px] flex items-center justify-center rounded-full 
                                        ${change === "color" ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500"}
                                    `}>
                                        {change === "color" ? "✗" : "✓"}
                                    </div>
                                    <p className="text-gray-700">{text}</p>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Nút Start */}
                    <button
                        className='mt-6 w-full py-3 text-lg font-semibold rounded-lg transition-all 
                        bg-green-500 text-white hover:bg-green-600'
                    >
                        Start {item.plan}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default PriceCard;
