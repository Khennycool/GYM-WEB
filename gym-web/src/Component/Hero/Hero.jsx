import React from 'react';
import './Hero.css';
import ReactPlayer from 'react-player';
import videoFile from '../../assets/gym-video.mp4';

const Hero = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url={videoFile}
        playing
        loop
        muted
        width="100%"
        height="70%"
        // style={{
          
        //   top: 0,
        //   left: 0,
        
        // }}
      />
      <div className="overlay">
        <div className="caption">
          <h6>Work Harder, Get Stronger</h6>
          <h2>
            EASE WITH OUR 
            <em> GYM</em>
          </h2>
          <div>
            <button className='btn1'>Become a Member</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
