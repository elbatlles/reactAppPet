import { useState } from 'react'

export const useLocalStorage =(key,initialValue) =>{
  const [storedValue, setValue] = useState(() =>{

    try{
      console.log("aqui")
      console.log(localStorage.getItem(key))
      const item =localStorage.getItem(key)
      return item!==null ? JSON.parse(localStorage.getItem(key)):initialValue
    } catch (e) {
      return initialValue
    }
  })
  const setLocalStorage = value =>{
    console.log(key)
    console.log(value)
    try{
      localStorage.setItem(key,JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }
  return [storedValue,setLocalStorage]
}
