import React from 'react'
import GoogleApps from '../assets/google-apps.png'
import GmailImg from '../assets/gmail-img.png'

export default function Navbar() {


    return (
        <nav>
            <a href='#' className='gmail'>Gmail</a>
            <a href='#' className='images'>Images</a>
            <button
                className='googleApps-btn'
            >
                <img src={GoogleApps} className='googleApps-img' />
            </button>
            <img src={GmailImg} className='gmail-img' />
        </nav>
    )
}
