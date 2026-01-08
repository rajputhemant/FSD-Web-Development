import dotenv from 'dotenv'
dotenv.config();
import express from 'express'

const app = express();
app.get("/",(req,res)=>{
    console.log("server is Running");
    res.json({message:"Sever is running sucessfullys "});
})
const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log("Server Started at Port ",port);
    
});
