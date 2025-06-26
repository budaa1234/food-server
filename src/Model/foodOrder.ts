import { Schema } from "mongoose";

const foodOrderSchema = new Schema({
    totalPrice: {type: Number, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},

    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}

})