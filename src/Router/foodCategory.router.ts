import express from "express"
import { createdFoodCategory } from "../controller/createFoodCategory.controller";

const foodCategoryRouter = express.Router()

foodCategoryRouter.post("/", createdFoodCategory)

export default foodCategoryRouter;