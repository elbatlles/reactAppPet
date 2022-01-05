
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import React, { useContext, useEffect, useState,Suspense } from 'react'

import { BrowserRouter,  Routes,Route,Navigate } from 'react-router-dom'
//import { Favs } from ''
import { User } from '../pages/User'
import { NotRegistered } from '../pages/NotRegistered'
import { connect, useDispatch, useSelector } from 'react-redux'
import allActions from '../actions'
import { AppContext } from '../Context/Context'
import { NotFound } from '../pages/NotFound'
//const Favs = React.lazy(() => import ('../pages/Favs'))
const Favs = React.lazy(() => import('../pages/Favs').then(module => ({ default: module.Favs })))
export  const Router = () => {
  const { isAuth } = useContext(AppContext)
//  const counter = useSelector(state => state.counter)
 //const currentUser = useSelector(state => state?.isAuth)
  //const currentUser = useSelector(state => state)
  //const dispatch = useDispatch()


  //const [isLogged, setIsLogged] = useState(false);

/*  useEffect(() => {
 dispatch(allActions.userActions.isAuth())

  }, [])*/
/*
  useEffect(() => {
    const getuser = () => {

      console.log(currentUser)
      setIsLogged(currentUser.loggedIn)
    }

    getuser()
  }, [currentUser])

*/
  return    <Suspense fallback={<div />}><Routes>

    <Route exact path='/' element={<Home  />} />
    <Route path='/pet/:id' element={<Home  />} />
    <Route path='/detail/:id' element={<Detail  />} />
    <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />} />
    <Route exact path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
    <Route exact path='/login' element={!isAuth ? <NotRegistered /> : <Navigate replace to='/' />} />
    <Route path='*' element={<NotFound />} />


  </Routes>
  </Suspense>
}
