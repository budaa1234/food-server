import { Request, Response } from "express";
import FoodOrder from "../../Model/foodOrder";

export const creatFoodOrder = async (req: Request, res: Response) => {
  const { user, totalPrice, foodOrderItems } = req.body;
  try {
    const foodOrder = await new FoodOrder({
      user,
      totalPrice,
      foodOrderItems: foodOrderItems
    }).save();
    res.status(200).send({ succsess: true, foodOrder });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
