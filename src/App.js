import React from 'react'
import ReactDOM from 'react-dom'
import { Category } from './components/Category'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOFCategories'
import PhotoCard from './components/PhotoCard'
import ListOfPhotoCards from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/PhotoCardWithQuery'

export const App = () =>{
const urlParams = new URLSearchParams(location.search)
  const detailID= urlParams.get('detail')
  console.log(detailID)

   return  (<>
     <Logo />
     <GlobalStyles />

       {
         detailID ?  <PhotoCardWithQuery id={detailID} />:
           <>
             <ListOfCategories />

             <ListOfPhotoCards categoryId={2} />
           </>
       }
</>
  )
 }





