import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.js"
import productRoutes from "./routes/product.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use('/usuario', userRoutes);
app.use('/produtos', productRoutes);

app.listen(8080);