import React from 'react'

function ProfileItem({title,text,image}) {
  return (
    <div className='profileItem'>
        <div style={{backgroundImage: `url(${image})` }}> </div>
        <h1> {title} </h1>
        <p> {text} </p>
    </div>
  )
}

export default ProfileItem