import React, { useState } from 'react';
import {Button, Grid, Box, Typography, Card, CardMedia, CardContent, CardActions, TextField } from '@mui/material';
import { goods } from '../goods';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { v4 } from 'uuid';

const Coupons = () => {
  const [gogoods, setGogoods] = useState(goods.map(item => {return {...item, code: v4()}}))
  // (goods.map(item => {return {...item, code: v4()}}))
  return (
    <Box sx={{border: '2px solid darkgray', borderRadius: 2, height: '87.6vh', overflow: 'auto', p: 1, mt: 1.5}}>
      <Grid container rowSpacing={1} columnSpacing={{sm: 1, md: 2}}>
        {gogoods.map(item =>
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{border: '2px solid darkgray', borderRadius: 2, p: 1, height: '92%'}}>
              <CardMedia
                image={item.poster}
                alt={item.name}
                tittle={item.name}
                sx={{height: 180, borderRadius: 1.5}}
              />
              <CardContent>
                <Typography variant='h6' color='primary'>Coupone code:</Typography>
                <Box sx={{border: '1px solid darkgray', borderRadius: 1, p: 1}}>
                  <Typography variant='body1'>{item.code}</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <CopyToClipboard text={item.code}>
                  <Button
                    sx={{ml: 'auto'}}
                    variant='contained'
                    onClick={() => setGogoods(gogoods.filter(it => it.id !== item.id))}
                  >
                    copy
                  </Button>
                </CopyToClipboard>
              </CardActions>
            </Card>
          </Grid>    
        )}    
      </Grid>
    </Box>
  )
}

export default Coupons