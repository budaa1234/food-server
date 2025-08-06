import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../../Model/user";


export const getCurrentUser = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization
    const token =authHeader?.split(" ")[1] || ""
    
   if(authHeader){
    throw new Error("Authorization not found");
   }
    
    try {
        const verified = jwt.verify(token!, process.env.JSONWEBTOKEN!) as jwt.JwtPayload;
        
        if(!verified) {
            throw new Error("User not found");
        }

        const user = await User.findOne({_id: verified.data.userId});
       
        
        res.status(200).json({user: user});
    } catch (error) {
        
    }
}