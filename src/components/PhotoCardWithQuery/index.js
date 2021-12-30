import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'

const renderProps =({loading, data }) =>{
  if (loading) return <p>Loading</p>

  const { photo  } = data

  return <PhotoCard {...photo} />
}
export const PhotoCardWithQuery = ({ id }) => {
  const { loading, data } = useGetSinglePhoto(id)
 return renderProps({loading,data})
}
