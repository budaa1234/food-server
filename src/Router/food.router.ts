import express from "express"
import { createdFood } from "../controller/food/creatFood.controller"
import { getFood } from "../controller/food/getFood.controller"
import { deletedFood } from "../controller/food/deletedFood.controller"

const foodRouter = express.Router()
foodRouter.post("/", createdFood)
foodRouter.get("/:foodId", getFood)
foodRouter.delete("/:foodId", deletedFood)
export default foodRouter