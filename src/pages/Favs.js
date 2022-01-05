import React  from 'react'
import { useGetFavorites } from '../hooks/useFavorites'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export const  Favs = () => {
 const {data,loading}= useGetFavorites()
 console.log(data)
 return (
  <div>

    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
    { loading ? "Cargando":  <ListOfFavs favs={data.favs} />}
    </Layout>
  </div>)
}
