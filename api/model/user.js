const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String,
    phone:{
        type: Number,
        require: true
    },
    email:String,
    userType:String
})

module.exports=mongoose.model('User',userSchema);