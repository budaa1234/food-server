import express from "express";
import { creatUser } from "../controller/auth/addUser.controller";
import { getUserId } from "../controller/auth/getUserById.controller";
import { loginUser } from "../controller/auth/login.controller";
const userRouter = express.Router()

userRouter.post("/", creatUser)

userRouter.get("/:userId", getUserId)

userRouter.post("/login", loginUser)

export default userRouter