import { addDoc, doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { firestore } from '../Firebase/Firebase'
import { useNavigate } from 'react-router'

const useUpdateProfile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('bloguser'))
  const updateProfile =async (profile)=>{
    console.log("updating")
    try {
    await updateDoc(doc(firestore,"users",user.uid),profile)
   
   


    
      localStorage.setItem('bloguser',JSON.stringify(profile));
      navigate('/profile')

    
    } catch (error) {
      console.log(error)
      
    }

  }

  return { updateProfile }

}




export default useUpdateProfile
