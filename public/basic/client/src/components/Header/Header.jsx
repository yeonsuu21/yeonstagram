import React from 'react'
import './css/index.css';

function Header() {
  return (
    <div className='header'>
      <div className='wrapper'>
        <div className='logo'>
        <img src='/assets/welcome/logo.svg'></img>
        </div>
        <nav className='navigation'>
         <ul className='nav-wrapper'>
            <li className='nav'>
                <img src='/assets/header/feed-dac.svg'></img>
            </li>
            <li className='nav'>
                <img src='/assets/header/profile-dac.svg'></img>
            </li>
         </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
