import React from 'react'

import Video from '../../images/video.mp4' 

import './Hero.css' 

const Hero = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'> 
    <source src={Video} type='video/mp4' />
    </video>
    <div className='hero-text'>
      <h1>Decentrenlized</h1>
      <h1><span className='blue'>Trading</span> Protocol</h1>
      <p>Guaranteed liquidity trading for millions of users and top Etherum applications</p>
      <div className='btn-group'>
      <button className='btn'>Use Default</button>
      <button className='btn btn-outline'>Documentation</button>
      <button className='btn btn-center'>FAQ</button>
      </div>
    </div>
    <div className='bottom-text'>
      <h1>Total volume Secured : 42,104,783,662.47</h1>
      
    </div>
    </div>
  )
}

export default Hero