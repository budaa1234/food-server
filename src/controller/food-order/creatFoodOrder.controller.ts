import { Request, Response } from "express";
import FoodOrder from "../../Model/foodOrder";

export const creatFoodOrder = async (req: Request, res: Response) => {
  const { user, totalPrice, foodOrderItems, status, quantity, price, foodId } =
    req.body;
  try {
    const foodOrder = await new FoodOrder({
      user,
      totalPrice,
      foodOrderItems: {
       food: foodId,
        quantity: quantity,
        price: price,
      },
       status,
    }).save();
    res.status(200).send({ succsess: true, foodOrder });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
