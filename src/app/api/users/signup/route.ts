import { ConnectDB } from "@/database/DB";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import { sendEmail } from "@/helper/mailer";

ConnectDB();

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const { name, email, password } = req;

    const user = await User.findOne({ email: email });
    if (user) {
      return NextResponse.json({ status: 200, message: "User Exist" });
    }

    // HASHING PASSWORD:
    const salt = await bcryptjs.genSalt(10); // Fixed the typo here
    const hash = await bcryptjs.hash(password, salt);

    const u = new User({ name: name, email: email, password: hash });
    await u.save();

    //sending verification email:
    await sendEmail({email,emailType:'Verify',userId:u._id})

    
    return NextResponse.json({ status: 200, message: "USER Created" });
  } catch (error) {
    console.error(error); // Use console.error to log errors
    return NextResponse.json({ status: 400, message: "Error" });
  }
}
