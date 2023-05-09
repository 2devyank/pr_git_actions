const express=require("express");
const app=express();


app.use(express.json());

app.get("/card",(req,res)=>{
    res.json({mes:"jhon cena tere cene m pasena"})
})

app.listen(3000,()=>{
    console.log(`listening on 3000 port`)
})

module.exports=app;