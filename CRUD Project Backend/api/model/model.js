const mongoose=require('mongoose');

const UserSchema= mongoose.Schema({
    name:{
        type:String,
        require:true,
        // minLength:4,
        // maxLength:15,
        // upercase:true,

    },
    age:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});
const Userdata=mongoose.model('register_information',UserSchema);
module.exports=Userdata;