const express = require('express');
const app = express();
const product_router = require("./routes/products");

const PORT = process.env.port || 5000;

app.get("/", (req, res) => {
    res.send("It's Working");
});

app.use("/api/products", product_router);
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} is working`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();