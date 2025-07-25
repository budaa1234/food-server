import { Request, Response } from "express";
import User from "../../Model/user";

export const getCurrentUser = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization
    console.log(authHeader);
    
    const {userId} =req.body
    
    try {
        // const user = await User.findById(userId)
        res.status(200).json({massage: "success"})
    } catch (error) {
        
    }
}