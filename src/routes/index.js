
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import React from 'react'
import { BrowserRouter,  Routes,Route } from 'react-router-dom'
export  const Router = () => {
  return   <Routes>
    <Route exact path='/' element={<Home  />} />
    <Route path='/pet/:id' element={<Home  />} />
    <Route path='/detail/:id' element={<Detail  />} />
  </Routes>
}
