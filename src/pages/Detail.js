import React  from 'react'
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'

export const Detail = () => {
  const { id } = useParams()
  return  (
    <Layout title={`Fotografía ${id}`}>
  <PhotoCardWithQuery  id={id}/>
    </Layout>
  )


}
