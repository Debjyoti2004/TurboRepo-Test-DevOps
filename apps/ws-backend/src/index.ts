import { WebSocketServer } from "ws";
import client  from "@repo/db/client"

const server = new WebSocketServer({
    port: 3001
});


server.on("connection",async (soket)=>{

    await client.user.create({
        data:{
            UserName: Math.random().toString(),
            Name: Math.random().toString(),
            Password: Math.random().toString()
        }
    })
    soket.send("You are connected on the websocket server on port 3001")
})