import { url1 } from '../App';
import { Dashboard } from './Managercomp/Dashboard';

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const ManagerAddContact = () => {
    var url=`${url1}/api/managerdashboard/contact`
    const navigate = useNavigate();
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
             alert("Contract added")
              console.log("completttes")
          }
          else
          {
              console.log("error")
      
             
          }
        } catch (error) {
          console.log("fill all details")
        }

    }

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
    email: "",
    address:""
    })

  useEffect(()=>{
    const refresh=async()=>{

        let token=sessionStorage.getItem('auth-token');
         try {
            
             let res=await axios.get(url,{headers:{"auth-token":token}})
             
             if(res.data)
             {
                 navigate("")

             }
             else{
                 navigate("/")
             }
         } catch (error) {
            navigate("/")
         }       
    }
    refresh();
  },[])
    
  return (
    <>
    <Dashboard/>
<form className='container col-4 mx-2' >
<h2>Adding Contact</h2>
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
<label for="formGroupExampleInput2">Email</label>
<input type="text" class="form-control" name='email' placeholder="email"
 onChange={handlechange} value={lead.email} />
</div>
<div class="form-group">
<label for="formGroupExampleInput2">Address</label>
<input type="text" class="form-control" name='address' placeholder="address"
 onChange={handlechange} value={lead.address} />
</div>
<button type="submit" class="btn btn-primary" onClick={onsumbit}>sumbit</button>
</form>
</>
  )
}
