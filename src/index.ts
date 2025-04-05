import connection from "../db/connecion.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
async function getProducts(req, res) {
  const query = "SELECT * FROM product WHERE store_id = 1";
  try {
    const results = await connection.query(query);
    res.json(results);
  } catch (error) {
    console.error("Erro na consulta:", error);
    res.status(500).send("Internal Server Error");
  }
}

app.get("/products", getProducts);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default getProducts;
