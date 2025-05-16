const express = require('express');
const mongoose = require('mongoose');

const app=express();

const connectionString="mongodb+srv://surendra:8008086754@surendra.irg39h8.mongodb.net/node-app-01?retryWrites=true&w=majority&appName=Surendra";

mongoose.connect(connectionString).then(()=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log(error);
});

app.get('/add-user',(rew,res)=>{
    const user = new user({
        name:"Surendra",
        age:21
    });
    user.save().then((result)=>{
        res.send(result);
    }).catch((error)=>{
        console.log(error);
    });
});

app.listen(3500,()=>{
    console.log("Server is Running");
});

app.get("/",(req,res)=>{
    res.sendFile("./Express/index.html",{root:__dirname})
});
app.get("/about",(req,res)=>{
    res.sendFile("./Express/about.html",{root:__dirname})
});
app.get("/contact",(req,res)=>{
    res.sendFile("./Express/contact.html",{root:__dirname})
});
app.use((req,res)=>{
    res.status(404).sendFile("./Express/not-found.html",{root:__dirname})
});