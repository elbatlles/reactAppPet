
import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Button } from './style'

export const FavButton =({liked,likes,onClick}) =>{
  const Icon = liked===false ? MdFavorite : MdFavoriteBorder
  return  <Button

                   onClick={() => onClick(!liked)}>   <Icon size='32px' /> {likes} likes!{likes} </Button>
}
