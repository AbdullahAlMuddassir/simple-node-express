const express = require("express");
var cors = require('cors');
const { json } = require("express/lib/response");
const app = express()
app.use(cors())
app.use(express.json());
const port=5000
const users=[
    {id:1,name:"Abdullah",email:"abdullahalmuddassir.cox.teknaf@gmail.com",mobile:"0185505055050"},
    {id:2,name:"Abdullah",email:"abdullahalmuddassir.cox.teknaf@gmail.com",mobile:"0185505055050"},
    {id:3,name:"Abdullah",email:"abdullahalmuddassir.cox.teknaf@gmail.com",mobile:"0185505055050"},
    {id:4,name:"Abdullah",email:"abdullahalmuddassir.cox.teknaf@gmail.com",mobile:"0185505055050"},
    {id:5,name:"Abdullah",email:"abdullahalmuddassir.cox.teknaf@gmail.com",mobile:"0185505055050"},
    {id:6,name:"Abdullah",email:"abdullahalmuddassir.cox.teknaf@gmail.com",mobile:"0185505055050"}
]
app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id]
    res.send(user);
})
//Post  Method
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log("heating the post",req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})
app.listen(port,()=>{
    console.log("this is my first node js",port)
})