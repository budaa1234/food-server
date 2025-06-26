import { Request, Response } from "express";
import FoodCategory from "../../Model/foodCategory";

export const createdFoodCategory =async (req: Request, res: Response) => {
    const {categoryName} = req.body
    try{
       const foodCategory = await new FoodCategory({
        categoryName: categoryName
       }).save()
       res.status(200).send({success: true, foodCategory})
    }catch(error){
        res.status(400).send({message: "api error", error})

    }
}