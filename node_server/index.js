import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  return res.send("Hello Users!");
});

app.get("/products", (req, res) => {
  return res.json([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]);
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
