import React from 'react'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import {useSelector} from "react-redux";

const OrderSummary = () => {
    const items = useSelector((state) => state.cart.items ?? []);
    const calculateTotalAmount = () => {
        return items
            .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
            .toFixed(2);
    };

    { /* Change URL here */}
    const apiURL =
        window.location.hostname === "localhost"
            ? "http://localhost:5000/api/create-checkout-session" //Local Testing
            : "https://shopping-cart-v4lv.onrender.com/api/create-checkout-session";

    const makePayment = async () => {
        try {
            const response = await fetch(apiURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ products: items }),
            });

            const data = await response.json();

            console.log("SESSION:", data);

            if (!data.url) {
                console.error("No session URL returned");
                return;
            }

            window.location.href = data.url;

        } catch (error) {
            console.error("Payment error:", error);
        }
    };

    return (
        <div className="order-summary w-full lg:w-2/5 border border-neutral-200 rounded-2xl p-5 space-y-5 h-auto">
            <h2 className="text-2xl font-semibold text-start">Order Summary</h2>
            <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                    <p>Subtotal</p>
                    <p className="font-semibold">${calculateTotalAmount()}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Shipping</p>
                    <p className="font-semibold">FREE</p>
                </div>
                <button className="flex items-center gap-2 text-indigo-700 hover:underline mt-2 bg-transparent">
                    <ConfirmationNumberOutlinedIcon /> Add coupon code
                </button>
            </div>
            <div className="flex justify-between items-center pt-5 border-t border-neutral-200">
                <p className="text-2xl">Total</p>
                <p className="text-3xl sm:text-4xl font-semibold">${calculateTotalAmount()}</p>
            </div>
            <button
                className="w-full py-3 bg-indigo-700 text-white rounded-xl hover:bg-neutral-900 checkout-btn"
                onClick={makePayment}
            >
                Checkout
            </button>
        </div>
    )
}
export default OrderSummary
