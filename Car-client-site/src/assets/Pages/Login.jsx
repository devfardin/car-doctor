import React, { useContext } from 'react'
import login from '../images/login/login.svg'
import { LiaFacebookF } from 'react-icons/lia'
import { FcGoogle } from 'react-icons/fc'
import { BiLogoLinkedin } from 'react-icons/bi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { contextProvider } from '../Components/AppContext'
import Swal from 'sweetalert2'
import axios from 'axios'

const Login = () => {
  const { loginAccoutn } = useContext(contextProvider)
  const location = useLocation()
  const navigate = useNavigate()


  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value;
    // console.log(email, password);
    const user = { email }
    loginAccoutn(email, password)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Welcome back',
          text: 'You have successfully logged into your account. Enjoy your experience and feel free to explore our platform',
          showConfirmButton: false,
          timer: 2500
        })
        axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
          .then(res => {
            console.log(res.data);
            if(res.data.success){
              navigate(location?.state ? location.state : '/')
            }
          })
          .catch(error => {
            console.log(error);
          })
        //   navigate(location?.state ? location.state : '/')
        //   return  
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: error,
        })

      })
  }

  return (
    <div className='flex gap-x-10 lg:gap-x-20 justify-between items-center lg:w-11/12 lg:mx-auto'>
      <div className='flex-1 hidden md:block'>
        <img src={login} alt="" />
      </div>
      <div className='flex-1 border-2 border-[#D0D0D0] border-solid rounded-lg p-7 md:p-10 lg:p-14 '>
        <h1 className='text-4xl text-center font-semibold mb-10 text-black1'>Sign In</h1>
        <form onSubmit={handelLogin}>
          <label className='text-lg font-medium mb-2 mt-5 ml-1 text-black1 block'>Email</label>
          <input type="text" name='email' placeholder='Your email' className='tex-lg py-3 px-4 w-full border rounded-md focus:outline-none text-lg ' />
          <label className='text-lg font-medium mb-2 mt-5 ml-1 text-black1 block'>Password</label>
          <input type="password" name='password' placeholder='Confirm Password' className='tex-lg py-3 px-4 w-full border rounded-md focus:outline-none text-lg ' />
          <input type="submit" value="Sign Up" className='py-3 bg-primery border-none rounded-lg px-4 w-full text-white text-xl font-medium mt-6' />
        </form>
        <h1 className='text-lg text-black1 font-normal mt-8 text-center'>Or Sign In with</h1>
        <div className='flex justify-center gap-5 mt-5'>
          <LiaFacebookF className='p-3 bg-[#F5F5F8] text-[#3B5998] rounded-full  w-12 h-12 text-xl'> </LiaFacebookF>
          <BiLogoLinkedin className='p-3 bg-[#F5F5F8] text-[#3B5998] rounded-full  w-12 h-12 text-xl'></BiLogoLinkedin>
          <FcGoogle className='p-3 bg-[#F5F5F8] text-[#3B5998] rounded-full  w-12 h-12 text-xl'></FcGoogle>
        </div>
        <h1 className='text-lg text-textColor font-normal mt-5 text-center'>Don't have an account? <span className='text-primery font-medium'><Link to='/register'>Sign Up</Link> </span></h1>
      </div>
    </div>
  )
}

export default Login