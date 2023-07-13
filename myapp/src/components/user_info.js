import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import  './nav.css'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

function Info(props) {
 
   

 
    let [result,setResult]=useState('')
    let back=useNavigate();
    let update_user=useNavigate();
    const dispatch = useDispatch()

    function Userdata(){
        axios.get('http://localhost:1200/api/getdata').then((response)=>{
        setResult(response.data.response);
        console.log(response.data.response);
    
        }).catch((err)=>{console.log(err)})
    
    }





useEffect(()=>{
    Userdata();
},[]);

function Delete (id){
    console.log('deleteeeeeeeeeeeeeee');
    console.log(id);
    axios.delete(`http://localhost:1200/api/delete_users/${id}`).then(()=>{
      
      Userdata();
    }).catch((err)=>{
        console.log(err) })


};
function updateUser(id){
  
    
    console.log(id);
   let data = axios.get(`http://localhost:1200/api//onlyoneuserfind/${id}`).then((response)=>{
console.log(response.data.response);
// props.setData(response.data.response)
let data2=response.data.response
console.log(data2);
dispatch({type:"update" , payload:data2})

update_user('/update');
console.log('updatee');
// update_user("/update")



    }).catch((err)=>{
        console.log(err) })

        
}







    return ( <div className="tb">
    
    <Button variant="contained" size="large" onClick={()=>{back('/register')}}>
          Back
        </Button>

    <table id='customers'><tr><th>name</th><th>age</th><th>email</th><th>password</th><th>Edit/Delete</th></tr>
    
    {result?(<>{result.map((item)=>{
        return <tr key={item._id}><td>{item.name}</td><td>{item.age}</td><td>{item.email}</td><td>{item.password}</td>
        <ButtonGroup>
        <Button variant="contained" onClick={()=>{Delete(item._id)}}  color="error"  style={{margin:"2px 1px"}}>Delete</Button>
        <Button variant="contained" onClick={()=>{updateUser(item._id)}} color="success" style={{margin:"2px 3px"}}>Edit</Button>
  
  </ButtonGroup>

      
  
  
</tr>
    })}</>):null}

    </table>
    </div>);
}
export default Info;