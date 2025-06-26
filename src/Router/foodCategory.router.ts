import express from "express"
import { createdFoodCategory } from "../controller/foodCategory/createFoodCategory.controller";
import { deletedFoodCategory } from "../controller/foodCategory/deletedFoodCategory.controller";
// import { getFoodCategory } from "../controller/foodCategory/getFoodCategory.controller";

const foodCategoryRouter = express.Router()

foodCategoryRouter.post("/", createdFoodCategory)

// foodCategoryRouter.get("/", getFoodCategory)

foodCategoryRouter.delete("/:categoryId", deletedFoodCategory)

export default foodCategoryRouter;