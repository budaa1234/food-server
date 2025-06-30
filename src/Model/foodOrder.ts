import { model, Schema } from "mongoose";

enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

const foodOrderItemSchema = new Schema({
  food: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
});

const foodOrderSchema = new Schema({
  user: { type: String, required: true },
  totalPrice: { type: String, required: true },
  foodOrderItems: [{ type: foodOrderItemSchema, required: true }],
  status: {
    type: String,
    required: true,
    enum: Object.values(FoodOrderStatusEnum),
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const FoodOrder = model("foodOrder", foodOrderSchema);
export default FoodOrder;
