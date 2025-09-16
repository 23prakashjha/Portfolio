import React from 'react'
import './Hero.css'
import back from '../assets/back.jpg'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <img src={back} alt='Prakash Jha Profile' className='hero-img' />
      
      <h1>
        I'm Prakash Jha,{" "} 
        <ReactTyped
        className="typed-text"
          strings={[
            'Full Stack Developer',
            'Frontend Developer',
            'Backend Developer',
            'coder',
            'Traveller',
          ]} 
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h1>

      <p>I am a Full stack Developer skilled in <strong>Frontend Technologies</strong><br/> such as HTML, CSS,and JavaScript,and<strong>backend technologies</strong>  as Node.js, Express.js <br/> creating interactive web experiences. I'm passionate about blending design aesthetics with functionality.<br/> And I'm current master in <strong>MCA</strong> from Gurugram University.

</p>

      <div className="hero-action">
        <button className="hero-connect">Connect With Me</button>
        <a
          className="hero-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
