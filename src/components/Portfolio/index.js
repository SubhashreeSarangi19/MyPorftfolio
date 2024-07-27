import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './index.scss'
import exampleImage1 from './cerificate1.jpg';
import exampleImage2 from './cerificate2.jpg';
import exampleImage3 from './cerificate3.jpg';
import exampleImage4 from './cerificate4.jpg';
import exampleImage5 from './cerificate5.jpg';


const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="carousel-section">
      <div className="carousel-heading">
          <h2><b>Certificates</b></h2>
        </div>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
          <div className="carousel-slide">
            <img src={exampleImage1} alt="Certificate 1" />
          </div>
          <div className="carousel-slide">
            <img src={exampleImage2} alt="Certificate 2" />
          </div>
          <div className="carousel-slide">
            <img src={exampleImage3} alt="Certificate 3" />
          </div>
          <div className="carousel-slide">
            <img src={exampleImage4} alt="Certificate 4" />
          </div>
          <div className="carousel-slide">
            <img src={exampleImage5} alt="Certificate 5" />
          </div>
        </Carousel>
      </div>

      <div className="postcards-section">
      <div className="carousel-heading">
          <h2><b>Projects</b></h2>
        </div>
        <div className="postcards">
          <div className="postcard">
            <a href="https://github.com/SubhashreeSarangi19/LearniversefullStack.git" target="_blank" rel="noopener noreferrer">
              <img src="https://tse1.mm.bing.net/th?id=OIP.hLOO6fheZDBhrfvI-JLryAHaFr&pid=Api&P=0&h=180" alt="Project 1" className="postcard-image" />
            </a>
            <p>Developed <b>Learniverse</b>, an innovative e-learning platform designed to enhance user engagement.</p>
                <p>It has a progress tracker that monitors the number of completed tasks.Also
                user authentication that utilizes JWT tokens for secure access.</p>
          </div>
          <div className="postcard">
            <a href="https://github.com/SubhashreeSarangi19/MyPorftfolio.git" target="_blank" rel="noopener noreferrer">
              <img src="https://tse3.mm.bing.net/th?id=OIP.IXNzh9MZ6I2-vSoXVTWCUgHaE7&pid=Api&P=0&h=180" alt="Project 2" className="postcard-image" />
            </a>
            <p>Created a dynamic <b>Portfolio</b> using HTML, CSS, JavaScript, and React. Showcased projects, skills, and experiences in
            an interactive format. Integrated responsive design, smooth navigation, and modern UI components to enhance user
            experience and highlight my technical proficiency.</p>
          </div>
          <div className="postcard">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://tse4.mm.bing.net/th?id=OIP.t_gMLpPfuMPC9BE3G9m1RQHaFj&pid=Api&P=0&h=180" alt="Project 3" className="postcard-image" />
            </a>
            <p>Developed <b>Wast-ED</b>,promoting the exchange of innovative recycling practices for sustainable solutions.
            It facilitates community engagement in waste reduction efforts while promoting the exchange of innovative recycling
            practices for sustainable solutions.</p>
          </div>
          <div className="postcard">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://tse4.mm.bing.net/th?id=OIP.L4AOhpgMaroniNvMuu5XvgHaFj&pid=Api&P=0&h=180" alt="Project 4" className="postcard-image" />
            </a>
            <p>Designed a comprehensive hotel network in Cisco Packet Tracer with routers, switches, VLANs, IP/MAC addresses,
                and cables.Implemented DHCP for dynamic IP assignment and SSH for secure remote management, ensuring
                efficient and secure network operations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
