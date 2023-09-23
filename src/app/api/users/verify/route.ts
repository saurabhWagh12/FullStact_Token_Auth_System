import { ConnectDB } from "@/database/DB";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

ConnectDB();


export async function POST(request:NextRequest) {
    try {
        const req = await request.json();
        const {token} = req
        console.log(token)
        const user = await User.findOne({verifyToken:token,
            verifyTokenExpiry:{$gt: Date.now()}
        })

        if(!user){
            return NextResponse.json({status:400,message:"User not found"})
        }

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({status:200,message:'Success'})
    } catch (error:any) {
        console.log(error)
        return NextResponse.json({status:400,message:error})
    }
}
