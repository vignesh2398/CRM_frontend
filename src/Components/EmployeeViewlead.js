import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Fulldetails } from './Fulldetails'
import { Routes,Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { url1 } from '../App';
import { Dashboard } from './Managercomp/Dashboard';
import { EmployeeDashboard } from './EmployeeDashboard'
export const EmployeeViewlead = () => {
    var url=`${url1}/api/employeedashboard/lead`
    const [value,setvalue]=useState()
    const [ids,setid]=useState()
    const navigate = useNavigate();
    

    
    
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
 <EmployeeDashboard/>
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
