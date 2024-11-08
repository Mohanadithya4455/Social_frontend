import React from 'react'
import { Fields } from './Fields'
import { Avatar, Button, Card, Divider, Fade, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const {auth}= useSelector(store=>store)
  const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
   navigate("/logout")
  };
  return (
    <Card className='card h-screen flex flex-col justify-between py-5'>
       <div className='flex flex-col space-y-8'>
         <div className='flex justify-center '>
            <span className='font-bold'>Aditya Social</span>
         </div>
         <div className='space-y-8 px-3'>
            {Fields.map(f=>{
              return <div onClick={()=>navigate(f.path)} className='flex gap-2'>
                {f.icon}
                {f.name}
              </div>

            })}
         </div>
       </div>
       <Divider/>
       <div className='flex justify-between'>
        <div className='px-3 flex gap-2'>
        <div className='flex flex-col'>
            
        <Avatar/>
        </div>
        <div>
            <p className='text-[0.8rem]'>{auth.user?auth.user.firstName:null}</p>
            <p className='text-sm'>{auth.user?auth.user.email:null}</p>
        </div>
       </div>
      <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
       
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </div>
       </div>
    </Card>
  )
}

export default SideBar
