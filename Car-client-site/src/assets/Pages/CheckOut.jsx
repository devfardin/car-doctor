import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageBanner from '../Components/PageBanner';
import { contextProvider } from '../Components/AppContext';


const CheckOut = () => {
    const services = useLoaderData()
    const { id } = useParams()
    const service = services.find(service => service._id == id)
    const {_id, title, img, price, description } = service

    const {user}=useContext(contextProvider)
    const checkOut=(e)=>{
        e.preventDefault()
        const form=e.target;
        const FirstName=form.FirstName.value;
        const service_Name=form.serviceName.value;
        const Service_Time= form.date.value;
        const email=form.Email.value;
        const Message=form.Message.value;
        const checkOutInfo={FirstName, service_Name, Service_Time, email, Message, img, price};

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
             "Content-Type": "application/json",
            },
            body:JSON.stringify(checkOutInfo)

        })
        .then(res => res.json())
        .then(data => {
            if(data?.insertedId){
                Swal.fire(
                    'Booking Confirmed!',
                    "Your booking has been successfully confirmed for the selected date and time. We look forward to serving you.",
                    'success'
                  )
            }
            else{
                Swal.fire(
                    'Booking Failed!',
                    "We're sorry, but we were unable to process your booking request at this time. Please check the information provided and try again. If the issue persists, please contact our customer support for assistance.",
                    'error'
                  )
            }
        })

    }
  return (
    <div>
     <PageBanner title='Check Out' path='Check out'> </PageBanner>
     
    <div className='bg-sectionbg mt-10 md:mt-20 rounded-lg p-6 md:py-10 md:px-8'>
    <div class="rounded-lg md:p-8">
                <form onSubmit={checkOut}>
                    <div class="md:items-center md:flex gap-x-4">
                        <div class="flex-1 ">
                            <input type="text" defaultValue={user?.displayName} name='FirstName' placeholder="First Name" class="block w-full px-5 py-3.5 mt-3 text-gray-700 text-xl placeholder-gray-400 bg-white  rounded-lg focus:outline-none" />
                        </div>

                        <div class="flex-1 ">
                            <input type="text" defaultValue={title} name='serviceName' placeholder="Service Name" class="block w-full px-5 py-3.5 mt-3 text-gray-700 text-xl placeholder-gray-400 bg-white  rounded-lg focus:outline-none" />
                        </div>
                    </div>

                    <div class=" md:items-center md:flex mt-4 gap-x-4">
                        <div class="flex-1">
                            <input type="date" name='date' placeholder="Select Time" class="block w-full px-5 py-3.5 mt-3 text-gray-700 text-xl placeholder-gray-400 bg-white  rounded-lg focus:outline-none" />
                        </div>

                        <div class="flex-1 ">
                            <input type="text" readOnly defaultValue={user?.email} name='Email' placeholder="Your Email" class="block w-full px-5 py-3.5 mt-3 text-gray-700 text-xl placeholder-gray-400 bg-white  rounded-lg focus:outline-none" />
                        </div>
                    </div>

                    <div class="w-full mt-3 md:mt-6">
                        <textarea name='Message' class="block w-full px-5 py-3.5 mt-3 text-gray-700 text-xl placeholder-gray-400 bg-white h-40  rounded-lg focus:outline-none" placeholder="Your Message"></textarea>
                    </div>

                    <button type='submit' class="w-full px-6 py-3 mt-5 font-medium  text-white  duration-300  rounded-lg bg-primery text-lg outline-none border-none">
                    Order Confirm ${price}
                    </button>
                </form>
            </div>
    </div>
  </div>
  )
}

export default CheckOut