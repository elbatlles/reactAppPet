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
const login = () => {
  return {
    type: "@user/login"
  }
}
export default {
  setUser,
  logOut,
  isAuth,
  login
}
