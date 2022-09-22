import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { url1 } from '../App'

export const EmployeeLogin = () => {
  var url=`${url1}/api/employee/login`  

    const navigate = useNavigate();
    const [loginvalue,setvalue]=useState({
        email:'',
        password:''
    })
    const [error,seterror]=useState(false)
    const [message,setmessage]=useState("")
    const handlechange=(e)=>{
     const name=e.target.name;
     const value=e.target.value;
     setvalue((prevState)=>({
        ...prevState,
        [name]:value
     }))
    }
    const sumbit=async(e)=>{
      try {
        
        e.preventDefault();
        let res=await axios.post(url,loginvalue)
        console.log(loginvalue)
        console.log(res.data)
        var abc=res.data
        console.log(res.status)
        
        let token = sessionStorage.setItem('auth-token',res.data);
        console.log(token)
        if(res.status==200)
        {
          console.log(res)
          navigate("/EmployeeHomepage")
        }
        else
        {
          console.log(res.data.message)
          setmessage(res.data.message)
          const abc=res.data.message
          seterror(true)
        }
      } catch (error) {

        seterror(true)
        console.log("error")
        
      }
    }
    
  return (
    <>
    <div class="card container col-3 my-5 " >
 
    <div class="container">
  <form class="px-4 py-3">
    <div class="form-group">
        <h2>Employee Login</h2>
      <label>Email address</label>
      <input type="email" class="form-control" onChange={handlechange} value={loginvalue.email} name="email" placeholder="email@example.com"/>
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" name='password' onChange={handlechange} value={loginvalue.password}  placeholder="Password"/>
    </div>

    <button type="submit" class="btn btn-primary" onClick={sumbit}>Sign in</button>
  </form>
  
  <div className='my-3'>{error?<p>Try again</p>:<></>}</div>
  <a class="dropdown-item" href="/signin">New around here? Sign up</a>
  <a class="dropdown-item" href="/forgotpassword">Forgot password?</a>
</div>
</div>

    </>
  )
}
