
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import React, { useEffect, useState } from 'react'

import { BrowserRouter,  Routes,Route } from 'react-router-dom'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { NotRegistered } from '../pages/NotRegistered'
import { connect, useDispatch, useSelector } from 'react-redux'
import allActions from '../actions'

export  const Router = () => {
//  const counter = useSelector(state => state.counter)
 //const currentUser = useSelector(state => state?.isAuth)
  const currentUser = useSelector(state => state)
  const dispatch = useDispatch()

  console.log(currentUser)
  console.log("oli")
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
 // dispatch(allActions.userActions.isAuth())

  }, [])

  useEffect(() => {
    const getuser = () => {

      console.log(currentUser)
      setIsLogged(currentUser.loggedIn)
    }

    getuser()
  }, [currentUser])


  return   <Routes>
    <Route exact path='/' element={<Home  />} />
    <Route path='/pet/:id' element={<Home  />} />
    <Route path='/detail/:id' element={<Detail  />} />
    <Route path='/favs' element={isLogged ? <Favs /> : <NotRegistered />} />
    <Route path='/user' element={isLogged ? <User /> : <NotRegistered />} />
  </Routes>
}
