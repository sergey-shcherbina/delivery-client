import React, { useState } from 'react'
import { AppBar, Button, Box } from '@mui/material';
import { ShoppingBasket, HistoryEdu, AddCard, AdminPanelSettingsSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NavBar = () => {
  const [page, setPage] = useState('shop');
  const navigate = useNavigate();
  // let isAdmin = true
  let isAdmin = false
  useEffect(() => {
    navigate('/shop')
  }, [])

  return (
    <AppBar color='transparent' position='static'>
      {/* <Box sx={{display: 'flex', justifyContent: 'space-between'}}> */}
      <Box sx={{ml: '2%'}}>
        {[['shop', null], ['shopping cart', <ShoppingBasket />], ['history', <HistoryEdu />], ['coupons', <AddCard/>]].map(item =>
          <Button
            key={item[0]}
            startIcon={item[1]}
            onClick={() => {
              setPage(item[0]);
              navigate(('/' + item[0]).replace(/\s/g, ''));
            }}
            sx={{background: page === item[0] ? 'lightblue' : '', ml: 1}}
          >
            {item[0]}
          </Button>
        )}
        {/* </Box> */}
        {isAdmin === true && 
          <Button
            startIcon={<AdminPanelSettingsSharp />}
            onClick={() => {
              setPage('admin');
              // navigate(('/' + 'admin').replace(/\s/g, ''));
              navigate('/admin')
            }}
            sx={{background: page === 'admin' ? 'lightblue' : '', ml: {md: '2%', lg: '49%'}}}
         >
           admin panel
         </Button>
        }
      
      </Box>
    </AppBar>
  )
}
export default NavBar
    
