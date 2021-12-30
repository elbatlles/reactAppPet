import React from 'react'
import { Logo } from '../Logo'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { NavBar } from '../NavBar'

export const Layout =({children}) =>{

  return <>
    <Logo />
    <GlobalStyles />
    {children}
    <NavBar />
  </>
}
