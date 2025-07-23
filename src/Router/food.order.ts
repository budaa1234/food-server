import express from "express";
import { creatFoodOrder } from "../controller/food-order/creatFoodOrder.controller";
import { getFoodOrders } from "../controller/food-order/getFoodOrder.controller";
import { getFoodOrder } from "../controller/food-order/getFoodOrderById.controller";
import { getFoodOrdersByUserId } from "../controller/food-order/getFoodOrderByUserId.controller";

const foodOrderRouter = express.Router();

foodOrderRouter.post("/", creatFoodOrder);

foodOrderRouter.get("/", getFoodOrders)

foodOrderRouter.get("/:orderId", getFoodOrder)

 foodOrderRouter.get("/user/:userId", getFoodOrdersByUserId)

export default foodOrderRouter;
