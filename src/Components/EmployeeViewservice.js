import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Fulldetails } from './Fulldetails'
import { Routes,Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { EmployeeDashboard } from './EmployeeDashboard';
import { url1 } from '../App';
export const EmployeeViewservice = () => {
  var url=`${url1}/api/employeedashboard/servicerequest`
    const [value,setvalue]=useState()
    const [ids,setid]=useState()
    const navigate = useNavigate();    
    
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
 <EmployeeDashboard/>
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
