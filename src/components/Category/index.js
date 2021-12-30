import React from 'react'

const DEFAULT_IMAGE='https://i.imgur.com/dJa0Hpl.jpg'
import { Link ,Image} from './styles'

export const  Category =({cover = DEFAULT_IMAGE,path='#',emoji="?"} ) =>{
  return <Link to={path}> <Image src={cover} />{emoji}</Link>
}
