// eslint-disable-next-line no-unused-vars
import React from "react"
import PriceCard from "./pricecart"

const Price = () => {
    return (
        <div className="">
            <section className='price padding'>
                <div className='container'>
                    <div className="heading text-center">
                        <h1 className="text-black text-[40px]">Select Your Package</h1>
                        <p className="text-black opacity-60">We offer a monthly parking plan that ensures seamless access, security, and convenience for all users, with 24/7 support and guaranteed availability.</p>
                    </div>
                    <PriceCard />
                </div>
            </section>
        </div>
    )
}

export default Price
