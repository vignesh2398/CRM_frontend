import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export const EmployeeDashboard = () => {
   
    const navigate = useNavigate();
   
      const logout=()=>{
        sessionStorage.clear();
        navigate('/')
      }

    return (
        <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
     
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/employeeviewservice">View Service</a>
            <a class="nav-item nav-link active" href="/employeeViewLead">View Lead</a>
            <a class="nav-item nav-link active" href="/employeeViewContacts">View Contact</a>
          </div>
        </div>
        <form class="form-inline">
        <button class="btn btn-outline-Danger my-2 my-sm-0" onClick={logout}>Logout</button>
      </form>
      </nav></div>
      )
}
