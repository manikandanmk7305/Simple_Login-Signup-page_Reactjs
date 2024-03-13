import React from 'react'
import { useAuth } from './Auth'

export const Profile = () => {
    const auth=useAuth()
    const handlelogout=()=>{
        auth.logout()
    }
  return (
    <div>
      <br></br>
      welcome {auth.user}<br></br><br></br>
      <button onClick={handlelogout}>logout</button>
    </div>
  )
}
