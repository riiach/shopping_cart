const express = require("express")
const router = express.Router()
const stripe = require("stripe")(process.env.STRIPE_SECRET)

router.post("/create-checkout-session", async (req, res) => {
    const { products } = req.body;

    try {
        const lineItems = products.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [item.image],
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));

        const isLocal = req.headers.host.includes("localhost");

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: isLocal
                ? "http://localhost:5173/success" : `${process.env.FRONTEND_URL}/success`,
            cancel_url: isLocal
                ? "http://localhost:5173/cancel" : `${process.env.FRONTEND_URL}/cancel`,
        });

        console.log("SESSION OBJECT:", session);
        console.log("SESSION URL:", session.url);

        res.json({ url: session.url });

    } catch (error) {
        console.error("Stripe error:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;