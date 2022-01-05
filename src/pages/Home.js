import React, { memo } from 'react'
import { ListOfCategories } from '../components/ListOFCategories'
import ListOfPhotoCards from '../components/ListOfPhotoCards'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'


export const HomeComponent = ( ) => {
  const { id } = useParams()
  return (
    <>
      <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
        </Layout>
    </>
  )
}

export const Home = memo(HomeComponent, (prevProps,props) =>{
  const { id } = useParams()
  return prevProps.id === props.id
})
