import mongoose from "mongoose";




const UserSchema = new mongoose.Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    photo: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    planId: {type: String, default: 1},
    creditsBalance: {type: String, default: 10},
})
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User