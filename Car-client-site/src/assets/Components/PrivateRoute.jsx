import React, { useContext } from 'react'
import { contextProvider } from './AppContext'
import { Navigate, useLocation } from 'react-router-dom'
const PrivateRoute = ({children}) => {
  const location=useLocation()
    const {user, loader}=useContext(contextProvider)
    if (loader) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if(user){
        return children
    }
  return (
    <Navigate state={location.pathname} to='/login'> </Navigate>
  )
}

export default PrivateRoute