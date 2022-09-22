import axios from 'axios';
import React, { useState } from 'react'
import{useNavigate, useParams} from "react-router-dom"
import { url1 } from './App';
export const Newpassword = () => {
    const navigate = useNavigate();
    const [password1,setpassword]=useState("");
    const params =useParams();
    const token1=params.token
    var url=`${url1}/api/passwordrest/reset?token=${token1}`
    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setpassword((prevState)=>({
           ...prevState,
           [name]:value
        }))
       }
       console.log(password1)
    const onsumbit=async(e)=>{
        e.preventDefault();
        try {
            console.log(url)
            let res=await axios.post(url,password1)
        
          if(res.status==200)
          {
             alert("Password Changed")
             navigate('/')
          }
          else
          {
              console.log("error")
      
             
          }
        } catch (error) {
            alert("Session Expired")
            navigate('/')
        }

    }
  return (
    <>
    <div class="card container col-3 my-5 " >
 
    <div class="container">
  <form class="px-4 py-3">
   
        <h2>Enter New password</h2>
      
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" name='password' onChange={handlechange}  placeholder="New Password"/>
    </div>

    <button type="submit" class="btn btn-primary" onClick={onsumbit} >submit</button>
  </form>
  
  
</div>
</div>

    </>
  )
}
