import React, { useState, useRef } from 'react'
import './VideoCard.css';
import VideoHeader from './VideoHeader'

function VideoCard() {
   // useState hook
   // useRef

   const [isVideoPlaying, setIsVideoPlaying] = useState(false); // use a variable in react
   const videoRef = useRef(null); // poiniting any element on the page // safe to give initial value to null

   const onVideoPress = () => {
      if (isVideoPlaying) {
         // stop video
         videoRef.current.pause();
         setIsVideoPlaying(false);
      } else {
         // play video
         videoRef.current.play();
         setIsVideoPlaying(true);
      }
   }

   return (
      <div className="videoCard">
         <VideoHeader />

         <video
            ref={videoRef}
            onClick={onVideoPress}
            className='videoCard__player'
            src='https://scontent-lga3-1.cdninstagram.com/v/t50.2886-16/10000000_741852866761920_5170221104726327227_n.mp4?_nc_ht=instagram.fblr12-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=vAe9AQEf3j0AX8phtj0&oe=603D7807&oh=829852f07b8ba9627a06c7f8d696fc33&dl=1'
            alt='insta reel video'
            loop
         />

      </div>
   )
}

export default VideoCard


