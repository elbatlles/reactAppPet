import React from 'react'
import ReactDOM from 'react-dom'
import { Category } from './components/Category'
import { GlobalStyles } from './styles/GlobalStyles'

import { Logo } from './components/Logo'


import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Layout } from './components/Layout'
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
export const App = () =>{

   return  ( <BrowserRouter>
     <Layout>
       <Router />
     </Layout>
     </BrowserRouter>
  )
 }





