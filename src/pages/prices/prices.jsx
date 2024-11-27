// eslint-disable-next-line no-unused-vars
import React from "react"
import img from "../services/services.jpg"
import Back from "../../components/back"
import PriceCard from "../home/price/pricecart"


const Price123 = () => {
    return (
        <>
            <section className='pricing mb'>
                <Back name='24/7 secure parking.' title='No Extra Fees. Friendly Support' cover={img} />
                <div className='price container'>
                    <PriceCard />
                </div>
            </section>
        </>
    )
}

export default Price123
