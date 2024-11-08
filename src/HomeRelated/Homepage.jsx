import { Grid } from '@mui/material'
import React from 'react'
import SideBar from '../components/SideBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Middlepart from '../components/Middlepart'
import Profile from '../Profile/Profile'
import RightSideBar from '../components/RightSideBar'

const Homepage = () => {
    
    const location = useLocation();
  return (
    <div className='px-20 flex'>
      <Grid container spacing={0}>
        
        <Grid item xs={0} lg={3}>
            <div className='sticky top-0'>
            <SideBar/>
            </div>
        </Grid>
        <Grid lg={location.pathname==='/'?6:6} item className='px-5 flex justify-center' xs={12}>
           <Routes>
            <Route path='/' element={<Middlepart/>}/>
            <Route path='/profile' element = {<Profile/>}/>
            <Route path="/profile/:id" element={<Profile/>}/>
           </Routes>
        </Grid>
        <Grid item lg={3} className='relative'>
            <div className='sticky top-0 w-full'>
            <RightSideBar/>
            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Homepage
