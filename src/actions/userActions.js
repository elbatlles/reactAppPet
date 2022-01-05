import { useRegisterMutation } from '../hooks/useRegisterMutation'
import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
const graphqlAPI = (query, variables) => fetch("/graphql", {
  method: "POST",
  body: JSON.stringify({ query, variables })
});
export const addBook = createAsyncThunk("add book", ({ title }) =>
  graphqlAPI(`
    mutation ($title: string!){
      add_book(objects: { title: $title }) {
        id
        title
      }
    }
  `, { title })
);
const setUser = (userObj) => {
  return {
    type: "SET_USER",
    payload: userObj
  }
}

const logOut = () => {
  return {
    type: "LOG_OUT"
  }
}
const isAuth = () => {
  return {
    type: "@user/isAuth"
  }
}
const login = async (userform) => {
  console.log(userform)
// const [register,loading,error]= useRegisterMutation(userform)
  try {
    useRegisterMutation({
      variables: {
        input: userform
      },
    })
  } catch (error) {
    console.log(error)
  }
 //   reigster(userform)
    return {
      type: "@user/login",
      payload: userform
    }
  }
  export default {
    setUser,
    logOut,
    isAuth,
    login
  }


