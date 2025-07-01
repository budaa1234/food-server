import express from "express";
import { creatUser } from "../controller/user/creatUser.controller";
import { getUserId } from "../controller/user/getUserById.controller";
const userRouter = express.Router()

userRouter.post("/", creatUser)

userRouter.get("/:userId", getUserId)

export default userRouter