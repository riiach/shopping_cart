import React from 'react'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Link } from 'react-router-dom'

export const NavbarHome = () => {
    return (
        <nav className="bg-white fixed w-full top-0 left-0 z-20 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-5 pt-6">
                <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
                    Everything Shop
                </h2>
                <Link to="/cart">
                    <ShoppingCartRoundedIcon className="text-indigo-700 hover:text-neutral-900" fontSize="large"/>
                </Link>
            </div>
        </nav>
    )
}
