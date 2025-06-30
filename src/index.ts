import express from "express";
import { connectDb } from "./database/database";
import foodCategoryRouter from "./Router/foodCategory.router";
import foodRouter from "./Router/food.router";
import foodOrderRouter from "./Router/food.order";
import userRouter from "./Router/user.router";

const app = express();

const port = 4200;

app.use(express.json());

app.use("/category", foodCategoryRouter);
app.use("/food", foodRouter);
app.use("/food-order", foodOrderRouter)
app.use("/user", userRouter)

app.listen(port, async () => {
  await connectDb();
  console.log(`http://localhost:${port}`);
});
