import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import PageBanner from '../Components/PageBanner'
import { HiOutlineArrowRight } from 'react-icons/hi';
import { BsFileArrowUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
  const services = useLoaderData()
  const { id } = useParams()
  const service = services.find(service => service._id == id)
  const {_id, title, img, price, description, facility } = service

  return (
    <div>
      <PageBanner title='Service Details' path='Service Details'></PageBanner>
      <div className='flex flex-col lg:flex-row justify-between gap-x-10 '>
        <div className='flex-1'>
          <div className='mt-20'>
            <img className='rounded-lg w-full md:h-[300px] lg:h-[450px] object-cover' src={img} alt="" />
            <h1 className='text-3xl font-semibold text-black1 mt-5'>{title}</h1>
            <p className='text-base mt-3 font-normal text-textColor '>{description}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5'>
              {
                facility.map(facility => <div className='bg-sectionbg border-t-2 rounded-lg border-primery p-8'>
                  <h1 className='text-xl font-medium text-black1'>{facility.name}</h1>
                  <h1 className='text-base font-normal text-textColor mt-2'>{facility.details}</h1>
                </div>)
              }
            </div>
          </div>
        </div>
        <div className='w-full md:w-48 lg:w-80 mt-20'>
          <div className='bg-sectionbg p-6 rounded-lg
        '>
            <h1 className='text-2xl font-semibold text-black1 mb-4'>Services</h1>
            {
              services.map(service => <div className=' hoverContainer flex items-center justify-between hover: bg-white active:bg-primery p-4 rounded-lg text-lg font-semibold mb-3 hover:bg-primery duration-300 hover:text-white'> <h1>{service.title}</h1> <Link to={`/service-details/${service._id}`}>  <HiOutlineArrowRight className='text-xl servicesingleitms text-primery hover:text-white duration-200'> </HiOutlineArrowRight> </Link>
              </div>)
            }


          </div>
          <div className='bg-[#151515] mt-6 p-6 rounded-lg'>
            <h1 className='text-2xl font-semibold text-white mb-4'>Download</h1>
            <div className='flex justify-between items-center gap-6 text-white'>
              <div className='flex gap-x-3 items-center'>
                <BsFileArrowUp className='text-2xl'> </BsFileArrowUp>
                <div>
                  <h1 className='text-xl font-semibold mb-0'>Our Brochure</h1>
                  <h1 className='text-base text-[#A2A2A2] font-normal mt-0'>Download</h1>
                </div>
              </div>

              <div className='w-12 h-12 bg-primery rounded-md  flex justify-center items-center'>
                <Link to={`/service-details/${service._id}`}>  <HiOutlineArrowRight className='text-2xl servicesingleitms text-white  duration-200'> </HiOutlineArrowRight> </Link>
              </div>
            </div>

            <div className='flex justify-between items-center gap-6 text-white mt-7'>
              <div className='flex gap-x-3 items-center'>
                <BsFileArrowUp className='text-2xl'> </BsFileArrowUp>
                <div>
                  <h1 className='text-xl font-semibold mb-0'>Our Brochure</h1>
                  <h1 className='text-base text-[#A2A2A2] font-normal mt-0'>Download</h1>
                </div>
              </div>

              <div className='w-12 h-12 bg-primery rounded-md  flex justify-center items-center'>
                <Link to={`/service-details/${service._id}`}>  <HiOutlineArrowRight className='text-2xl servicesingleitms text-white  duration-200'> </HiOutlineArrowRight> </Link>
              </div>
            </div>

          </div>

          <div className='bg-[#151515] mt-6 p-6 pb-14 rounded-lg'>
            <img className='mx-auto' src="https://i.ibb.co/wMdyGTr/Group-2.png" alt="" />
            <h1 className='text-xl font-semibold text-white mt-4 text-center'>Need Help? We Are Here
              To Help You</h1>
             <div className='relative'>
             <div className='bg-white p-5 rounded-lg mt-7'>
                <h1 className='text-xl text-center text-black font-semibold'><span className='text-primery'>Car Doctor </span>Special</h1>
                <h1 className='text-lg text-center text-primery mt-2 pb-5 font-semibold'><span className='text-textColor'>Save up to</span> 60% off </h1>
              </div>

                <div className='absolute -bottom-3 left-16'>
                  <Link  className='text-lg rounded-lg text-white font-medium px-4 py-3 bg-primery'>Get A Quote</Link>
                </div>
             </div>

          </div>
          {/* Last Item */}
          <div>
            <h1 className='text-2xl text-black font-semibold mt-6 mb-2'>Price ${price}</h1>
            <Link to={`/check-out/${_id}`}  className='text-lg w-full block text-center rounded-lg text-white font-medium px-4 py-3 bg-primery'>Proceed Checkout</Link>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ServiceDetail