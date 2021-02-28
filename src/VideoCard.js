import React from 'react'
import './VideoCard.css';

function VideoCard() {
   return (
      <div className="videoCard">

         <video
            className='videoCard__player'
            src='https://instagram.fblr4-3.fna.fbcdn.net/v/t50.2886-16/154672544_479475859885940_8073566213492588354_n.mp4?_nc_ht=instagram.fblr4-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=xgQfFa7Y-mgAX_6RhHt&oe=603BEA53&oh=97f9c8e67adf91d16712222dc4dcf8b0'
            alt='insta reel video'
            loop
         />

      </div>
   )
}

export default VideoCard


