import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { url1 } from '../App'


export const Auth = () => {
            var url=`${url1}/api/admindashboard/servicerequest`
            const navigate = useNavigate();
            const refresh=async()=>{

                let token=sessionStorage.getItem('auth-token');
                 try {
                    
                     let res=await axios.get(url,{headers:{"auth-token":token}})
                     console.log(res.data)
                     navigate("")
                     if(res.data)
                     {
     
                     }
                     else{
                         navigate("/")
                     }
                 } catch (error) {
                    navigate("/")
                 }       
            }
            useEffect(()=>{
                refresh();
            },[])

        }
        