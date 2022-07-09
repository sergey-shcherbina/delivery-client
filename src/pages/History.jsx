import React from 'react';
import { TextField, Grid, Box, Typography, Card, CardMedia, CardContent} from '@mui/material';
import { goods } from '../goods';
let a = 999

const History = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid darkgray', borderRadius: 2, height: '90vh', mt: 1.5}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
        border: '2px solid darkgray', borderRadius: 2, height: '25vh',width: '96%', mt: 1.5}}>
        <TextField id='outlined-basic' label='Email' variant='outlined' sx={{minWidth: '50%', mb: 1}} />
        <TextField id='outlined-basic' label='Phone' variant='outlined' sx={{minWidth: '50%', mt: 1}} />
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid darkgray', borderRadius: 2, height: '58vh',width: '96%', mt: 2, overflow: 'auto'}}>
        {goods.slice(0, 5).map(elem => 
          <Grid container key={elem.id} sx={{border: '2px solid darkgray', borderRadius: 2, m: 1, width: '98%'}}>
            {goods.slice(5, 9).map(item => 
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card sx={{display: 'flex', border: '2px solid darkgray', borderRadius: 2, p: 1, height: '80%', m: 1}}>
                  <CardMedia 
                    image={item.poster}
                    alt={item.name}
                    tittle={item.name}
                    sx={{height: 152, borderRadius: 1.5, width: '55%'}}
                  /> 
                  <CardContent>
                    <Typography variant='h6' color='primary'>{item.name}</Typography>
                    <Typography variant='body1' color='primary'>Price: {item.price} $</Typography>
                  </CardContent> 
                </Card>
              </Grid>
            )}
            <Grid item  xs={12} sm={6} md={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Typography variant='h4' color='primary'>{`Total price: ${a}$`}</Typography>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  )
}

export default History