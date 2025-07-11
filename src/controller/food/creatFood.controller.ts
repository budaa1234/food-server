import { Request, Response } from "express";
import Food from "../../Model/food";

export const createdFood = async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const food = await new Food({
      foodName,
      price,
      image,
      ingredients,
      category,
    }).save();
    res.status(200).send({ success: true, food });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};