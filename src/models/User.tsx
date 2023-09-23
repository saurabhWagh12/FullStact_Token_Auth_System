import mongoose, { Schema } from "mongoose";

const UserModel = new mongoose.Schema({
    name:String,
    email:{type:String,required:true,unique:true},
    password:{type:String},
    isVerified:{
        type:Boolean,default:false
    }, 
    isAdmin:{
        type:Boolean,default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
});

export const User = mongoose.models.User || mongoose.model('User',UserModel);