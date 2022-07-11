import React, { useState } from 'react'
import { AppBar, Button, Box, Badge } from '@mui/material';
import { ShoppingBasket, HistoryEdu, AddCard, AdminPanelSettingsSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
let s = 0, c = 0

const NavBar = () => {
  const [page, setPage] = useState('shop');
  const navigate = useNavigate();
  let isAdmin = true
  // let isAdmin = false
  useEffect(() => {
    navigate('/shop')
  }, [])

  return (
    <AppBar color='transparent' position='static'>
      <Box sx={{ml: '2%'}}>
        {[['shop', null], ['shopping cart', <Badge badgeContent={s} color='warning'><ShoppingBasket /></Badge>], ['history', <HistoryEdu />],
         ['coupons', <Badge badgeContent={c} color='warning'><AddCard/></Badge>]].map(item =>
          <Button
            key={item[0]}
            startIcon={item[1]}
            onClick={() => {
              setPage(item[0]);
              navigate(('/' + item[0]).replace(/\s/g, ''));
              s++;
              c++;
            }}
            sx={{background: page === item[0] ? 'lightblue' : '', ml: 1}}
          >
            {item[0]}
          </Button>
        )}
        {isAdmin === true && 
          <Button
            startIcon={<AdminPanelSettingsSharp />}
            onClick={() => {
              setPage('admin');
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
    
