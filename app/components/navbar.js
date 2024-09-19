import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const {user, googleSignIn, logOut} = UserAuth();
    const [loading, setLoading] = useState(true)

    const handleSignIn = async () => {
        try{
            await googleSignIn();
        } catch (error){
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try{
            await logOut();
        } catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50))
            setLoading(false)
        }
        checkAuthentication();
    })
  return (
    <div className='h-20 w-full border-b-2 flex items-center justify-between p-2 '>
        <ul className='flex'>
            <li className='p-2 cursor-pointer'>
                <Link href={'/'}>Home</Link>
            </li>
            {!user ? null : (<li className='p-2 cursor-pointer'>
                <Link href={'/profile'}>Profile</Link>
            </li>)}
            <li className='p-2 cursor-pointer'>
                <Link href={'/about'}>About</Link>
            </li>
        </ul>

        {loading ? null : !user ? (<ul className='flex'>
            <li onClick={handleSignIn} className='p-2 cursor-pointer ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100'>
                Login
            </li>
            <li onClick={handleSignIn} className='cursor-pointer p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600'>
                Sign up
            </li>
        </ul>):(<div>
            <p>Welcome, {user.displayName}</p>
            <p onClick={handleSignOut} className='cursor-pointer '>Sign out</p>
        </div>)}
        
    </div>




  )
}

export default Navbar