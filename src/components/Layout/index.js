import React from 'react'
import { Logo } from '../Logo'
import { GlobalStyles } from '../../styles/GlobalStyles'
import { NavBar } from '../NavBar'
import { Helmet } from 'react-helmet'
import { Div, Subtitle, Title } from './styles'

export const Layout =({children, title, subtitle}) =>{

  return <>



    <Helmet>
      {title && <title>{title} | Petgram 🐶</title>}
      {subtitle && <meta name='description' content={subtitle} /> }
    </Helmet>
    <Logo />
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {children}
    <NavBar />

  </>
}
