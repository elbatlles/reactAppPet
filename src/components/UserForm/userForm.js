import useInputValue from '../../hooks/useInputValue'

import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import allActions from '../../actions'
export const UserForm = () => {
  const form = useRef(null)

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const formEntries = Object.fromEntries(formData)
    console.log(formEntries)

  }
  const [email, setEmail] = useInputValue()
  const [password, setPassword] =  useInputValue()


  const dispatch = useDispatch()
  function onSubmit (e) {
    e.preventDefault()
    dispatch(allActions.userActions.login())
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Email"
        name="email"
        {...email}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        {...password}
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  )
}
