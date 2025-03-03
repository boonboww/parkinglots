import React from "react"
import img from "../services/services.jpg"
import Back from "../../components/back"
import { Featured } from "../home/featured/featured"

const Service = () => {
    return (
        <section className="w-screen overflow-hidden">
            <Back name="Services" title="Services - All Services" cover={img || "default-image.jpg"} />

            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <Featured />
            </div>
        </section>
    )
}

export default Service
