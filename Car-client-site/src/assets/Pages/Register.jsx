import React, { useContext } from 'react'
import login from '../images/login/login.svg'
import { LiaFacebookF } from 'react-icons/lia'
import { FcGoogle } from 'react-icons/fc'
import { BiLogoLinkedin } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { contextProvider } from '../Components/AppContext'



const Register = () => {
    const { createAccount, updateUser } = useContext(contextProvider)
    const handelRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createAccount(email, password)
            .then(() => {
                updateUser({name})
                .then(()=>{})
                .catch(()=>{
                    alert('error')
                })

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'sucess',
                    text: 'Your account has been created. You can now log in and enjoy all the features of our platform.',
                    showConfirmButton: false,
                    timer: 2500
                  })
                  return
                
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: error
                })
            })

    }
    return (
        <div className='flex gap-x-10 lg:gap-x-20 justify-between items-center lg:w-11/12 lg:mx-auto'>
            <div className='flex-1 hidden md:block'>
                <img src={login} alt="" />
            </div>
            <div className='flex-1 border-2 border-[#D0D0D0] border-solid rounded-lg p-7 md:p-10 lg:p-14 '>
                <h1 className='text-4xl text-center font-semibold mb-10 text-black1'>Sign Up</h1>
                <form onSubmit={handelRegister}>
                    <label className='text-lg font-medium mb-2 ml-1 text-black1 block'>Name</label>
                    <input name='name' type="text" placeholder='Your name' className='tex-lg py-3 px-4 w-full border rounded-md focus:outline-none text-lg ' />
                    <label className='text-lg font-medium mb-2 mt-5 ml-1 text-black1 block'>Email</label>
                    <input name='email' type="text" placeholder='Your email' className='tex-lg py-3 px-4 w-full border rounded-md focus:outline-none text-lg ' />
                    <label className='text-lg font-medium mb-2 mt-5 ml-1 text-black1 block'>Password</label>
                    <input name='password' type="password" placeholder='Your Password' className='tex-lg py-3 px-4 w-full border rounded-md focus:outline-none text-lg ' />
                    <input type="submit" value="Sign Up" className='py-3 bg-primery border-none rounded-lg px-4 w-full text-white text-xl font-medium mt-6' />
                </form>
                <h1 className='text-lg text-black1 font-normal mt-8 text-center'>Or Sign Up with</h1>
                <div className='flex justify-center gap-5 mt-5'>
                    <LiaFacebookF className='p-3 bg-[#F5F5F8] text-[#3B5998] rounded-full  w-12 h-12 text-xl'> </LiaFacebookF>
                    <BiLogoLinkedin className='p-3 bg-[#F5F5F8] text-[#3B5998] rounded-full  w-12 h-12 text-xl'></BiLogoLinkedin>
                    <FcGoogle className='p-3 bg-[#F5F5F8] text-[#3B5998] rounded-full  w-12 h-12 text-xl'></FcGoogle>
                </div>
                <h1 className='text-lg text-textColor font-normal mt-5 text-center'>Already have an account? <span className='text-primery font-medium'><Link to='/login'>Login</Link> </span></h1>

            </div>

        </div>
    )
}

export default Register