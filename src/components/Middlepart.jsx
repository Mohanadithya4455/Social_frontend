import { Avatar, Card, TextField } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const Middlepart = () => {
  const statusCount = [1,1,1,1,]
  return (
    <div className='flex flex-col pt-3 space-y-4'>
      <section className='flex gap-3'>
        <div className='flex flex-col items-center gap-1'>
        <Avatar sx={{width:"5rem",height:"5rem"}}><AddIcon sx={{fontSize:"3rem"}}/></Avatar>
        <p className='text-sm'>New</p>
        </div>
       <div className='flex gap-3'>
       {statusCount.map(val=>{
          return  <Avatar sx={{width:"5rem",height:"5rem"}}>
            <img className="w-full h-full"src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"/>
          </Avatar>
        })}
       </div>
      </section>
      <Card className='p-2'>
        <div className='flex gap-2'>
        <Avatar/>
        <TextField
      variant="outlined"
      fullWidth
      
      sx={{
        borderRadius: '24px',     
        height: 40,               
        '& .MuiInputBase-root': {
          height: '100%',         
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderRadius: '24px',  
        },
        '& .MuiInputBase-input': {
          padding: '0 14px',      
          fontSize: '14px',       
        },
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: '#888',  
          },
          '&.Mui-focused fieldset': {
            borderColor: '#4a90e2',  
          },
        },
      }}
    />
   </div>
          <div>
           
          </div>
      </Card>
    </div>
  )
}

export default Middlepart
