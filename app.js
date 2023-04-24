const express=require('express');
const app=express();
const studentRouter=require('./api/routes/student');
const facultyRouter=require('./api/routes/faculty');

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