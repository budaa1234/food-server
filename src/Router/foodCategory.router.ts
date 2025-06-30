import express from "express";
import { createdFoodCategory } from "../controller/foodCategory/createFoodCategory.controller";
import { deletedFoodCategory } from "../controller/foodCategory/deletedFoodCategory.controller";
import { updatedCategory } from "../controller/foodCategory/updatedCategory.controller";
import { getFoodCategorys } from "../controller/foodCategory/getFoodCategorys.controller";
import { getFoodCategory } from "../controller/foodCategory/getFoodCategory.controller";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/", createdFoodCategory);

foodCategoryRouter.get("/", getFoodCategorys);

foodCategoryRouter.get("/:categoryId", getFoodCategory);

foodCategoryRouter.delete("/:categoryId", deletedFoodCategory);

foodCategoryRouter.put("/:categoryId", updatedCategory);

export default foodCategoryRouter;
