import express from "express";
import cors from "cors";
import users from "./users.js";
import products from "./products.js";
import pets from "./pets.js";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from backend!" });
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/pets", (req, res) => {
    res.json(pets);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});