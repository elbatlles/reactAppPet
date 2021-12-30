import React from 'react'
import PhotoCard from '../PhotoCard'

import { useQuery, gql } from"@apollo/client"
import { usePhotos } from '../../hooks/usePhotos'

const ListOfPhotoCards = ({categoryId}) => {
//  const { loading, error, data } = useQuery(getPhotos, categoryId)
 // const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId: categoryId } })
  const [ loading, error, data] =usePhotos(categoryId)

  if(loading) return null
  return (
    <ul>
      {data.photos.map(photo =>(<PhotoCard key={photo.id}  {...photo} />))}
    </ul>
  )
}

export default ListOfPhotoCards

