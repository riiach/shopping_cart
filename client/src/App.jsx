import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import EmptyCart from './pages/EmptyCart.jsx'
import Success from './pages/Success.jsx'
import Cancel from './pages/Cancel.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/emptycart" element={<EmptyCart />} />
                <Route path="/success" element={<Success />} />
                <Route path="/cancel" element={<Cancel />} />
            </Routes>
        </Router>
    )
}

export default App
