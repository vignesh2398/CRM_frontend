import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Fulldetails } from './Fulldetails'
import { Routes,Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AdminHomePage } from './AdminHomePage';
import { url1 } from '../App';
//const url='http://localhost:4050/api/admindashboard/lead'

export const ViewLead = () => {
  var url=`${url1}/api/admindashboard/lead`
    const [value,setvalue]=useState()
    const [ids,setid]=useState()
    const navigate = useNavigate();
    
 const Delete=async(id)=>{

    setid({_id:id._id})
    let token=sessionStorage.getItem('auth-token');
            
    //`${url}/api/admindashboard/lead`
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
            console.log(url)
        }  
        refresh();
    },[])
    console.log(value)
    
  return (
    <>
 <AdminHomePage/>
{value?

    <table class="table table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Client</th>
      <th scope="col">Number</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
    {value.map((user,index)=>{
        
        return(
            <tbody>
                    <tr>
                    
      <th scope="row">{index+1}</th>
      <td>{user?.title}</td>
      <td>{user?.client}</td>
      <td>{user?.number}</td>
      <td>{user?.status}</td>

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
