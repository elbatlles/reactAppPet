import React from 'react'
import { Grid, Image, Link } from './style'
import PropTypes from 'prop-types'

export const ListOfFavs = ({ favs = [] }) => {
 console.log("--")
  console.log(favs.length)
  return <Grid>
    {
    favs.length>0 ?  favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} />
        </Link>
      ) :"Añade un favorito en tu lista"
    }
  </Grid>
}
ListOfFavs.propTypes={
favs:PropTypes.arrayOf(
  PropTypes.shape({
    id:PropTypes.string.isRequired,
    src:PropTypes.string.isRequired
  })
)
}
