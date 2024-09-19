"use client"
import React, {useEffect, useState} from 'react'
import { UserAuth } from '../context/AuthContext'
import Spinner from '../components/spinner'

const page = () => {
  const {user} = UserAuth()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const checkAuthentication = async () => {
        await new Promise((resolve) => setTimeout(resolve, 50))
        setLoading(false)
    }
    checkAuthentication();
})

  return (
    <div className='p-4'>
      {loading ? (<Spinner/>) : user ? (
        <p>Welcome, {user.displayName} to your profile page.</p>
      ): (<p>Oops! You must be logged in to access this page!</p>)}
    </div>
  )
}

export default page