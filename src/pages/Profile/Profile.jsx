import React from 'react'
import './Profile.css'

const Profile=()=> {
  const user = JSON.parse(localStorage.getItem("bloguser"));

  
  return (
    <div className='box'>
      <header className="profile-header">
    <div className="profile-pic">
      <img src="download.png" alt=""/> 
      </div>
    <div className="profile-info">
      <h1>{user.username}</h1>
      <div className='bio-profile'>
        <label htmlFor="">Bio:</label>
        <p className="bio">{user.bio}</p>
         

      </div>
      <br />
      <br />
      <a href="http://localhost:5173/updateprofile" className='edit'>Edit Profile</a>
    </div>
      

  </header>

    </div>
  )
}

export default Profile
