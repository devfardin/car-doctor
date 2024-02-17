import React from 'react'

const About = () => {
    return (
        <div className='container mx-auto px-4 flex flex-col md:flex-row md:gap-x-16 justify-between  my-20'>
            <div className="relative mr-0 md:mr-7 lg:mr-8">

                <div>
                    <img className="rounded-lg w-full h-full " src="https://i.ibb.co/6bM8BYd/person.jpg" alt="" />
                </div>

                <div className=" lg:-mt-60 z-10 rounded-lg md:absolute lg:absolute md:bottom-[140px] lg:bottom-0 -right-14 w-full  md:w-[200px] lg:w-[300px] border-8  border-[#fff] border-solid">
                    <img className="w-full md:h-[200px] lg:h-[300px] object-cover  md:rounded-non" src="https://i.ibb.co/R443Dh3/parts.jpg" alt="" />
                </div>

                <p className='text-base text-textColor font-normal py-3 hidden lg:hidden md:flex  md:mt-20'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

            </div>

            <div className='mt-5 md:mt-0'>
                <h1 className='text-xl md:text-lg lg:text-xl font-bold text-primery mb-3'>About Us</h1>
                <h1 className='text-4xl md:text-3xl lg:text-5xl font-semibold text-black'>We are qualified & of experience in this field</h1>
                <p className='text-base text-textColor font-normal py-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-base text-textColor font-normal py-3 md:hidden lg:flex'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <button className='bg-primery mt-5 text-lg text-white font-medium py-3 px-7 rounded-md'>Get More Info</button>

            </div>
        </div>
    )
}

export default About