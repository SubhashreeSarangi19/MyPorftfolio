import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from '../Home/Logo'
import { Link } from 'react-router-dom'

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
            I'm a very ambitious full-stack developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops.
          </p>
          <p>
            Skills I have are-
            <ul>
              <li>Web-Technologies: HTML, CSS, JavaScript</li>
              <li>Frameworks: Node.js, Express.js, React.js</li>
              <li>Languages: Java, Python</li>
              <li>Databases: MySQL, MongoDB</li>
              <li>Platforms: Eclipse, VS Code, Postman, Microsoft Office, Canva, Figma</li>
            </ul>
          </p>
          <p>To know more about me please have a look at my <b>Resume</b>.</p>
          <div>
      <button onClick={toggleResume} className= 'flat-button'>
        <div style={resumeContainerStyle}>
          <a href="https://drive.google.com/file/d/1l6G4_CeFn_-zhSoq7IvY-mQSjlZ33Z2o/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
          <button className='flat-button'>Open Resume</button>
          </a>
        </div>
      
      </button>
      
    </div>
      </div>
      </div>
      <Logo/>
      <Loader type='pacman'/>
    </>
  )

  
}

export default About;