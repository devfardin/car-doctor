import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center h-full my-5'>
      <div className='text-center'>
      <img src='https://i.ibb.co/gtkFsxM/Frame-1.png' alt="" />
      <Link className='border p-3 bg-primery text-white text-xl font-medium rounded-lg' to='/'> Back to Home</Link>
      </div>
    </div>
  )
}

export default ErrorPage