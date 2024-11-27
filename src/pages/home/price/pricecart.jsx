// eslint-disable-next-line no-unused-vars
import React from 'react'
import { price } from "./data_price"

const PriceCard = () => {
    return (
        <>
            <div className='flex flex-row items-center justify-center gap-4 h-screen'>
                {price.map((item, index) => (
                    <div className='box shadow w-[27%] p-8 rounded-lg ' key={index}>
                        <div className='topbtn text-center mb-5'>
                            <button className='btn3 mb-5 text-[30px] text-[#ff4500]'>{item.best}</button>
                        </div>
                        <h3 className='text-center text-[22px]'>{item.plan}</h3>
                        <h1 className='text-center text-[60px]'>
                            <span className='text-2xl font-medium'>$</span>
                            {item.price}
                        </h1>
                        <p className='text-center'>{item.ptext}</p>

                        <ul className='mt-[40px]'>
                            {item.list.map((val, index) => {
                                const { text, change } = val;
                                return (
                                    <li className="flex mb-5" key={index}> {/* Adding key here */}
                                        <label className='w-[30px] h-[30px] leading-[30px] rounded-full mr-5'
                                            style={{
                                                background: change === "color" ? "#dc35451f" : "#27ae601f",
                                                color: change === "color" ? "#dc3848" : "#27ae60",
                                            }}
                                        >
                                        </label>
                                        <p>{text}</p>
                                    </li>
                                );
                            })}
                        </ul>

                        <button
                            className='btn5 mb-5 w-full'
                            style={{
                                background: "#fff",
                                color: "#27ae60",
                            }}
                        >
                            Start {item.plan}
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PriceCard

