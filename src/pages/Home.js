import React from 'react'
import { ListOfCategories } from '../components/ListOFCategories'
import ListOfPhotoCards from '../components/ListOfPhotoCards'
import { useParams } from 'react-router-dom'


export const Home = ( ) => {
  const { id } = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}

