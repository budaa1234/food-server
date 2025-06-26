import { Request, Response } from "express";
import Food from "../../Model/food";

export const deletedFood = async(req: Request, res: Response) => {
    const {foodId} = req.params
    try {
        const food = await Food.findByIdAndDelete(foodId)
        res.status(200).send({succses: true, food})
    } catch (error) {
        res.status(400).send({message: "api error", error})
    }
}