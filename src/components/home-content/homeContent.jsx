import React,{ useEffect } from "react";
import "./homeContent.css";
import img1 from '../../img/rd.svg';
import img2 from '../../img/webby.svg';
import img3 from '../../img/pmi.svg';
import img4 from '../../img/wf.svg';
import img5 from '../../img/adweek.svg';
import img6 from '../../img/forbes.svg';
import Video from "../../img/video.mp4";

import imgpg4 from '../../img/page4.jpg';
import imgpg42 from '../../img/pg42.jpg';
import imgpg43 from '../../img/pg43.jpg';

import img441 from '../../img/pg441.jpg';
import img442 from '../../img/pg442.jpg';
import img443 from '../../img/pg443.jpg';
import img444 from '../../img/pg444.jpg';
import img445 from '../../img/pg445.jpg';

import imgpg4bg1 from '../../img/pg4bg1.jpg';
import imgpg4bg2 from '../../img/pg4bg2.jpg';

import LocomotiveScroll from 'locomotive-scroll';
import CustomCursor from "../../CustomCursor";
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
        <span>Akshat,</span>
        <span>Ameya,</span>
        <span>Arush.</span>
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
          <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
                <script src="./scroll.js" type="text/javascript"/>
                <link href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" rel="stylesheet" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        </Helmet>
    



      <div className="main">
        <div id="page1" data-scroll-container>
          <h1 data-scroll data-scroll-speed="0.2"> IP VULNERABILTY</h1>
          <h1 data-scroll data-scroll-speed="0.2">TRACKER</h1>
          <p data-scroll data-scroll-speed="0.2">
            {" "}
            IP analyzer Lorem iillo sdf sdf sdf sdf sdfsaepe labore?
            <br></br>
            INFORMATION ASSETS
          </p>
          <div id="page1-bubble">
            <h4> Information </h4>
            <h4> Data </h4>
            <h4> Vulnerablity </h4>
          </div>


          <div id="moving-div">
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

        <div id="page2">
        <div id= "linear-gradient" >
        <h1 data-scroll data-scroll-speed="0.2">HI <span>THIS IS </span> 
          <br />MY WEBPAGE</h1>
        </div>
        </div>



        <div id="page3">
        <div id="pattern"></div>

       <div id="video-box">
          <div id="video-container">
              <video autoPlay loop muted src={Video} type="video/mp4"/>
            </div>

            <div id="text-box">
                <h2>MARTIN GARRIX LIVE @ IDEM (Amsterdam RAI 2023)</h2>
                <p>Thanks to everybody for partying and the amazing energy at the 2 shows in my hometown last year, love you guys a lot!!</p>
              </div>
       </div>
    
        {/* 
            <div class="page3-center">
                <div className="icon">
                    <img src={play} alt="" />
                </div>
                <h5>Watch Showrfddevel</h5>
            </div> */}

        </div>




        <div id="page4">
        <img className="imgpg4bg1" src={imgpg4bg1} alt="" />
        <img className="imgpg4bg2" src={imgpg4bg2} alt="" />
        <div id= "images">
            <img data-scroll data-scroll-speed="0.1" className="img2"  src={imgpg42} alt="" />
            <img data-scroll data-scroll-speed="0.1" className="img1"  src={imgpg4}  alt="" />
            <img data-scroll data-scroll-speed="0.1" className="img3"  src={imgpg43} alt="" />
            <img data-scroll data-scroll-speed="0.1" className="img41" src={img441} alt="" />
            <img data-scroll data-scroll-speed="0.1" className="img42" src={img442} alt="" />
            <img data-scroll data-scroll-speed="0.1" className="img43" src={img443} alt="" />
            <img data-scroll data-scroll-speed="0.1" className="img44" src={img444} alt="" />
            <img data-scroll data-scroll-speed="0.1" className="img45" src={img445} alt="" />
          </div>
          
        <div data-scroll data-scroll-speed="0.1" id="captions">
            <div id="card1">
                <h1>Akshat Negi</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, earum quisquam accusamus dignissimos laboriosam culpa voluptatibus corrupti magnam iusto delectus non suscipit exercitationem cumque tempore quasi ea alias asperiores optio.</p>
            </div>

            <div data-scroll data-scroll-speed="0.1" id="card2">
                <h2>HI BOYS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, earum quisquam accusamus dignissimos laboriosam culpa voluptatibus corrupti magnam iusto delectus non suscipit exercitationem cumque tempore quasi ea alias asperiores optio.</p>
            </div>

            <div data-scroll data-scroll-speed="0.1" id="card3">
                <h2>At Visual Identity,<span>we're not just another</span> Program</h2>
            </div>

            </div>
          
        </div>




        <div id="page5">
        <h1 data-scroll data-scroll-speed="0.1">Get in touch.</h1>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        >
          
        <SwiperSlide>
          <div className="slide1">
          <img src="https://images.unsplash.com/photo-1723643135768-8a57eb0959d4?q=80&w=1601&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1723643136002-d49a1d7309d1?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1723643135768-8a57eb0959d4?q=80&w=1601&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://images.unsplash.com/photo-1719094251938-e596af9261de?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
          " alt="" />
      
          </div>
          
          </SwiperSlide>
        <SwiperSlide>
        <div className="slide1">
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
