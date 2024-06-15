const express=require("express")
const studentRoutes=require("./routes/student")
const app=express();



const connectDb=require("./config/db")

app.use(express.json())

connectDb();

app.use('/students', studentRoutes);

const PORT=5000;

app.listen(PORT,()=>{
    console.log(`server is running ar port ${PORT}`)
})