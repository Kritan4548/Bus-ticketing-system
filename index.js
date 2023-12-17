const http=require("http")
const express=require("express")

const app=express()
app.get('/',(req,res)=>{
    res.json(
        "<h1>Hello world!!</h1>"
    )
}
)

const server=http.createServer(app)


server.listen(3010,"localhost",(err)=>{
    console.log("Server is running on the port 3010");
    console.log("Press Ctrl+C to disconnect from sever");
    console.log("Run http://localhost:3010/ to browse your server")
})