import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Coupons from '../pages/Coupons';
import History from '../pages/History';
import Admin from '../pages/Admin';
import Shop from '../pages/Shop';
import ShoppingCart from '../pages/ShoppingCart';

const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Shop />} /> */}
      {/* <Route path="/sign_up" element={<Auth />} />
      <Route path="/sign_in" element={<Auth />} /> */}
      <Route path='/shop' element={<Shop />} />
      <Route path='/shoppingcart' element={<ShoppingCart />} />
      <Route path='/history' element={<History />} />
      <Route path='/coupons' element={<Coupons />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='*' element={<Shop />} />
    </Routes>
  )
}

export default AppRouter;