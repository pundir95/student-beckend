const mongoose=require("mongoose")

const URI=process.env.MONGO_URL


const connectDb=async()=>{

    try{
        await mongoose.connect(URI)
        console.log("connection successfully to DB")
    }catch (error){
        console.log("database connection is failed")
    }

}

module.exports=connectDb