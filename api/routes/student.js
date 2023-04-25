const express=require('express');
const router=express.Router();
const Student=require('../model/student');
const mongoose=require('mongoose');


//get request
router.get('/',(req,res,next)=>{
    // res.status(200).json({
    //     message:'this is student get request'
    // })
    Student.find()
        .then(result=>{
            res.status(200).json({
                studentData:result
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            });
        })
})

router.get('/:id',(req,res,next)=>{
   console.log(req.params.id);
   Student.findById(req.params.id)
        .then(result=>{
            res.status(200).json({
                studentDetail:result
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
    //     message:'this is student post request'
    // })
    // console.log(req.body);
    const student=new Student({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        gender:req.body.gender,
        email:req.body.email,
        phone:req.body.phone
    })

    student.save()
        .then(result=>{
            console.log(result);
            res.status(200).json({
            newStudent:result
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
   Student.deleteOne({_id:req.params.id})
         .then(result=>{
             res.status(200).json({
             message:'student deleted',
            result:result
         })
    })
        .catch(err=>{
            res.status(500).json({
            error:err
         })
    })
    // Student.remove({_id:req.params.id})
    //     .then(result=>{
    //         res.status(200).json({
    //             message:'student deleted',
    //             result:result
    //         })
    //     })
    //     .catch(err=>{
    //         res.status(500).json({
    //             error:err
    //         })
    //     })
})

module.exports=router;
