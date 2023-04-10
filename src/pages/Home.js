import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/banner_image.JPG'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='container-home'>
            <div className='container_image'>
            <h1>Olá, eu sou Bernardo!</h1>
                <Link to="/profile">
                    <button className='button'>
                        Venha me conhecer mais!
                    </button>
                </Link>
            </div>

        </div>
        
    </div>
  )
}

export default Home