// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from './hero/hero'
import { Featured } from './featured/featured'
import Recent from './recent/recent'
import Price from './price/price'
import Footer from '../../components/footer'

export const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Recent />
            <Price />
            <Footer />
        </>
    )
}
