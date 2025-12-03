import React from 'react'
import { NavbarCart } from '../components/NavbarCart.jsx'
import CartItemCard from '../components/CartItemCard.jsx'
import OrderSummaryCard from '../components/OrderSummary.jsx'
import { useDispatch, useSelector } from "react-redux";
import EmptyCartCard from '../pages/EmptyCart.jsx'
import { clearItems } from "../features/cartSlice.jsx"
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const Cart = () => {
    const products = useSelector((state) => state.cart.items ?? []);
    const dispatch = useDispatch();

    const handleEmptyCart = () => {
        dispatch(clearItems());
    };

    if (!products || products.length === 0) {
        return <EmptyCartCard />;
    }

    return (
        <>
            <NavbarCart />

            {/* 📦Icons  */}
            <div className="max-w-7xl mx-auto px-5 sm:px-10 mt-24 sm:mt-28">
                <div className="flex gap-6 items-center">
                    <ShoppingCartRoundedIcon className="text-indigo-700" sx={{ fontSize: 50 }} />
                    <MoreHorizRoundedIcon className="text-indigo-700" sx={{ fontSize: 50 }} />
                    <Face6RoundedIcon className="text-indigo-700" sx={{ fontSize: 50 }} />
                </div>
            </div>

            {/* Main layout */}
            <div className="content max-w-7xl mx-auto px-5 sm:px-10 mb-24 gap-8 lg:gap-8 ">
                <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-8 items-start">
                    {/* LEFT column */}
                    <div className="flex flex-col w-full lg:w-3/5">
                        <CartItemCard />   {/* DO NOT pass items */}

                        {/* Empty Cart button  */}
                        <div className="flex flex-row w-full justify-end">
                            <button
                                className="empty-cart-btn mt-4 px-4 py-2 text-indigo-700 rounded-lg transition-colors w-full sm:w-auto hover:underline"
                                onClick={handleEmptyCart}
                            >
                                Empty Cart
                            </button>
                        </div>
                    </div>

                    {/* RIGHT column */}
                    <OrderSummaryCard />
                </div>
            </div>
        </>
    );
};

export default Cart;
