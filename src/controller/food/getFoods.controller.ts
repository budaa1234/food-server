import { Request, Response } from "express";
import Food from "../../Model/food";

export const getFoods = async (req: Request, res: Response) => {
  try {
    const foods = await Food.find();
    res.status(200).send({ succsess: true, foods });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
