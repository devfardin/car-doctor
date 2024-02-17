import React from 'react'
import PageBanner from '../Components/PageBanner';

const AddServices = () => {
    const addServices=(e)=>{
        e.preventDefault()
        const form=e.target;
        const serviceName=form.serviceName.value;
        const serviceImage=form.serviceImage.value;
        const servicePrice= form.servicePrice.value;
        const serviceType=form.serviceType.value;
        const serviceDes=form.ProductDescription.value;
        console.log(serviceName, serviceImage, servicePrice, serviceType, serviceDes); 
    }
  return (
  <div>
     <PageBanner title='Add New Service' path='/Service'> </PageBanner>
    <div className='bg-sectionbg mt-10 md:mt-20 rounded-lg p-6 md:py-10 md:px-8'>
    <div class="rounded-lg md:p-8">
                <form onSubmit={addServices}>
                    <div class="md:items-center md:flex gap-x-4">
                        <div class="flex-1 ">
                            <input type="text" name='serviceName' placeholder="Service Name " class="block w-full px-5 py-3.5 mt-3 text-gray-700 text-xl placeholder-gray-400 bg-white  rounded-lg focus:outline-none" />
                        </div>

                        <div class="flex-1 ">
                            <input type="text" name='servicePrice' placeholder="Service Price" class="block w-full px-5 py-3.5 mt-3 text-gray-700 text-xl placeholder-gray-400 bg-white  rounded-lg focus:outline-none" />
                        </div>
                    </div>

                    <div class=" md:items-center md:flex mt-4 gap-x-4">
                        <div class="flex-1">
                            <input type="text" name='serviceImage' placeholder="Photo Url" class="block w-full px-5 py-3.5 mt-3 text-gray-700 text-xl placeholder-gray-400 bg-white  rounded-lg focus:outline-none" />
                        </div>

                        <div class="flex-1 ">
                            <input type="text" name='serviceType' placeholder="Service Type" class="block w-full px-5 py-3.5 mt-3 text-gray-700 text-xl placeholder-gray-400 bg-white  rounded-lg focus:outline-none" />
                        </div>
                    </div>

                    <div class="w-full mt-3 md:mt-6">
                        <textarea name='ProductDescription' class="block w-full px-5 py-3.5 mt-3 text-gray-700 text-xl placeholder-gray-400 bg-white h-40  rounded-lg focus:outline-none" placeholder="Product Description"></textarea>
                    </div>

                    <button type='submit' class="w-full px-6 py-3 mt-5 font-medium  text-white  duration-300  rounded-lg bg-primery text-lg outline-none border-none">
                    Submit
                    </button>
                </form>
            </div>
    </div>
  </div>
  )
}

export default AddServices