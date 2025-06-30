import express from "express";
import { creatUser } from "../controller/user/creatUser.controller";
const userRouter = express.Router()

userRouter.post("/", creatUser)

export default userRouter