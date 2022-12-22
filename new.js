const express=require("express");
const app=express();

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>res.sendFile(__dirname +"/new.html"));
app.post("/",function(req,res){
    var n1=Number(req.body.n1);
    var n2=Number(req.body.n2);
    var result=n1+n2;
    res.send("The results are: "+result);
    });

app.listen(8000,()=>console.log("empty"));