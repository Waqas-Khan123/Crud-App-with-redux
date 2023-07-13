import React from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {  useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';

import { formSchema } from "./formvalid";



function Register() {
    let [resullt,setResult]=useState();
    let d1=useNavigate();

   
    let formik=useFormik({
      initialValues:{
        name:"",
        age:'',
        email:"",
        password:""
      },
      validationSchema:formSchema,
      onSubmit:(values)=>{
        console.log(values);
   axios.post('http://localhost:1200/api/reg_data',{name:values.name,age:values.age,
        email:values.email,password:values.password}).then((response)=>{
          console.log(response);
      
        setResult(d1('/information'))
        
        }).catch((err)=>{
          console.log(err)
          console.log('error occured in frontend')
          setResult("something went wrong.....") 
        })
    
      }
    });



    return ( <>
  <div className='container'>
  <form onSubmit={formik.handleSubmit}>

  <div className='main'> 
  
  <TextField id="outlined-basic" label="Name" name="name" variant="outlined"  margin="dense" onChange={formik.handleChange} value={formik.values.name} />
  <span style={{color:"red"}}>{formik.errors.name}</span>
  <TextField id="outlined-basic" label="age" name="age" variant="outlined"  margin="dense" onChange={formik.handleChange} value={formik.values.age} />
  <span style={{color:"red"}}>{formik.errors.age}</span>
  <TextField id="outlined-basic" label="Email" name="email" variant="outlined"  margin="dense" onChange={formik.handleChange} value={formik.values.email}  />
  <span style={{color:"red"}}>{formik.errors.email}</span>
  <TextField id="outlined-basic" label="Password"   name="password" type="password"  variant="outlined"  margin="normal" onChange={formik.handleChange} value={formik.values.password}/>
  
  <span style={{color:"red"}}>{formik.errors.password}</span>
 <div> <Checkbox value="remember" color="primary" label="Remember me"/>Remember me </div>  

  <Button type='submit' variant="contained"  style={{padding: "10px 3px",margin:"4px 0 "}}>Insert data</Button>
 


  <p>{resullt}</p>


  
  
  
  </div>
  
  </form>


  </div>

    </>);
}

export default Register;