import { useMutation, gql } from '@apollo/client'
const MutationLikePhoto = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const useLike = (id) => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(MutationLikePhoto)
  return { mutation, mutationLoading, mutationError }
}
