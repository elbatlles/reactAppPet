
import React from 'react'
import { Button, Form, Input, Title } from './style'
import useInputValue from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'


const UserForm = ({ disabled, error, onSubmit, title }) => {
  const  email = useInputValue('')
  const password =  useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
console.log(email)
    console.log(password)
    onSubmit({ email:email.value ,password: password.value  })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='email' {...email} />
        <Input disabled={disabled} type='password' placeholder='password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>

    </>
  )
}

export { UserForm }
