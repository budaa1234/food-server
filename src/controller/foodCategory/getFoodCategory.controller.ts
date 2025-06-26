// import { Request, Response } from "express";
// import FoodCategory from "../../Model/foodCategory";

// export const getFoodCategory = async(req: Request, res: Response)=>{
//     const {categoryName} = req.body
//     try {
//         const categorys = await FoodCategory.find(categoryName)
//         res.status(200).send({succses: true, categorys})
//     } catch (error) {
//         res.status(400).send({message: "api error", error})
//     }
// }