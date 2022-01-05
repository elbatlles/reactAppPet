import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import { SubmitButton } from '../components/SubmitButton'



export const User = () => {
const {removeAuth} =  useContext(AppContext)
  return (
<>

              <h1>User</h1>

              <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
            </>



  );
};
