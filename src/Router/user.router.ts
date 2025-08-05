import express from "express";
import { creatUser } from "../controller/auth/signUp.controller";
// import { getUserId } from "../controller/auth/getUserById.controller";
import { signInUser } from "../controller/auth/signIn.controller";
import { resetPassword } from "../controller/auth/resetPasword.controller";
import { getCurrentUser } from "../controller/auth/getCurrentUser.controller";

const userRouter = express.Router()

userRouter.post("/", creatUser)

// userRouter.get("/:userId", getUserId)

userRouter.post("/login", signInUser)

userRouter.post("/reset-password", resetPassword)

userRouter.get("/get-current-user", getCurrentUser )

export default userRouter