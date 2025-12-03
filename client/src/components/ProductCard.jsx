import React from 'react'
import { addItem } from '../features/cartSlice.jsx';
import { useDispatch } from 'react-redux';
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const itemCard = ({ items }) => {
    const [addedToCart, setAddedToCart] = React.useState({});
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart(prev => ({
            ...prev,
            [product.name]: true
        }));
        alert("Added to cart ✨");
    };

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-36 mb-24">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col bg-white w-full p-6 border border-neutral-300 rounded-2xl shadow-sm"
                >
                    <img
                        className="rounded object-cover w-full h-80"
                        src={item.image}
                        alt={item.name}
                    />
                    <div className="text-left mb-5">
                        <h3 className="mt-4 mb-2 text-2xl font-semibold">{item.name}</h3>
                        <p className="mt-2 text-sm text-gray-600">{item.description}</p><br/>
                        <p className="text-lg font-medium">${item.price}</p>
                    </div>
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="add-to-cart-btn mt-auto inline-flex items-center justify-center gap-2 text-neutral-900 px-4 py-2 rounded-md transition shadow-sm hover:shadow-lg"
                    >
                        Add to cart <AddRoundedIcon fontSize="small" className="add-icon" />
                    </button>
                </div>
            ))}
            {/* 🔥 Animation for AddRoundedIcon */}
            <style>
                {`
            .add-to-cart-btn .add-icon {
                transition: transform 0.4s ease;
            }

            .add-to-cart-btn:hover .add-icon {
                transform: rotate(90deg);
                color: #4338CA;
            }
        `}
            </style>
        </div>
    )
}
export default itemCard
