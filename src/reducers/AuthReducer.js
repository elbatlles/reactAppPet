const currentUser = (state = {}, action) => {
  switch(action.type){
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        loggedIn: true
      }
    case "LOG_OUT":
      return {
        ...state,
        user: {},
        loggedIn: false
      }
    case "@user/isAuth":
      return {
        ...state,
        user: {},
        loggedIn: true
      }
      case "@user/login":
      return {
        ...state,
        user: {},
        loggedIn: true
      }


    default:
      return state
  }
}

export default currentUser;
