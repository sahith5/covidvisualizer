const express = require("express");
const app=express();



app.use(express.urlencoded({extended:true}));

app.use(express.json())

const port=process.env.PORT||3000;


app.listen(port,function(req,res)
{
    console.log("started at http://localhost:3000");
})


app.get("/",function(req,res)
{
res.sendFile(__dirname+"/frontend/index.html")
})
