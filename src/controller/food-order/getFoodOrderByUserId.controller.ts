import { Request, Response } from "express";
import FoodOrder from "../../Model/foodOrder";

export const getFoodOrdersByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const foodOrder = await FoodOrder.find({ user: userId }).populate({
      path: "foodOrderItems",
      populate: {
        path: "food",
      },
    });
    res.status(200).send({ success: true, foodOrder });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
