import { Request, Response } from "express";
import jwt, { verify } from "jsonwebtoken";


export const getCurrentUser = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization
    const token =authHeader?.split(" ")[1] || ""
    
   if(authHeader){
    throw new Error("Authorization not found");
   }
    
    try {
        const verified = jwt.verify(token!, process.env.JSONWEBTOKEN!);
        console.log(verified);
        if(!verified) {
            throw new Error("User not found");
        }
        res.status(200).json({user: verified});
    } catch (error) {
        
    }
}