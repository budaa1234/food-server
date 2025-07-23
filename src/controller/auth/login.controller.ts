import { Request, Response } from "express";
import User from "../../Model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    
    if (!user) {
      res.status(400).json({ message: "try again" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const data = { userId: user._id, role: user.role, email: user.email };

      const secret = process.env.JSONWEBTOKEN!;

      const hour = Math.floor(Date.now() / 1000) + 60 * 60;

      const accessToken = jwt.sign({ exp: hour, data }, secret);

      res.status(200).json({ success: true, accessToken });
    } else {
      res.status(400).json({ message: "try again" });
    }
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ success: false, error });
  }
};
