import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
    try {

        const response = NextResponse.json({status:200,message:"logged out"});
        response.cookies.set('token',"",{httpOnly:true,expires:new Date(0)},);
        return response;
        
    } catch (error) {
        return NextResponse.json({status:400,message:"Error"});
    }
}
