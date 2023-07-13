
const express= require("express");
const userModel=require("../model/model");


exports.register=(req,res)=>{
   
   userModel.find().then((response)=>{
        
     res.status(200).json({message:" data successfully find",response})
    
     console.log('data succssfull find');
     
    })
    .catch(()=>{
        res.status(404).json({message:"error occur .................."})
    })
   




}
//...........register api.....
exports.register_data=(req,res)=>{
    
    let {name,age,email,password}=req.body;


    if(!name || !age || !email || !password){

        return res.status(404).json({message:"fill the input fields"})
    }


    let data= new userModel({name,age,email,password});
    data.save().then((result)=>{res.status(200).json(result)}).catch((err)=>{
        res.status(400).json(err)
    })
//     res.status(200).json(result)
//   console.log(data);


};

/// fnd only one user...................
exports.one_data= async (req,res)=>{
    let id=req.params.id;
    console.log(id);
      userModel.findById(id).then((response)=>{  
        res.status(200).json({response})}).catch(()=>{

        res.status(400).json({message:"error occured"})
     })





      
     }

//......................//.............................
exports.update_data=async (req,res)=>{


    let id= req.params.id
    console.log(id);
    let {name,age,email,password}=req.body;

    let data=await userModel.findByIdAndUpdate(id,{
        name:name,
        age:age,
        email:email,
        password:password
    },{ new: true })
    console.log("updated user");
    console.log(data);
     res.status(200).json({
        message:"user information update successfully",
        data
    })

}
//..............delete.........................
exports.delete_data= async (req,res)=>{

    // let email=req.params.email;
    // console.log(em)
   
    // let email=req.body.email
    // console.log("hiiiiiiiiiiiiiiiii");
    // console.log(email);
    
    //  let user_data=await userModel.findOne(email)
    //  console.log(user_data);
    //  need to user id that we delete a  user
    // let user_id=user_data.id


    // await userModel.findByIdAndDelete(user_id)
    // .then(() => {
    //     res.status(200).json({
    //         message: 'User deleted Successfully'
    //     })
    //     console.log('deleted user');
    // })
    // .catch(error => {
    //     res.status(200).json({
    //         message: 'An error occured!',error }) })



    //////new////


 
     let id = req.params.id
    
await userModel.findByIdAndDelete(id)
.then(() => {
    res.status(200).json({
        message: 'User deleted Successfully!'
    })
})
.catch(error => {
    res.status(400).json({
        message: 'An error occured!'
    })
})




}



