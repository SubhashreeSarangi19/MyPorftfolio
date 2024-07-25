import React, { useState,useEffect } from 'react';
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index.js';
import Loader from 'react-loaders'
import {
    faHackerrank,
    faCss3,
    faJava,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Home=()=> {

    const [letterClass,setLetterClass] = useState('text-animate') 
    const nameArray = ['u','b','h','a','s','h','r','e','e']
    const jobArray = ['t','e', 'c','h',' ','e','n','t','h','u','s','i','a','s','t',',']
    const lifeArray = ['S','t','u','d','e','n','t','.']
   
    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
            <span className={letterClass}>H</span>    
            <span className={`${letterClass} _12`}>i</span>    
            <br/>
            <span className={`${letterClass} _13`}>I</span>  
            <span className={`${letterClass} _14`}>'m</span>  
            <img src={LogoTitle} alt="developer"/>
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={30}/>
            <br/>
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={30}/>
            <AnimatedLetters letterClass={letterClass}
            strArray={lifeArray}
            idx={30}/>
            </h1>
            <h2>
                Passionate about creating beautiful life for me and for all.
            </h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHackerrank} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#EC4D28" />
            </div>
        </div>
      </div>
         <Loader type="pacman" />
       
    </div>
  )
}

export default Home