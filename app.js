const express = require('express')
const app = express()
const bodyParser=require('body-parser');
const router=require('./routes/routing');
const path=require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',router); 

app.listen(3000);
console.log("server started!");