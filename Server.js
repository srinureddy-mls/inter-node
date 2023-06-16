var express=require('express');
var app=express();

app.get('/',(req,res)=>{
    res.send("hello srinu reddy ")
  
})
app.listen(4000);