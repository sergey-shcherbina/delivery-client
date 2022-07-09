import { TextField, Button, Grid, Box, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import React, { useState } from 'react';
import { goods } from '../goods';
// position: 'relative'

const ShoppingCart = () => {
  let a = 999
  // const [shop, setShop] = useState('')
  return (
    <>
    <Box sx={{display: {xs:'block', sm: 'flex'}, justifyContent: {xs: '', sm: 'space-between'}, mt: 1.5}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid darkgray', borderRadius: 2, height: '90vh', width: {xs: '99%', sm: '49%'}}}>
        <Card sx={{height: '50%', border: '2px solid darkgray', borderRadius: 2, width: '95%', mt: 1}}>
        
        </Card> 
        <Box sx={{display: 'flex', flexDirection: 'column', overflow: 'auto', width: '95%'}}>
          <TextField id='outlined-basic' label='Name' variant='outlined' sx={{mt: 2}} />
          <TextField id='outlined-basic' label='Email' variant='outlined' sx={{mt: 2}} />
          <TextField id='outlined-basic' label='Phone' variant='outlined' sx={{mt: 2}} />
          <TextField id='outlined-basic' label='Address' variant='outlined' sx={{mt: 2}} />
        </Box>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', width: {xs: '100%', sm: '49%'}, height: '90vh', mt: {xs: 1, sm: 0}}}>
        <Box sx={{border: '2px solid darkgray', borderRadius: 2, height: '64vh', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {goods.map(item =>
            <Grid container  rowSpacing={1} columnSpacing={2}key={item.id} sx={{border: '2px solid darkgray', borderRadius: 2, width: '95%', m: 1}}>
              <Grid item xs={12} sm={12} md={6} sx={{p: 1}}>
                <CardMedia 
                  image={item.poster}
                  alt={item.name}
                  tittle={item.name}
                  sx={{height: 180, borderRadius: 1.5}}
                />  
              </Grid>
              <Grid item sm={12} md={6} sx={{mt: 2}}>
                <CardContent>
                  <Typography variant='h5' color='primary'>{item.name}</Typography>
                  <Typography variant='h6' color='primary'>Price: {item.price} $</Typography>
                </CardContent>
                <CardActions>
                <TextField
                  id="outlined-number"
                  label="amount"
                  type="number"
                />
                  </CardActions>
              </Grid>
            </Grid>
          )};
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 2}}>
          <TextField id='outlined-basic' label='coupon code' variant='outlined' sx={{width: '40%'}} />
          <TextField id='outlined-basic' label='captcha' variant='outlined' sx={{width: '40%'}} />
        </Box>
        <Box sx={{display: {xs: 'block', sm: 'flex'}, justifyContent: {xs:'', sm: 'space-between'}, mt: 1.5}}>
          <Typography variant='h4' color='primary' sx={{ml: '2%', mt: 1}}>{`Total price: ${a} $`}</Typography>
          <Button
            size='large'
            variant='outlined'
            sx={{width: {xs:'100%', sm: '40%'}}}
          >
            Submit
          </Button>
        </Box>
      </Box>       
    </Box>
    </>
  )
}

export default ShoppingCart
           
  
     