import React from 'react'
import { Link } from 'react-router-dom'

const PrivateRouteBanner = ({title, path}) => {

  return (
    <div className='bg-pageBanner bg-no-repeat bg-center bg-cover rounded-xl'>
    <div className='bg-gradient-to-r from-gray-900 via-transparent to-gray-900 rounded-xl px-6 md:px-14'>
    <div className='flex items-center h-[200px] md:h-[300px] lg:h-[400px] '>
    <h1 className='text-4xl md:text-5xl font-medium text-white'> {title} </h1>
    </div>
     <div className='flex justify-center'>
     <div className="border-b-[42px] border-b-primery border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent h-0 w-[300px] text-xl text-white"> <h1 className=' flex justify-center  mt-1'><Link to='/'>Home/</Link>{path}</h1> </div>
     </div>
    </div>
</div>
  )
}

export default PrivateRouteBanner