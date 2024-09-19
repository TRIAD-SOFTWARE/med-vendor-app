import React from 'react'
import Image from 'next/image'
import loader from './loading.gif'

const Spinner = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <Image src={loader} alt='Loading...'/>
    </div>
  )
}

export default Spinner