import React from 'react'
import '../styles/Profile.css'
import Youtube from 'react-youtube'
import { Profilelist } from "../helpers/Profilelist"
import ProfileItem from '../components/ProfileItem';


function Profile() {
  return (
    <div className='profile'>
      <div className='profileList'>{Profilelist.map((profileItem, key)=>{
        return <ProfileItem key={key} title={profileItem.title} text={profileItem.text} image={profileItem.image}/>;
      }
      
      )}</div>
      <div className='video'>
      <Youtube videoId={"YPujCVBhh9E"} width={560} height={315}/>
      </div>
    </div>
  )
}

export default Profile