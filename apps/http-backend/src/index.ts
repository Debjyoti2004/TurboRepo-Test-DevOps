import express from "express";
import client from "@repo/db/client"

const app = express();

app.use(express.json());

app.get ("/",(req,res)=>{
    res.send("hello")
})

app.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

    const user = await client.user.create({
        data:{
            UserName:username,
            Name:name,
            Password:password
        }
    })

    res.json({
        message : "SignUp Successful",
        ID: user.id,
        UserName: user.Name

    })
})

app.listen(3002,()=>{
    console.log("App is runing on PORT 3002")
})
