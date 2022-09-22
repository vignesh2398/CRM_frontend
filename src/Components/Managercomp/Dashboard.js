import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url1 } from '../../App';

export const Dashboard = () => {
    var url=`${url1}/api/managerdashboard/servicerequest`
    const navigate = useNavigate();
   
      const logout=()=>{
        sessionStorage.clear();
        navigate('/')
      }

    return (
        <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
     
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/managerdashboardaddingservicerequest">Add Service</a>
            <a class="nav-item nav-link active" href="/managerdashboardgetservicerequest">View Service</a>
            <a class="nav-item nav-link active" href="/manageraddlead">Add Lead</a>
            <a class="nav-item nav-link active" href="/managerViewLead">View Lead</a>
            <a class="nav-item nav-link active" href="/managerAddContact">Add Contact</a>
            <a class="nav-item nav-link active" href="/managerViewContacts">View Contact</a>
          </div>
        </div>
        <form class="form-inline">
        <button class="btn btn-outline-Danger my-2 my-sm-0" onClick={logout}>Logout</button>
      </form>
      </nav></div>
      )
}
