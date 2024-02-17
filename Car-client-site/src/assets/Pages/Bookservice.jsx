import React from 'react'
const Bookservice = ({ book, handelDelete }) => {
    const { _id, Message, Service_Time, service_Name, FirstName, img, email, price } = book;

    return (

        <div>
            
           {
                book ? <div className='bg-gray-50 rounded-lg my-6'>
                    <tbody className="w-full py-10  dark:bg-gray-900 divide-y divide-white dark:divide-gray-700">
                        <tr className="">
                            <td className="px-4 py-3.5 w-[3%] text-sm font-normal text-center text-gray-500 dark:text-gray-400 ">
                                <button onClick={() => handelDelete(_id)} className="text-primery dark:hover:text-red-300">
                                    {/* Delete Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="bi bi-trash"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.293 1.293a1 1 0 011.414 0L8 4.586l3.293-3.293a1 1 0 111.414 1.414L9.414 6l3.293 3.293a1 1 0 01-1.414 1.414L8 7.414l-3.293 3.293a1 1 0 01-1.414-1.414L6.586 6 3.293 2.707a1 1 0 010-1.414z" />
                                    </svg>
                                </button>
                            </td>
                            <td className="px-4 py-3.5 w-[12%]">
                                <img
                                    src={img}
                                    alt="Service Image"
                                    className="w-24 h-24 object-cover rounded"
                                />
                            </td>
                            <td className="py-3.5 text-xl font-semibold text-left rtl:text-right w-1/4 text-black1 dark:text-gray-400">
                                {service_Name}
                            </td>
                            <td className="px-4 py-3.5 text-xl  w-1/4 font-semibold text-left rtl:text-right text-black1 dark:text-gray-400">
                                ${price}
                            </td>
                            <td className="px-12 py-3.5 w-1/6 text-xl font-medium text-left rtl:text-right text-black dark:text-gray-400">
                                2023-10-28
                            </td>
                            <td className="py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400 w-1/6">
                                <button className="bg-primery text-white px-4 py-2 text-lg font-medium rounded-lg">
                                    Pending
                                </button>
                            </td>
                        </tr>
                        {/* Add more rows with similar structure for other services */}
                    </tbody>
                </div> : <div className='h-full flex justify-center items-center'> <h1 className='text-2xl font-semibold text-center text-black'>Your card is empty</h1> </div>
            }
        </div>


    )
}

export default Bookservice