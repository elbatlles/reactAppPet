import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allActions from '../actions'
import { UserForm } from '../components/UserForm/userForm'
export const NotRegistered = () => {


  return (<>
    <h1> Not registered</h1>
      <UserForm />

  </>
  )
}
