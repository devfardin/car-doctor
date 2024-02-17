import React from 'react'
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';


const Banner = () => {

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full  h-[550px] ">
                <img src="https://i.ibb.co/B37wfkj/5.jpg" className="w-full rounded-lg object-cover  " />
                {/* <img src="https://i.ibb.co/BKdgP8v/3.jpg" className="w-full  h-[500px]" /> */}
                <div className='absolute  flex justify-start items-center  h-full  top-0 px-7 lg:pl-20 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 w-full rounded-lg'>
                   <div className=''>
                   <h1 className='text-5xl md:text-6xl font-semibold text-white md:w-[80%] lg:w-[40%]'> Affordable Price For Car Servicing</h1>
                   <p className='text-lg mt-4 font-normal text-white md:w-[60%] lg:w-1/2 '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                   <button className='bg-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md'>Discover More</button>
                   <button className='border border-whtie ml-4 hover:bg-primery hover:border-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md duration-300'>Latest Project </button>
                   
                   </div>
                </div>
                <div className="absolute flex justify-end right-10 bottom-10 gap-x-3">
                <a href="#slide6" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowLeft></HiOutlineArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowRight></HiOutlineArrowRight></a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full  h-[550px] ">
                <img src="https://i.ibb.co/jZcX42t/6.jpg" className="w-full rounded-lg object-cover  " />
                <div className='absolute  flex justify-start items-center  h-full  top-0 pl-8 lg:pl-20 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 w-full rounded-lg'>
                   <div className=''>
                   <h1 className='text-5xl md:text-6xl font-semibold text-white md:w-[80%] lg:w-[40%]'> Affordable Price For Car Servicing</h1>
                   <p className='text-lg mt-4 font-normal text-white md:w-[60%] lg:w-1/2 '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                   <button className='bg-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md'>Discover More</button>
                   <button className='border border-whtie ml-4 hover:bg-primery hover:border-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md duration-300'>Latest Project </button>
                   
                   </div>
                </div>
                <div className="absolute flex justify-end right-10 bottom-10 gap-x-3">
                <a href="#slide1" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowLeft></HiOutlineArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowRight></HiOutlineArrowRight></a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full  h-[550px] ">
                <img src="https://i.ibb.co/TLk1hqw/4.jpg" className="w-full rounded-lg object-cover  " />
                <div className='absolute  flex justify-start items-center  h-full  top-0 pl-8 lg:pl-20 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 w-full rounded-lg'>
                   <div className=''>
                   <h1 className='text-5xl md:text-6xl font-semibold text-white md:w-[80%] lg:w-[40%]'> Affordable Price For Car Servicing</h1>
                   <p className='text-lg mt-4 font-normal text-white md:w-[60%] lg:w-1/2 '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                   <button className='bg-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md'>Discover More</button>
                   <button className='border border-whtie ml-4 hover:bg-primery hover:border-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md duration-300'>Latest Project </button>
                   
                   </div>
                </div>
                <div className="absolute flex justify-end right-10 bottom-10 gap-x-3">
                <a href="#slide2" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowLeft></HiOutlineArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowRight></HiOutlineArrowRight></a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full  h-[550px] ">
                <img src="https://i.ibb.co/BKdgP8v/3.jpg" className="w-full rounded-lg object-cover  " />
                <div className='absolute  flex justify-start items-center  h-full  top-0 pl-8 lg:pl-20 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 w-full rounded-lg'>
                   <div className=''>
                   <h1 className='text-5xl md:text-6xl font-semibold text-white md:w-[80%] lg:w-[40%]'> Affordable Price For Car Servicing</h1>
                   <p className='text-lg mt-4 font-normal text-white md:w-[60%] lg:w-1/2 '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                   <button className='bg-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md'>Discover More</button>
                   <button className='border border-whtie ml-4 hover:bg-primery hover:border-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md duration-300'>Latest Project </button>
                   
                   </div>
                </div>
                <div className="absolute flex justify-end right-10 bottom-10 gap-x-3">
                <a href="#slide3" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowLeft></HiOutlineArrowLeft></a>
                    <a href="#slide5" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowRight></HiOutlineArrowRight></a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full  h-[550px] ">
                <img src="https://i.ibb.co/rw7kCC9/2.jpg" className="w-full rounded-lg object-cover  " />
                <div className='absolute  flex justify-start items-center  h-full  top-0 pl-8 lg:pl-20 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 w-full rounded-lg'>
                   <div className=''>
                   <h1 className='text-5xl md:text-6xl font-semibold text-white md:w-[80%] lg:w-[40%]'> Affordable Price For Car Servicing</h1>
                   <p className='text-lg mt-4 font-normal text-white md:w-[60%] lg:w-1/2 '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                   <button className='bg-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md'>Discover More</button>
                   <button className='border border-whtie ml-4 hover:bg-primery hover:border-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md duration-300'>Latest Project </button>
                   
                   </div>
                </div>
                <div className="absolute flex justify-end right-10 bottom-10 gap-x-3">
                <a href="#slide4" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowLeft></HiOutlineArrowLeft></a>
                    <a href="#slide6" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowRight></HiOutlineArrowRight></a>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full  h-[550px] ">
                <img src="https://i.ibb.co/41ydfRw/1.jpg" className="w-full rounded-lg object-cover  " />
                <div className='absolute  flex justify-start items-center  h-full  top-0 pl-8 lg:pl-20 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 w-full rounded-lg'>
                   <div className=''>
                   <h1 className='text-5xl md:text-6xl font-semibold text-white md:w-[80%] lg:w-[40%]'> Affordable Price For Car Servicing</h1>
                   <p className='text-lg mt-4 font-normal text-white md:w-[60%] lg:w-1/2 '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                   <button className='bg-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md'>Discover More</button>
                   <button className='border border-whtie ml-4 hover:bg-primery hover:border-primery mt-5 text-lg text-white font-medium py-3 px-4 md:px-7 rounded-md duration-300'>Latest Project </button>
                   
                   </div>
                </div>
                <div className="absolute flex justify-end right-10 bottom-10 gap-x-3">
                <a href="#slide5" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowLeft></HiOutlineArrowLeft></a>
                    <a href="#slide1" className="btn btn-circle bg-[#FFFFFF33] border-[#FFFFFF33] hover:bg-primery hover:border-primery text-white text-xl"><HiOutlineArrowRight></HiOutlineArrowRight></a>
                </div>
            </div>

            
           
            
        </div>
    )
}

export default Banner