require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors({
    origin: [
        "http://localhost:5173", // URL for local host
        `${process.env.FRONTEND_URL}`,
    ],
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));


app.use(express.json());


app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});


const paymentRoute = require("./routes/payment.js");


app.use("/api", paymentRoute);


app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
