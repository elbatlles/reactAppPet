import { gql, useQuery } from '@apollo/client'
export const usePhotos =(categoryId) =>{

  const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId: categoryId } })

  return  [ loading, error, data ]
}
