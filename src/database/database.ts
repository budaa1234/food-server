import "dotenv/config"
import mongoose from "mongoose";
export const connectDb = async () => {
   try {
    mongoose.connect(process.env.MONGO_URL!).then(()=> console.log("Database connected"))
   } catch (error) {
      return error
   };
}
