// eslint-disable-next-line no-unused-vars
import React from "react"
import RecentCard from "./recentcart"

const Recent = () => {
    return (
        <section className="recent py-16">
            <div className="container mx-auto">
                <div className="heading text-center mb-8">
                    <h1 className="text-black text-4xl">Recent Parking Lots Listed</h1>
                    <p className="text-black opacity-60 mt-4">
                        Parking lots are essential spaces that ensure smooth urban mobility, providing safe and efficient areas for vehicles to park, thus reducing congestion and enhancing traffic flow
                    </p>
                </div>
                <RecentCard />
            </div>
        </section>
    )
}

export default Recent
