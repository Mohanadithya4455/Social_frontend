import { Avatar, Button, Card } from '@mui/material'
import React from 'react'
import BasicModal from './profileModel'

const Profile = () => {
  return (
    <div className='p-8 h-full w-full'>
      
      <Card className='card p-8 flex flex-col space-y-4'>
      <div className='flex gap-2 items-center'>
        <div className='py-3'>
          <Avatar className=''/>
        </div>
        <div>
        <p className='text-sm'>Mohan Adithya</p>
        <p className='text-sm'>aadhirankireddy@gmail.com</p>
        </div>
        </div>
        <div className='flex gap-5'>
          <div className='flex flex-col gap-1'>
          <p className='text-[1.0rem]'>Followers</p>
          <p>30</p>
          </div>
          <div className='flex flex-col gap-1'>
          <p className='text-[1.0rem]'>Followings</p>
          <p>30</p>
          </div>
          <div className='flex flex-col gap-1'>
          <p className='text-[1.0rem]'>Posts</p>
          <p>30</p>
          </div>
        </div>
        <div>
         <BasicModal/>
        </div>
        
      </Card> 
      
        
      
    
    </div>
  )
}

export default Profile
