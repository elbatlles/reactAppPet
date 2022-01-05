import { useQuery, gql } from '@apollo/client'
const GET_FAVS = gql`
query getFavs {
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}
`
export const useGetFavorites = id => {
  const { loading, data, error } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network'
  })
  return { loading, data, error }
}
