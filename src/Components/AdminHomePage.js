import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url1 } from '../App'


export const AdminHomePage = () => {
 // var url=`${url1}/api/admindashboard/contact`
  const navigate = useNavigate();
 /* useEffect(()=>{
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
  },[])*/
  const logout=()=>{
    sessionStorage.clear();
    navigate('/')
  }
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
 
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="/admindashboardaddingservicerequest">Add Service</a>
        <a class="nav-item nav-link active" href="/admindashboardgetservicerequest">View Service</a>
        <a class="nav-item nav-link active" href="/addlead">Add Lead</a>
        <a class="nav-item nav-link active" href="/ViewLead">View Lead</a>
        <a class="nav-item nav-link active" href="/AddContact">Add Contact</a>
        <a class="nav-item nav-link active" href="/ViewContacts">View Contact</a>
      </div>
    </div>
    <form class="form-inline">
    <button class="btn btn-outline-Danger my-2 my-sm-0" onClick={logout}>Logout</button>
  </form>
  </nav></div>
  )
}
