import { AdminHomePage } from './AdminHomePage'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { url1 } from '../App'
import { Dashboard } from './Managercomp/Dashboard'
const Manageraddlead = () => { 
    var url=`${url1}/api/managerdashboard/lead`  
    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setlead((prevState)=>({
           ...prevState,
           [name]:value
        }))
       }
       const [lead,setlead]=useState({
        title: "",
    client: "",
    number: "",
    status: ""
    })
const onsumbit=async(e)=>{
  e.preventDefault();
  try {
  let token=sessionStorage.getItem('auth-token');
  console.log(lead)
    let res=await axios.post(url,lead,{headers:{"auth-token":token}})
    console.log(res.data)
    console.log(res.status)
    console.log(res.status)
    if(res.status==200)
    {
        alert("lead added")
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
   <Dashboard/>
<form className='container col-4 mx-2' >
<h2>Adding Lead</h2>
<div class="form-group ">
<label >Title</label>
<input type="text" class="form-control" 
 name='title' onChange={handlechange} value={lead.title} />
</div>
<div class="form-group">
<label>Client</label>
<input type="text" class="form-control" name='client' 
placeholder="client name" onChange={handlechange} value={lead.client}/>
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Number</label>
<input type="number" class="form-control" name='number' 
placeholder="client name" onChange={handlechange} value={lead.number}/>
</div> 
<div class="form-group">
<label for="formGroupExampleInput2">Status</label>
<input type="text" class="form-control" name='status' placeholder="status"
 onChange={handlechange} value={lead.status} />
</div>
<button type="submit" class="btn btn-primary" onClick={onsumbit}>sumbit</button>
</form>
</>
  )
}

export default Manageraddlead