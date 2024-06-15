const mongoose=require("mongoose")

const URI="mongodb+srv://pankaj:tF14JNCRsP7gHiP3@cluster0.weswsgh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const connectDb=async()=>{

    try{
        await mongoose.connect(URI)
        console.log("connection successfully to DB")
    }catch (error){
        console.log("database connection is failed")
    }

}

module.exports=connectDb