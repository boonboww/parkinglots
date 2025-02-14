// eslint-disable-next-line no-unused-vars
import React from "react"
import PriceCard from "./pricecart"

const Price = () => {
    return (
        <section className="price padding w-full">
            <div className="w-full max-w-[1200px] mx-auto text-center">
                <div className="heading">
                    <h1 className="text-black text-[40px]">Select Your Package</h1>
                    <p className="text-black opacity-60">
                        We offer a monthly parking plan that ensures seamless access, security, and convenience for all users, 
                        with 24/7 support and guaranteed availability.
                    </p>
                </div>
                <PriceCard />
            </div>
        </section>
    )
}

export default Price
