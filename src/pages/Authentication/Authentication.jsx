import { Card, Grid } from '@mui/material'
import React from 'react'
import Login from './Login'
import Registration from './Registration'

import { Route, Routes } from 'react-router-dom'

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={7}>
          <img className='overflow-hidden h-screen' src="https://cdn.pixabay.com/photo/2022/10/23/12/50/trees-7541217_640.jpg"/>
        </Grid>
        <Grid item xs={5}>
           <div className='p-20 flex flex-col items-center justify-center h-full'>
            <Card className='p-8 card'>
            <div className='flex flex-col items-center px-5'>
                  <h2 className='font-semibold py-2'>Aditya Social</h2>
                  <p className='text-sm'>Try not to become a man of success, but rather become a man of value. —Albert Einstein</p>
                 </div>
                 <div className='px-5'>
                    <Routes>
                      <Route path='/' element={<Login/>}/>
                      <Route path='/login' element={<Login/>}/>
                      <Route path = '/register' element={<Registration/>}/>
                      </Routes>
                 </div>
            </Card>
                
           </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Authentication
