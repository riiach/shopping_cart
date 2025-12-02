import React from 'react'
import { NavbarCart } from '../components/NavbarCart.jsx'
import CartItemCard from '../components/CartItemCard.jsx'
import OrderSummaryCard from '../components/OrderSummary.jsx'
import { useSelector } from "react-redux";
import EmptyCartCard from '../pages/EmptyCart.jsx'
import { clearItems } from "../features/cartSlice.jsx"

const Cart = () => {
    const products = useSelector((state) => state.cart.items ?? []);

    if (!products || products.length === 0) {
        return <EmptyCartCard />;
    }

    return (
        <>
            <NavbarCart />
            <div className="content flex flex-col lg:flex-row w-full gap-8 lg:gap-10 items-start px-5 sm:px-10 mt-44 mb-24">
                <CartItemCard items={products}/>
                <OrderSummaryCard />
            </div>
        </>
    )
}
export default Cart
