const express=require("express")

const app=express()
app.use(express.json())

function details(req,res,next){
let firstname=req.body.firstname

 let lastname=req.body.lastname
 let email=req.body.email;
let age=req.body.age
let gender=req.body.gender
let pincode=req.body.pincode
console.log(req.body)
if(firstname==="" || !firstname){
    res.send({require:"First name require"}).status(404);
}
if(lastname==="" || !lastname){
     res.send({require:"Last name require"}).status(404);
}

if(email==="" || !email){
     res.send({require:"email require"});
}
if(!email.includes("@") || !email.includes(".")){
     res.send({msg:"Enter valid email"}).status(404)
}
if(!pincode){
     res.send({require:"Pincode require"}).status(404);
}
if(pincode.length>6){
     res.send({msg:"Enter valid pincode"}).status(404)
}
if(!age){
     res.send({require:"Age require"}).status(404);
}
if(age<1 || age>100){
     res.send({msg:"Age should be in between 1 to 100"}).status(404)
}
if(!gender){
     res.send({require:"Gender require"});
}
if(gender !=="male" && gender!=="female" && gender!=="other"){
     res.send({msg:"Enter a valid Gender "}).status(404)
}

// res.send({sucess:"Add sucesscefully"}).status(200)
next()
}
let user=[]
function regestion(req,res){
    user.push(req.body)
    res.send({message:"User Add sucessufuly"}).status(200)
}

function userlist(req,res){
    res.send(user)
}




app.post("/content",details,regestion)

app.get("/user",userlist)

app.listen(3001,()=>{
    console.log("Server is running at http://localhost:3001")
})