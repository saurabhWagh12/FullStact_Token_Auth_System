import { ConnectDB } from "@/database/DB";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helper/getDataFromToken";

ConnectDB();
export async function GET(request:NextRequest) {
    
    try {
        const got = await getDataFromToken(request);
        const user = await User.findOne({_id:got}).select('-password -isAdmin');
        return NextResponse.json({status:200,message:'User found',data:user});
    } catch (error) {
     return NextResponse.json({status:400,message:"Error"});   
    }

} 