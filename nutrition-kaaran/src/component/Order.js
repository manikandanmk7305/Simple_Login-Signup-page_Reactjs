import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Order = () => {
    const navigate=useNavigate()
  return (
    <div>
        order confirmation page
        <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}
