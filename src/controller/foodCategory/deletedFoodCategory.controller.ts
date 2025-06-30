import { Request, Response } from "express";
import FoodCategory from "../../Model/foodCategory";

export const deletedFoodCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  try {
    const foodCategory = await FoodCategory.findByIdAndDelete(categoryId);
    res.status(200).send({ success: true, foodCategory });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
