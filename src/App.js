import React from 'react'
import ReactDOM from 'react-dom'
import { Category } from './components/Category'
import { GlobalStyles } from './styles/GlobalStyles'

import { Logo } from './components/Logo'



import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar'

export const App = () =>{

   return  ( <BrowserRouter>
       <GlobalStyles />
       <Router />
<NavBar />
     </BrowserRouter>
  )
 }





