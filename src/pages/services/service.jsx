// eslint-disable-next-line no-unused-vars
import React from "react"
import img from "../services/services.jpg"
import Back from "../../components/back"
import { Featured } from "../home/featured/featured"

const Service = () => {
    return (
        <>
            <section className='services mb'>
                <Back name='Services' title='Services -All Services' cover={img} />
                <div className='featured container'>
                    <Featured />
                </div>
            </section>
        </>
    )
}

export default Service
