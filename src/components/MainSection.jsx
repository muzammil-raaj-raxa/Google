import React from 'react'
import GoogleLogo from '../assets/google-logo.png'
import SearchIcon from '../assets/search-icon.png'
import GoogleMic from '../assets/google-mic.png'
import GoogleLens from '../assets/google-lens.png'

export default function MainSection() {
  return (
    <div>
      <img src={GoogleLogo} className='google-logo' />
      <br></br>
      <div className='search-container'>
        <input type='text' className='search-bar' />
        <img src={SearchIcon} className='search-icon' />
        <img src={GoogleMic} className='google-mic' />
        <img src={GoogleLens} className='google-lens' />
      </div>
      <div className='search-btn'>
        <button className='search-btn-first'>
          Google Search
        </button>
        <button className='search-btn-second'>
          I'm feeling Lucky
        </button>
      </div>
      <p className='google-languages'>Google offered in:
        <a href='#'>اردو</a>
        <a href='#'>پشتو</a>
      </p>
    </div>
  )
}
