import React from "react"
import img from "../services/services.jpg"
import Back from "../../components/back"
import { Featured } from "../home/featured/featured"

const Service = () => {
    return (
        <section className='services' style={{ width: "100vw", overflowX: "hidden" }}>
            <Back name='Services' title='Services - All Services' cover={img} />
            <div className='featured' style={{ width: "100%" }}>
                <Featured />
            </div>
        </section>
    )
}

export default Service
