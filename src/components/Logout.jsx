import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();
    const {auth} = useSelector(store=>store)
    console.log("begore logout",auth.user)
        
       // localStorage.removeItem('jwt')
        auth.user=null;
        localStorage.removeItem('jwt')
       console.log(auth.user)
       useEffect(
        ()=>{
          navigate('/')
        },[auth.user]
       )
       
   
    
   
  return (
    <div>
      
    </div>
  )
}

export default Logout
