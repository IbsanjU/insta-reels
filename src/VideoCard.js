import React, { useState, useRef } from 'react'
import './VideoCard.css';
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'

function VideoCard({ channel, url, avatarSrc, song, likes, shares }) {
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
            src={url}
            alt='insta reel video'
            loop
         />

         <VideoFooter
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            likes={likes}
            shares={shares} />
      </div>
   )
}

export default VideoCard


