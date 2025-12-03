import React from 'react'
import ProductCard from "../components/ProductCard.jsx"
import {NavbarHome} from "../components/NavbarHome.jsx"
import product from "../data/product.js"

const Home = () => {
    return (
        <>
            <NavbarHome />
            <ProductCard items={product} />
        </>
    )
}
export default Home
