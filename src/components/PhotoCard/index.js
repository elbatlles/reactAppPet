import React, { useEffect, useRef, useState } from 'react'
import { Article,  Img, ImgWrapper } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/userLocalStorage'
import { userNearScreen } from '../../hooks/userNearScreen'
import { FavButton } from '../FavButton'
import { useLike } from '../../hooks/useLike'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE='https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'



export const PhotoCard = ({id,likes=0,src=DEFAULT_IMAGE })  =>{

const keyPhoto= `like-${id}`
const [liked,setLiked] = useLocalStorage(keyPhoto,false)
const [show,element] = userNearScreen()
const { mutation, mutationLoading, mutationError } = useLike()
  const Icon = liked===false ? MdFavorite : MdFavoriteBorder
const handleFavClick=() =>{
  console.log(id)
  !liked && mutation({
    variables: {
      input: { id }
    }
  })
setLiked(!liked)
}
  return (
   <Article ref={element}>
     {show &&  <>  <Link to={`/detail/${id}`}
     >
       <ImgWrapper>
         <Img src={src} alt={src}/>
       </ImgWrapper>
     </Link>
     <FavButton liked={liked} onClick={()=>handleFavClick()} likes={likes}/>
     </>}
   </Article>
  )
}

export default PhotoCard
