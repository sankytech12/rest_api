const express=require('express');
const app=express();
const studentRouter=require('./api/routes/student');
const facultyRouter=require('./api/routes/faculty');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');


mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('error',err=>{
    console.log('connection failed');
});

mongoose.connection.on('connected',connected=>{
    console.log('connected to database....');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/faculty',facultyRouter);

app.use('/student',studentRouter);

app.use((req,res,next)=>{
    res.status(404).json({
        error:'url not found. bad request'
    })
})

app.use((req,res,next)=>{
    res.status(200).json({
        message:'app is running'
    })
})
module.exports=app;