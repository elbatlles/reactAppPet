import React, { useState } from 'react'

const userInputValue = initial => {

  const [ value , setValue ] = useState(initial)

  const onChange = e => setValue(
   e.target.value
  )

  return [
    value,
    onChange
  ]

}

export default userInputValue
