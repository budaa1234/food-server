import { Request, Response } from "express";
import FoodCategory from "../../Model/foodCategory";

export const getFoodCategorys = async(req: Request, res: Response)=>{
    try {
        const categorys = await FoodCategory.find()
        res.status(200).send({succses: true, categorys})
    } catch (error) {
        res.status(400).send({message: "api error", error})
    }
}