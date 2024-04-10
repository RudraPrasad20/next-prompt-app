import mongoose, { Schema } from "mongoose";

export interface Messsages extends Document{
    content: string;
    createdAt: Date
}

const messageSchema : Schema<Messsages> = new Schema({
    content: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date, 
        required: true,
        default: Date.now
    },
})

export interface User extends Document{
    username: string;
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date; 
    isVerified: boolean;
    isAcceptingMessage: boolean,
    message: Messsages[]
}

const userSchema : Schema<User> = new Schema({
    username: {
        type: String, 
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String, 
        required: [true, "email is required"],
        unique: true,
        match: [/.+\@.+\..*/, 'please use a valid email address']
    },
    password: {
        type: String, 
        required: [true, "password is required"],
    },
    verifyCode: {
        type: String, 
        required: [true, "verify code is required"],
    },
    verifyCodeExpiry: {
        type: Date, 
        required: [true, "verify code expire is required"],
    },
    isVerified: {
        type: Boolean, 
        default: false
    },
    isAcceptingMessage: {
        type: Boolean, 
        default:true
    },
    message: [messageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema)
export default UserModel; 