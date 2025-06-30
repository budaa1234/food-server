import express from "express";
import { creatFoodOrder } from "../controller/food-order/creatFoodOrder.controller";
import { getFoodOrder } from "../controller/food-order/getFoodOrder.controller";

const foodOrderRouter = express.Router();

foodOrderRouter.post("/", creatFoodOrder);

foodOrderRouter.get("/", getFoodOrder)

export default foodOrderRouter;
