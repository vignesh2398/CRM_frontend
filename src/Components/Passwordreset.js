import React, { useState } from 'react'
import axios from 'axios'
import { url1 } from '../App'
import { useNavigate } from 'react-router-dom'
export const Passwordreset = () => {
    var url=`${url1}/api/passwordrest/forget`
    const navigate = useNavigate();    
    const[email,setemail]=useState(" ")
    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setemail((prevState)=>({
           ...prevState,
           [name]:value
        }))
       }


       const onsumbit=async(e)=>{
        e.preventDefault();
        try {

        console.log(email)
          let res=await axios.post(url,email)
          console.log(res.data)
          console.log(res.status)
          console.log(res.status)
          if(res.status==200)
          {
              alert("PLease check yor mail box")
             
          }
          else
          {
              console.log("error")
      
             
          }
        } catch (error) {
          console.log("fill all details")
        }
      }
  return (
    <>
    <div class="card container col-3 my-5 " >
 
    <div class="container">
  <form class="px-4 py-3">
    <div class="form-group">
        <h2>Reset Password</h2>
      <label>Email address</label>
      <input type="email" class="form-control" onChange={handlechange}
       name="email" placeholder="email@example.com"/>
    </div>


    <button type="submit" class="btn btn-primary" onClick={onsumbit} >Reset</button>
  </form>
  
</div>
</div>

    </>
  )
}
