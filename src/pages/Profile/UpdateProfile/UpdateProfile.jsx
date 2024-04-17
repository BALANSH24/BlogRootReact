import React, { useState } from 'react'
import './UpdateProfile.css'
import useUpdateProfile from '../../../hooks/useUpdateProfile'


const UpdateProfile = () => {
  const user = JSON.parse(localStorage.getItem('bloguser'))
  const [data , setData] = useState({...user})
  const {updateProfile} = useUpdateProfile();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("submit called")

        updateProfile(data);
    }
  return (
    <div className='profile-div'>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit} action="" className='form-div'>

        <label htmlFor="">username</label>
        <input value={data.username} type="text" placeholder='username'onChange={(e)=>{setData({...data,username:e.target.value})}}  />
        <br />
        <label htmlFor="">bio</label>
        <input value={data.bio} type="text" placeholder='bio' onChange={(e)=>{setData({...data,bio:e.target.value})}}/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UpdateProfile
