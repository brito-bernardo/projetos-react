import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='contact'>
        <Link to='tel:+84 996339555'><CallIcon/></Link>
        <Link to='https://github.com/brito-bernardo' target="_blank"><GitHubIcon/></Link>
        <Link to='https://www.instagram.com/britobernardo_/' target="_blank"><InstagramIcon/></Link>
        <Link to='https://www.linkedin.com/in/bernardo-brito-8ba7301a5/' target="_blank"><LinkedInIcon/></Link>
      </div>
      <p> &copy; 2023 Bernardo Brito </p>
    </div>
  )
}

export default Footer
