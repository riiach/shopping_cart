import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarCart = () => {
    return (
        <nav className="bg-white fixed w-full top-0 left-0 z-20 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-5 pt-6">
                <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
                    Everything Shop
                </h2>
                <Link to="/" className="text-indigo-700 hover:underline">Back to Shopping</Link>
            </div>
        </nav>
    )
}
