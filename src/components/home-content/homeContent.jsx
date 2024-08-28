import React,{ useEffect } from "react";
import "./homeContent.css";
import img1 from '../../img/rd.svg';
import img2 from '../../img/webby.svg';
import img3 from '../../img/pmi.svg';
import img4 from '../../img/wf.svg';
import img5 from '../../img/adweek.svg';
import img6 from '../../img/forbes.svg';
import Video from "../../img/video.mp4";
import Videocsf from "../../img/csf.mp4";
import Videovip from "../../img/vip.mp4";
import imgpg4 from '../../img/page4.jpg';
import img441 from '../../img/pg441.jpg';
import img442 from '../../img/pg442.jpg';
import img443 from '../../img/pg443.jpg';
import img445 from '../../img/pg445.jpg';
import imgpg4bg1 from '../../img/pg4bg1.jpg';
import imgpg4bg2 from '../../img/pg4bg2.jpg';

import CustomCursor from "../../CustomCursor";

import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import { Helmet } from "react-helmet";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { preLoaderAnim } from "../../animations";


const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>| Akshat </span>
        <span>&nbsp;| Ameya |&nbsp; </span>
        <span> Arush |</span>
      </div>
    </div>
  );
};


const HomeContent = () => {
  return (
    <>
      <PreLoader/>
        <CustomCursor></CustomCursor>
        <Helmet>
          <script src="./script.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
          <link href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" rel="stylesheet" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        </Helmet>
    



      <div className="main">
        <div className="page1" data-scroll-section>
          <h1> IP VULNERABILTY
          <br></br>TRACKER</h1>
          <p>The IP analysis system is designed to be versatile, with a wide range of applications across various industries and sectors. Its ability to detect and mitigate network security threats in real-time makes it an invaluable tool for any organization that relies on digital infrastructure.
          </p>
          <div id="trio-buttons">
            <h4> Information </h4>
            <h4> Data </h4>
            <h4> Vulnerablity </h4>
          </div>


          <div className="moving-div">
            <div id="blur-left"></div>

            <div className="move">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>

            <div className="move">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
            <div id="blur-right"></div>
          </div>
        </div>
 
        <div className="page2">
        <div id= "linear-gradient" >
        <h6 > W<span>EB </span> 
          <br />TRACKER</h6>
        </div>
        <div className="moving-div2">
        <div className="char">
                <h1>First</h1>
                <h1>SHODAN</h1>
                <h1>Webhack</h1>
                <h1>SHODAN</h1>
                <h1>Geolocation</h1>
                <h1>SHODAN</h1>
                <h1>Webhack</h1>
                <h1>SHODAN</h1>
            </div>
            <div className="char">
                <h1>Webhack</h1>
                <h1>SHODAN</h1>
            </div>
          
          </div>
        </div>


        <div className="page3">
        <div id="gradient"></div>
        <div id="box">
          <div id="video-box">
              <video autoPlay loop muted src={Video} type="video/mp4"/>
            </div>
            <div id="text-box">
                <h2>Real-Time Threat Detection</h2>
                <p>The system's ability to analyse IP traffic as it happens provides a powerful defence mechanism, allowing immediate identification and response to potential security threats. This real-time capability ensures that malicious activities, such as DDoS attacks or unauthorized access attempts, are detected and mitigated before they can cause significant damage.</p>
              </div>
          </div>
        </div>


{/*
        <div id="page4">
        <img className="imgpg4bg1" src={imgpg4bg1} alt="" />
        <img className="imgpg4bg2" src={imgpg4bg2} alt="" />
        <div id= "images">
            <video className="img2" autoPlay loop muted src={Videocsf} type="video/mp4"/>
            <img  className="img1"  src={imgpg4}  alt="" />
            <video className="img3" autoPlay loop muted src={Video} type="video/mp4"/>

            <img  className="img41" src={img441} alt="" />
            <img  className="img42" src={img442} alt="" />
            <img  className="img43" src={img443} alt="" />
            <video className="img44" autoPlay loop muted src={Videovip} type="video/mp4"/>

            <img  className="img45" src={img445} alt="" />
          </div>
          
        <div  id="captions">
            <div id="card1">
                <h1>Resource-Intensive Processing</h1>
                <p>The computational demands of real-time IP traffic analysis, especially in large-scale networks, can be significant. This may require substantial investment in hardware and computational resources, potentially limiting its accessibility to organizations with smaller IT budgets.</p>
            </div>

            <div  id="card2">
                <h2>Corporate Network Security</h2>
                <p>In the corporate world, safeguarding sensitive data and ensuring the smooth operation of business processes are paramount. The system can be deployed across enterprise networks to continuously monitor for anomalies that could indicate potential security breaches.</p>
            </div>

            <div  id="card3">
                <h2>At Visual Identity,<br></br><span>we're not just another</span> Program</h2>
            </div>

            </div>
          
        </div>

*/}

        <div className="page5">

        <h1 >Get in touch.</h1>
        
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        >
      
        <SwiperSlide>
          <div className="slides">
          <img src="https://images.unsplash.com/photo-1723643135768-8a57eb0959d4?q=80&w=1601&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1723643136002-d49a1d7309d1?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1723643135768-8a57eb0959d4?q=80&w=1601&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1719094251938-e596af9261de?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
          " alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slides">
          <img src="https://images.unsplash.com/photo-1723643135768-8a57eb0959d4?q=80&w=1601&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1723643136002-d49a1d7309d1?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1632283409723-4cd4560e0857?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1719094251938-e596af9261de?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
          " alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slides">
          <img src="https://images.unsplash.com/photo-1723643135768-8a57eb0959d4?q=80&w=1601&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1723643136002-d49a1d7309d1?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1632283409723-4cd4560e0857?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1719094251938-e596af9261de?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
          " alt="" />
          </div>
        </SwiperSlide>

      </Swiper>
        </div> 
        
      </div>
    </>
  );
};

export default HomeContent;
