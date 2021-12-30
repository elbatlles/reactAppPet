import React from 'react'
import ReactDOM from 'react-dom'
import { Category } from './components/Category'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOFCategories'
import PhotoCard from './components/PhotoCard'
import ListOfPhotoCards from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
export const App = () =>{

   return  (<>
     <Logo />
     <GlobalStyles />

     <ListOfCategories />

     <ListOfPhotoCards />
   </>)


}
