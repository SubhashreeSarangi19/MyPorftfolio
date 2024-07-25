import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from '../Home/Logo'
import { Link } from 'react-router-dom'
import cv from '../../assets/images/resume.jpg'

function About(){
  
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
     setLetterClass('text-animate-hover')
   }, 4000)
 }, [])

  const [isVisible, setIsVisible] = useState(false);

  const toggleResume = () => {
    setIsVisible(!isVisible);
  }

  const resumeContainerStyle = {
    marginTop: '20px',
  };
  
  const imageStyle = {
    width: '100%',
    maxWidth: '600px',
  };

  return(
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
        <AnimatedLetters
         strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
         idx={15}
         />
        </h1>
        <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
          <div>
      <button onClick={toggleResume} className= 'flat-button'>
        {isVisible ? 'Hide Resume' : 'View Resume'}
      </button>
      {isVisible && (
        <div style={resumeContainerStyle}>
          <img src={cv} alt="Resume" style={imageStyle} />
        </div>
      )}
    </div>
      </div>
      </div>
     
      <Loader type='pacman'/>
    </>
  )

  
}

export default About;
