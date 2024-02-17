import React, { createContext, useEffect, useState } from 'react'
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '../../../Firebase.confige';


export const contextProvider=createContext(null)
const Auth= getAuth(app)
const AppContext = ({children}) => {
    const [user, setUser]=useState(null)
   const [loader, setLoader]=useState(true)

   const createAccount=(email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(Auth, email, password)
   }

   const updateUser=({name})=>{
    setLoader(true)
    return updateProfile(Auth.currentUser, {
        displayName: name,
    })
   }
   const loginAccoutn =(email, password)=>{
    setLoader(true)
    setLoader(true)
    return signInWithEmailAndPassword(Auth, email, password)
   }

   const logOut=()=>{
    signOut(Auth)
   }
   useEffect(()=>{
    const unsubcribe= onAuthStateChanged(Auth, curectUser=>{
        setUser(curectUser)
        setLoader(false)
    })
    return ()=>{
        return unsubcribe()
    }
   },[])


   const authInfo={
    user, loader, createAccount, loginAccoutn, logOut, updateUser, loader
   }
  return (
    <contextProvider.Provider value={authInfo}>
        {children}
    </contextProvider.Provider>

  )
}

export default AppContext