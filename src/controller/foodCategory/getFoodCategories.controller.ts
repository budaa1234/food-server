import { Request, Response } from "express";
import FoodCategory from "../../Model/foodCategory";

export const getFoodCategories = async (req: Request, res: Response) => {
  try {
    const categories = await FoodCategory.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "categoryDetails",
        },
      },
      {
        $project: {
          categoryName: "$categoryName",
          count: { $size: "$categoryDetails" },
          foods: "$categoryDetails",
        },
      },
      {
        $sort: { categoryName: 1 },
      },
    ]);
    res.status(200).send({ succses: true, categories });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
