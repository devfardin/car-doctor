import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id, title, img, price } = service
    return (
        <div>
            <div className='border rounded-lg p-4 space-y-2'>
                <img className='rounded-lg w-full h-[230px] object-cover' src={img} alt="" />
                <h1 className='text-2xl text-black1 font-semibold'>{title}</h1>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-medium text-primery'>Price: ${price}</h1>
                    <Link to={`/service-details/${_id}`}>  <HiOutlineArrowRight className='text-xl text-primery '> </HiOutlineArrowRight>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Service