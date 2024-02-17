import React, { useEffect, useState } from 'react'
import Service from './Service'

export const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(Services => setServices(Services))
    }, [])


    return (
        <div id='service'>
            <div className='mb-10'>
                <h1 className='text-xl md:text-lg lg:text-xl font-bold text-primery mb-3 text-center'>Service</h1>
                <h1 className='text-4xl md:text-3xl lg:text-5xl text-center font-semibold text-black'>Our Service Area</h1>
                <p className='text-base text-textColor text-center w-1/2 mx-auto font-normal py-3 md:hidden lg:flex'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service key={service._id} service={service}> </Service>)
                }

            </div>
        </div>
    )
}
