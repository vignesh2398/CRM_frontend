import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url1 } from './App'
import { Dashboard } from './Components/Managercomp/Dashboard'
import { useNavigate } from 'react-router-dom';
export const Managergetservicerequest = () => {
   
    var url=`${url1}/api/managerdashboard/servicerequest` 
    const [value,setvalue]=useState()
    const [ids,setid]=useState()
    const navigate = useNavigate();
    
 const Delete=async(id)=>{

    setid({_id:id._id})
    let token=sessionStorage.getItem('auth-token');
            

let res=await axios.delete(url,{headers:{"auth-token":token}},ids)
console.log(ids)
console.log(res)
 }
 const Edit=async(id)=>{

    setid({_id:id._id})
    let token=sessionStorage.getItem('auth-token');
            

let res=await axios.delete(url,{headers:{"auth-token":token}},ids)
console.log(ids)
console.log(res)
 }
    
    
    useEffect(()=>{
        const refresh=async()=>{
            let token=sessionStorage.getItem('auth-token');
            
            let res=await axios.get(url,{headers:{"auth-token":token}})
            console.log(res.data)
            setvalue(res.data)
        }  
        refresh();
    },[])
    console.log(value)
    
  return (
    <>
 <Dashboard/>
{value?

    <table class="table table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Client Name</th>
      <th scope="col">Manager</th>
      <th scope="col">Priority</th>
    </tr>
  </thead>
    {value.map((user,index)=>{
        
        return(
            <tbody>
                    <tr>
                    
      <th scope="row">{index+1}</th>
      <td>{user?.client}</td>
      <td>{user?.manager}</td>
      <td>{user?.priority}</td>

      <button type="button" lassName="btn btn-primary" onClick={()=>Delete(user)}>Delete</button>
      <button type="button" lassName="btn btn-primary" className='mx-2' onClick={()=>Edit(user)}>Edit</button>
    </tr>
    
  </tbody>

)
})}

</table>
:<h2>no data found</h2>
}
    </>
  )
}
