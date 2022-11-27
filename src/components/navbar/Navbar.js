import React, {useState} from 'react'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'


import './Navbar.css'

const Navbar = () => {
  const [click , setClick] = useState(false) 
  const handleNav = ()  => setClick(!click) 
  return (
    <div className='navbar'>
      <div className='container' >
        <h1 style={{marginLeft:'1rem' , color :'#00d8ff' }}>Impact</h1>
        <ul className={click ? 'nav active' : 'nav'}>
          <li className='nav-items'>
            <a href='/'>Platform</a>
          </li>
          <li className='nav-items'>
            <a href='/'>Developers</a>
          </li>
          <li className='nav-items'>
            <a href='/'>Comunity</a>
          </li>
          <li className='nav-items'>
            <a href='/'>About</a>
          </li>
          <li className='nav-items'>
            <a className='btn' href='/'>Use Defi</a>
          </li>
        </ul>
        <div onClick={handleNav} className='hamburger'>
          {click ? (<AiOutlineClose className='icon' /> ) : (< AiOutlineMenu className='icon'/>) }
          
        </div>
      </div>
    </div>
  )
  
}

export default Navbar