import mongoose,{model} from "mongoose";

export const ConnectDB = async()=>{
    try{
        const {connection} =await mongoose.connect("",{dbName:"Authentication"});
        console.log(connection)
    }catch(error){
        console.log(error)
    }

}