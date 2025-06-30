import express from "express";
import { createdFood } from "../controller/food/creatFood.controller";
import { getFood } from "../controller/food/getFood.controller";
import { deletedFood } from "../controller/food/deletedFood.controller";
import { updateFood } from "../controller/food/updateFood.controller";
import { getFoods } from "../controller/food/getFoods.controller";

const foodRouter = express.Router();

foodRouter.post("/", createdFood);

foodRouter.get("/:foodId", getFood);

foodRouter.get("/", getFoods);

foodRouter.delete("/:foodId", deletedFood);

foodRouter.put("/:foodId", updateFood);

export default foodRouter;
