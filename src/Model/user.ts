import { model, Schema } from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    address: {type: String, required: true},

    
    ttl: {type: Date, default: Date.now()},
    isVerified: {type: Boolean, required: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
})
const User = model("user", userSchema)
export default User