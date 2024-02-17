import React, { useContext, useEffect, useState } from 'react'
import { contextProvider } from '../Components/AppContext'
import Bookservice from './Bookservice'
import PrivateRouteBanner from '../Components/PrivateRouteBanner'
import { PiArrowBendUpLeftBold } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';
const ServiceBooks = () => {
    const { user } = useContext(contextProvider)
    const [books, setBooks] = useState([])
    
    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res=>{
            setBooks(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBooks(data))
    }, [])
    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this service? This action cannot be undone.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Service deleted successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            const currentCardItem = books.filter(book => book._id !== id)
                            setBooks(currentCardItem)
                        }
                    })
            }
        })
    }
    return (
        <div className=''>
            <PrivateRouteBanner title='Cart Details' path='Cart Details'></PrivateRouteBanner>
            <div className='mt-10  pb-3'>
                {
                    books?.map(book => <Bookservice key={book._id} book={book} handelDelete={handelDelete}> </Bookservice>) 
                }
            </div>
            <div className='flex justify-between items-center'>
                <Link to='/#service' className='flex gap-x-3 items-center hover:text-primery duration-200 cursor-pointer text-xl font-medium text-black1'>
                    <PiArrowBendUpLeftBold> </PiArrowBendUpLeftBold>
                    <h1>Continue Shopping</h1>
                </Link >
                <div className='flex gap-x-3 items-center hover:text-primery duration-200 cursor-pointer text-xl font-medium text-black1'>
                    <RiDeleteBin6Line> </RiDeleteBin6Line>
                    <h1>Clear Shopping Cart </h1>
                </div>
            </div>
        </div>
    )
}
export default ServiceBooks
