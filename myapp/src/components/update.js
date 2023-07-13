
import TextField from '@mui/material/TextField';
import  './nav.css'
import Button from '@mui/material/Button';
import {  useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';

import axios from 'axios';


function UpdateData(props) {
  //  console.log(props.data);
   let select=useSelector((state)=>{
    console.log(state);
    return state.Update
 })
   let Main_page=useNavigate();
  //   let {name,age,email,password , _id}=props.data

  //    console.log(name, age)

    let formik2=useFormik({
        initialValues:{
          name:select.name,
          age:select.age,
          email:select.email,
          password:select.password
        },
      
        onSubmit:(values)=>{
  
          console.log(values);
          
          
  
          axios.put(`http://localhost:1200/api/update_users/${select._id}`,{name:values.name,age:values.age,
      
          email:values.email,password:values.password}).then((result)=>{
  
            console.log(result);
            Main_page('/information')
            
          }).catch((err)=>{
            console.log(err);
           
          })
      
        }
      });




    return (<>
    <div className='container2'>
    <form onSubmit={formik2.handleSubmit}>
    
    <TextField id="outlined-basic" label="Name" name="name" variant="outlined"  margin="dense" onChange={formik2.handleChange} value={formik2.values.name} />
    <TextField id="outlined-basic" label="age" name="age" variant="outlined"  margin="dense" onChange={formik2.handleChange} value={formik2.values.age} />
    <TextField id="outlined-basic" label="Email" name="email" variant="outlined"  margin="dense" onChange={formik2.handleChange} value={formik2.values.email}  />
    <TextField id="outlined-basic" label="Password" name="password" type="password"  variant="outlined"  margin="normal" onChange={formik2.handleChange} value={formik2.values.password}/>
    <Button type='submit' variant="contained"  style={{width:"50%", padding: "10px 3px",margin:"4px 0 "}}>update</Button>
    </form></div>
    </>);
}

export default UpdateData;