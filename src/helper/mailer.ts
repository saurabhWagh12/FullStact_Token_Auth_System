import nodemailer from 'nodemailer';
import { User } from '@/models/User';
import bcryptjs from 'bcryptjs';

export const sendEmail = async({email,emailType,userId}:any)=>{
    try {
        // Create a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(),10);
        if(emailType==="Verify"){
            await User.findByIdAndUpdate(userId,{verifyToken:hashedToken,verifyTokenExpiry: Date.now()+3600000});
        }else if(emailType==="Reset"){
            await User.findByIdAndUpdate(userId,{forgotPasswordToken:hashedToken,forgotPasswordTokenExpiry: Date.now()+3600000});
        }

        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "ffef38903af0e6",
              pass: "99b5b0841ab90f"
            }
          });

        const mailOption = {
            from:'waghsa1@rknec.edu',
            to:email,
            subject: emailType==='Verify' ? 'Verify your email':'Reset Password', 
            html:`<p>Click <a href="${'http://localhost:3000'}/verifyemail?token=${hashedToken}">here</a> to ${emailType==="Verify"?"verify your email":"reset your password"}</p>`,
        }

        const mailResponse = await transporter.sendEmail(mailOption);
        return mailResponse;

    } catch (error:any) {
        console.log('Error')
    }
}