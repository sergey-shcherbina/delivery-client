import React, { useState } from 'react';
import {Button, Grid, Box, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { goods } from '../goods';

const Shop = () => {
  const [shop, setShop] = useState('')

  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 1}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid darkgray', borderRadius: 2, height: '90vh', width: {sm: '24%', xs: '32%'}}}>
        <Typography
          variant='h6'
          color='primary'
          sx={{mt: 1.8}}
        >
          SHOPS:
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', overflow: 'auto', p: 1}}>
        {['cfc', 'coupons', 'mc donalds', 'mc donalds history', 'history', 'shoping cart', 'mc donalds vkusno', 
          'kfc', 'puzata hata', 'burger house', 'buritto', 'bistro', 'sushiya'].map(item =>
          <Button 
            variant='outlined'
            size='large'
            key={item}
            onClick={() => setShop(item)}
            sx={{background: shop === item ? 'lightblue' : '', mt: 1.3}}
          >
            {item}
          </Button>
        )}
        </Box>
      </Box>
      <Box sx={{border: '2px solid darkgray', borderRadius: 2, height: '87.6vh', overflow: 'auto', width: {sm: '72%', xs: '63%'}, p: 1}}>
        <Grid container rowSpacing={1} columnSpacing={{sm: 1, md: 2}}>
          {goods.map(item =>
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <Card sx={{border: '2px solid darkgray', borderRadius: 2, p: 1}}>
                <CardMedia
                  image={item.poster}
                  alt={item.name}
                  tittle={item.name}
                  sx={{height: 180, borderRadius: 1.5}}
                />
                <CardContent>
                  <Typography variant='h6' color='primary'>{item.name}</Typography>
                  <Typography variant='body1' color='primary'>Price: {item.price} $</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{ml: 'auto'}}
                    variant='contained'
                  >
                    add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>    
          )}
        </Grid>
      </Box>
    </Box>
  )
}

export default Shop