import React from 'react'
import './About.css'
import {SiHiveBlockchain,SiStrapi, SiFsecure} from 'react-icons/si' 
import {VscServerProcess} from 'react-icons/vsc'

import AboutCard from './AboutCard'


const About = () => {
  return (
    <div className='about'>
    <div className='container'>
        <h1>A Growing Protocol Ecosysteme</h1>
        <p>The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all.</p>
        <div className='card-container'>
            <div className='card'>
                < AboutCard icon= { <SiHiveBlockchain className='icon' /> } heading='Decentralized Finance Development Company' text='Decentralized Finance Development is one of the revolutionary concepts of Blockchain technology that refers to the shift from the traditional economic system to peer-to-peer finances.' />
            </div>
            <div className='card'>
                < AboutCard icon= {<SiStrapi className='icon'/>} heading='programming interface (API)' text='is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.' />
            </div>
            <div className='card'>
                < AboutCard icon ={ <SiFsecure className='icon' />} heading ='Peerless Chain' text='Designed so bail stands up while chain rests on floor. Three point suspension offers superior stability. Engineered and built for increased service life.' />
            </div>
            <div className='card'>
                < AboutCard icon={< VscServerProcess className='icon' />} heading='Simulation' text='A simulation is the imitation of the operation of a real-world process or system over time.[1] Simulations require the use of models' />
                
            </div>
        </div>
        <a href='/' className='btn'>Use Defi</a>
    </div>
    </div>
  )
}

export default About