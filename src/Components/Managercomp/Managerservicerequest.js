import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Dashboard } from './Dashboard'
import { url1 } from '../../App'


export const Managerservicerequest = () => {
  
  var url=`${url1}/api/managerDashboardRoute/servicerequest`
  const handlechange=(e)=>{
    const name=e.target.name;
    let value
    if(e.target.value)
    {

      const value=e.target.value;
      console.log(value)
      console.log(name)
    }
    if(e.target.selected){
    const value=e.target.selected;
    console.log(value)
    console.log(name)
    }
    
    

    setservicerequest((prevState)=>({
       ...prevState,
       [name]:value
    }))
    console.log(servicerequest)
   }

   const [servicerequest,setservicerequest]=useState({
    title: "",
    client: "",
    manager: "",
    expected_revenue: "",
    probability: "",
    status: "",
    expected_closing: "",
    priority: ""
})

const onsumbit=async(e)=>{
  e.preventDefault();
  try {
  let token=sessionStorage.getItem('auth-token');
  console.log(servicerequest)
    let res=await axios.post(url,servicerequest,{headers:{"auth-token":token}})
    console.log(res.data)
    console.log(res.status)
    console.log(res.status)
    if(res.status==200)
    {
       alert("service added")
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
    <h2>Adding Service Request</h2>
  <div class="form-group ">
    <label >Title</label>
    <input type="text" class="form-control" 
     name='title' onChange={handlechange} value={servicerequest.title} />
  </div>
  <div class="form-group">
    <label>Client</label>
    <input type="text" class="form-control" name='client' 
    placeholder="client name" onChange={handlechange} value={servicerequest.client}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Manager</label>
    <input type="text" class="form-control" name='manager' 
    placeholder="client name" onChange={handlechange} value={servicerequest.manager}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Expected_revenue</label>
    <input type="number" class="form-control" name='expected_revenue' placeholder="expected_revenue"
     onChange={handlechange} value={servicerequest.Expected_revenue} />
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">probability</label>
    <input type="number" class="form-control" name='probability' placeholder="client name" 
    onChange={handlechange} value={servicerequest.probability}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">status</label>
    <div class="dropdown">
  <button class="btn btn dropdown-toggle" type="button" id="dropdownMenuButton"
   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" placeholder='status' >
    {servicerequest?.status}
  </button>
  <div class="dropdown-menu"  aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" >New</a>

      <a class="dropdown-item" href="#" selected="Contacted selected" name="status"   onClick={handlechange}>Contacted</a>
    <a class="dropdown-item" href="#">Qualified</a>
    <a class="dropdown-item" href="#">Lost</a>
    <a class="dropdown-item" href="#">Canceled</a>
    <a class="dropdown-item" href="#">Confirmed</a>

  </div>

</div>
  </div>


  <div class="form-group">
    <label for="formGroupExampleInput2">expected_closing</label>
    <input type="date" class="form-control" name='expected_closing' placeholder="client name" 
    onChange={handlechange} value={servicerequest.expected_closing}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">priority</label>
    <input type="text" class="form-control" name='priority' placeholder="client name" 
    onChange={handlechange} value={servicerequest.priority}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={onsumbit}>sumbit</button>
</form>
 
  
    </>
  )
}
