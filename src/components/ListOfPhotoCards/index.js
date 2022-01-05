import React from 'react'
import PhotoCard from '../PhotoCard'

import { useQuery, gql } from"@apollo/client"
import { usePhotos } from '../../hooks/usePhotos'
import { Ul } from './style'

const ListOfPhotoCards = ({categoryId}) => {
//  const { loading, error, data } = useQuery(getPhotos, categoryId)
 // const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId: categoryId } })
  const [ loading, error, data] =usePhotos(categoryId)

  if(loading) return null
  return (
    <Ul>
      {data.photos.map(photo =>(<PhotoCard key={photo.id}  {...photo} />))}
    </Ul>
  )
}

export default ListOfPhotoCards

