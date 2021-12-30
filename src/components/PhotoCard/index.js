import React, { useEffect, useRef, useState } from 'react'
import { Article, Button, Img, ImgWrapper } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/userLocalStorage'
import { userNearScreen } from '../../hooks/userNearScreen'

const DEFAULT_IMAGE='https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'



export const PhotoCard = ({id,likes=0,src=DEFAULT_IMAGE })  =>{

const keyPhoto= `like-${id}`
const [liked,setLiked] = useLocalStorage(keyPhoto,false)
const [show,element] = userNearScreen()


  const Icon = liked===false ? MdFavorite : MdFavoriteBorder

  return (
   <Article ref={element}>
     {show &&  <>  <a href={`/detail/${id}`}
     >
       <ImgWrapper>
         <Img src={src} alt={src}/>
       </ImgWrapper>
     </a>  <Button  key={keyPhoto}

       onClick={() => setLiked(!liked)}>   <Icon size='32px' /> {likes} likes!{likes} </Button></>}
   </Article>
  )
}

export default PhotoCard
