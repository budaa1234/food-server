import { Request, Response } from "express";
import User from "../../Model/user";

import bcrypt from "bcrypt";
export const creatUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address, role,  isVerified } =
    req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
  try {
    const user = await new User({
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      role,
      isVerified: false
    }).save();
    res.status(200).send({ success: true, user });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
