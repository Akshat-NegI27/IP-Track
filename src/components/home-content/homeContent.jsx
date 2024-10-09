import React,{ useEffect } from "react";
import "./homeContent.css";

import img1 from '../../img/rd.svg';
import img2 from '../../img/webby.svg';
import img3 from '../../img/pmi.svg';
import img4 from '../../img/wf.svg';
import img5 from '../../img/adweek.svg';
import img6 from '../../img/forbes.svg';
import Video from "../../img/video.mp4";
import img1pg4 from '../../img/grid1.jpg';
import img2pg4 from '../../img/grid2.jpg';
import imgpg21 from '../../img/pg21.jpg';

import Aos from "aos";
import 'aos/dist/aos.css'

//Smooth Scroll
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import "../../assets/animations/locomotive-scroll.css";

// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';
import { preLoaderAnim } from "../../assets/animations";


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


const AOSs = () =>{
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
}


const HomeContent = () => {
  
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
      multiplier: 0.5,
      lerp: 0.1,
    });
  }, []);

  return (
    <>
      <PreLoader/>
      <AOSs/>

        <HelmetProvider>
        <Helmet>
          {/* <script src="./script.js"></script> */}
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
          <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
          <link href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" rel="stylesheet" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        </Helmet>
        </HelmetProvider>
    

      <div className="main">

        {/*-------------Page-1------------- */}
        <div className="page1">
          <h1 data-scroll data-scroll-speed="0.1"> IP VULNERABILTY
          <br></br>TRACKER</h1>
          <p data-scroll data-scroll-speed="0.1" >The IP analysis system is designed to be versatile, with a wide range of applications across various industries and sectors. Its ability to detect and mitigate network security threats in real-time makes it an invaluable tool for any organization that relies on digital infrastructure.
          </p>
          <div data-scroll data-scroll-speed="0.1" id="trio-buttons">
            <h4> Information </h4>
            <h4> Data </h4>
            <h4> Vulnerablity </h4>
          </div>


          <div className="moving-div" >
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


        {/*-------------Page-2------------- */}
        <div className="page2">
        <div className= "linear-gradient">
        {/* <h6 > W<span>EB </span> 
          <br />TRACKER</h6> */}
          <div className="boxx">
            <div className="inner-box">
              <h1 data-scroll data-scroll-speed="0.1"> Introducing GUI PLATFORM</h1>
              <div className="contentz">
              <h2 data-scroll data-scroll-speed="0.1" > WEB Vulnerabily Detection</h2>
              <h3 data-scroll data-scroll-speed="0.1" >Now Hands ON</h3>  
              </div>
              <div data-scroll data-scroll-speed="0.1" className="image-container">
              {/* <img className="hover-image" src={img2pg4} alt="" /> */}
              <img className="hover-image" src={imgpg21} alt="" />
              </div>




            </div>
          </div>
        
        <div className="container1">
          <p className="loop-text">WEBHACK GEOLOCATION</p>
          <p className="loop-text">WEBHACK GEOLOCATION</p>
          <p className="loop-text">WEBHACK GEOLOCATION</p>
        </div>
        </div>
        </div>


        {/*-------------Page-3------------- */}
        <div className="page3">
        <div id="gradient"></div>
        <div id="box">
          <div id="video-box" data-scroll data-scroll-speed="0.2">
              <video autoPlay loop muted src={Video} type="video/mp4"/>
            </div>
            <div id="text-box" data-scroll data-scroll-speed="0.2">
                <h2>Real-Time Threat Detection</h2>
                <p>The system's ability to analyse IP traffic as it happens provides a powerful defence mechanism, allowing immediate identification and response to potential security threats. This real-time capability ensures that malicious activities, such as DDoS attacks or unauthorized access attempts, are detected and mitigated before they can cause significant damage.</p>
              </div>
          </div>
        </div>
        

        {/* <div className="page4">
          <div className="border">
            <h1>NEW CONTENT</h1>
            <div className="imagesbox">
          <img  className="img41" src={img1pg4} alt="" />
          <img  className="img42" src={img2pg4} alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae error expedita aspernatur illum odit accusantium repellat itaque iusto natus commodi, obcaecati atque, non aliquam molestias earum, iure placeat? Modi, optio.</p>
          </div>
        </div> */}

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
        </div> */}


        {/*-------------Page-4------------- */}
        <div className="page4">
          <div className="box">
            <div className="image-container image">
              <img className="hover-image" src={img1pg4} alt="" />
            </div>

            <div className="text-content">
              <h1>NEW CONTENT</h1>
              <p>Hi, my name is Lu Yu, I am a designer working in visual communication, with a focus on interaction design & art direction. I was raised in China, and have spent time living and working in Melbourne, Istanbul, and Berlin. Currently open for freelance collaborations. Previously Head of Brand at Pitch. Jury member of Awwwards & Digital Design award.
                </p></div>
            </div>
        </div>


        <div className="page6">
          <div className="box">
            <div className="image-container image">
              <img className="hover-image" src={img2pg4} alt="" />
            </div>
            <div className="text-content">
              <h1>NEW CONTENT</h1>
              <p>Hi, my name is Lu Yu, I am a designer working in visual communication, with a focus on interaction design & art direction. I was raised in China, and have spent time living and working in Melbourne, Istanbul, and Berlin. Currently open for freelance collaborations. Previously Head of Brand at Pitch. Jury member of Awwwards & Digital Design award.
                </p></div>
            </div>
        </div>


        {/*-------------Page-5------------- */}
        <div className="page5">

        <h1 data-scroll data-scroll-speed="0.01" >Get in touch.</h1>        
      <Swiper
      data-scroll data-scroll-speed="0.2"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
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




// .image {
//   filter: grayscale();
//   transition: all ease-in-out;
//   transition-duration: 500ms;

// }

// .image-container:hover .image {
//   filter: none;
// }