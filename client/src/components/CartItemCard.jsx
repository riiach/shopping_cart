import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { removeItem, updateQuantity } from "../features/cartSlice.jsx"
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

const CartItemCard = () => {
    const items = useSelector((state) => state.cart.items ?? []);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(updateQuantity({
            name: item.name,
            quantity: item.quantity + 1,
        }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({
                name: item.name,
                quantity: item.quantity - 1,
            }));
        } else {
            dispatch(removeItem(item.name));
        }
    };

    const handleQuantityChange = (item, input) => {
        const newQuantity = parseInt(input, 10);a
        if (!isNaN(newQuantity) && newQuantity > 0) {
            dispatch(updateQuantity({
                name: item.name,
                quantity: newQuantity,
            }));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    const calculateTotalPrice = (item) => {
        const unitPrice = parseFloat(item.price);
        return (unitPrice * item.quantity).toFixed(2);
    };

    return (
        <div className="flex flex-col w-full lg:w-full h-auto">
            {items.map((item) => (
                <div
                    key={item.name}
                    className="flex flex-col sm:flex-row w-full gap-4 sm:gap-6 items-start sm:items-center border-b border-neutral-200 pb-4 mt-3"
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-2xl w-full h-46 sm:w-2/5 object-cover"
                    />

                    <div className="flex flex-col justify-between w-full sm:w-3/5 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-start text-neutral-900">{item.name}</h3>
                            <p className="text-sm text-gray-600 text-start">{item.description}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
                            {/* ➕➖ Quantity & Remove */}
                            <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-2/3">
                                <div className="flex items-center rounded-md shadow-sm hover:shadow-lg">
                                    <button
                                        className="p-1 rounded-lg w-8 h-8 flex items-center justify-center hover:text-indigo-700 border-none"
                                        onClick={() => handleDecrement(item)}
                                    >
                                        <RemoveRoundedIcon fontSize="small" />
                                    </button>

                                    <input
                                        type="text"
                                        name="quantity"
                                        value={item.quantity}
                                        className="w-12 text-center rounded-md h-8 border-none"
                                        onChange={(e) => handleQuantityChange(item, e.target.value)}
                                    />

                                    <button
                                        className="p-1 rounded-lg w-8 h-8 flex items-center justify-center hover:text-indigo-700 border-none"
                                        onClick={() => handleIncrement(item)}
                                    >
                                        <AddRoundedIcon fontSize="small" />
                                    </button>
                                </div>

                                <button
                                    className="text-sm text-gray-600 hover:underline bg-transparent"
                                    onClick={() => handleRemove(item)}
                                >
                                    Remove
                                </button>
                            </div>

                            {/* Price */}
                            <p className="text-lg font-medium text-end w-full sm:w-1/3">
                                ${calculateTotalPrice(item)}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CartItemCard
