const express = require('express')
const fs=require('fs');

const path=require('path');

const router=express.Router();
let flag=0;

router.get('/home',(req,res)=>{
    //console.log(__dirname);
    const filepath=path.join(__dirname,"../services/index.html");
    res.sendFile(filepath);
})
router.get('/register',(req,res)=>{
    //const filepath=path.join(__dirname,"../services/index.html");
    const filepath=path.join(__dirname,"../services/register.html");
    res.sendFile(filepath);
})
router.get('/login',(req,res)=>{
    //const filepath=path.join(__dirname,"../services/index.html");
    const filepath=path.join(__dirname,"../services/login.html");
    res.sendFile(filepath);
})
router.get('/details',(req,res)=>{
    //const filepath=path.join(__dirname,"../services/index.html");
    
    const filepath=path.join(__dirname,"../services/details.html");
    res.sendFile(filepath);
    
})
router.get('/details.js',(req,res)=>{
    fs.readFile('emp.txt','utf-8',(err,data)=>{
        if(err){
            console.log("Error in fetching details.");
        }
        else{
            const content=data.split(",");
        }
    })
    const filepath=path.join(__dirname,"../services/details.js");
    res.sendFile(filepath);
})

router.post('/registerForm',(req,res)=>{
    //console.log(req.body);
    
    const empno=[];
    const empname=[];
    const password=[];
    empno.push(JSON.stringify(req.body.eno));
    empname.push(JSON.stringify(req.body.ename));
    password.push(JSON.stringify(req.body.pass));
    if(flag==0){
        data=empno+","+empname+","+password;
        flag++;
    }
    else{
    data=","+empno+","+empname+","+password;}
    fs.appendFile('emp.txt',data,(err)=>{
        if(err){
            res.send("Error occured in writing into emp file");
        }
        else{
            console.log("registration successful!");
            res.sendFile('C:/Users/Keshav/Desktop/express_project/src/services/index.html');
        }
    })
})

router.post('/loginForm',(req,res)=>{
    //console.log(req.body);
   fs.readFile('emp.txt','utf-8',(err,data)=>{
       if(err){
           res.send("Error in reading data");
       }
       else{
           const content=data.split(",");
           //console.log(content);
           //console.log(JSON.stringify(req.body.eno));
           if(content.indexOf(JSON.stringify(req.body.eno))>-1 && content.indexOf(JSON.stringify(req.body.pass))==content.indexOf(JSON.stringify(req.body.eno))+2){
               console.log("Login succesful!");
               res.sendFile('C:/Users/Keshav/Desktop/express_project/src/services/index.html');
           }
           else{
               res.send("Incorrect Credentials!");
           }
       }
   })
})

module.exports=router;
