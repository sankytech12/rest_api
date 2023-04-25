const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Faculty=require('../model/faculty');
const student = require('../model/student');
const faculty = require('../model/faculty');


//get request
router.get('/',(req,res,next)=>{
    // res.status(200).json({
    //     message:'this is faculty get request'
    // })
    Faculty.find()
        .then(result=>{
            res.status(200).json({
                facultyData:result
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
})


//get request by id
router.get('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Faculty.findById(req.params.id)
        .then(result=>{
            res.status(200).json({
                facultyDetail:result
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
})

//post request
router.post('/',(req,res,next)=>{
    // res.status(200).json({
    //     message:'this is faculty post request'
    // })
    const faculty=new Faculty({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        gender:req.body.gender,
        course:req.body.course,
        phone:req.body.phone
    })

    faculty.save()
        .then(result=>{
            console.log(result);
            res.status(200).json({
                newFaculty:result
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
})


//delete request
router.delete('/:id',(req,res,next)=>{
    Faculty.deleteOne({_id:req.params.id})
        .then(result=>{
            res.status(200).json({
                message:'faculty deleted...',
                result:result
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
})


//put request
router.put('/:id',(req,res,next)=>{
    Faculty.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            gender:req.body.gender,
            course:req.body.course,
            phone:req.body.phone
        }
    })
        .then(result=>{
            res.status(200).json({
                updated_faculty:result
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
})
module.exports=router;