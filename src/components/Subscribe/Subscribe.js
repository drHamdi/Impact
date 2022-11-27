import React from 'react'
import './Subscribe.css'


const Subscribe = () => {
  return (
    <div className='Subscrib'>
        <div className='content'>
            <h2>Join our impact community</h2>
            <form action='https://getform.io/f/f40db04a-0b47-4ac7-96b0-b30336b3e2ea' method='POST'>
                <div className='form-container display-col'>
                    <input type="email" name='email' placeholder='Enter you email here' />
                    <button className='btn'>Singe up</button>
                </div>
                <div className='form-container'>
                <input type='checkbox' /> <p>Yes, I agree to receviel email comunications impact comnity  </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe