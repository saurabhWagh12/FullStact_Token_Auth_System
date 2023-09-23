import { ConnectDB } from "@/database/DB";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

ConnectDB();


export async function POST(request:NextRequest) {
    try {
        const req = await request.json();
        const {email,password} = req;
        const user = await User.findOne({email:email});
        if(!user){
            return NextResponse.json({status:400,message:"User Dont not exist"});
        }

        //checking password:
        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({status:400,message:"Invalid Password"});
        }

        //Create token data:
        const tokenData = {
            id:user._id,
            name:user.name,
            email:user.email
        }
        
        const token = await jwt.sign(tokenData,'tokendata',{expiresIn:"2d"})

        const response = NextResponse.json({status:200,message:"Success"})
        response.cookies.set('token',token,{httpOnly:true}); 

        return response;
        

    } catch (error) {
        console.log(error);
        return NextResponse.json({status:400,message:"Error"});
    }
    
}