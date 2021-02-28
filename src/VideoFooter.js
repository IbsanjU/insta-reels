import React from 'react'
import './VideoFooter.css'
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import FavouriteIcon from "@material-ui/icons/Favorite"
import ModeCommentIcon from "@material-ui/icons/ModeComment"
import SendIcon from "@material-ui/icons/Send"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

function VideoFooter({ channel, avatarSrc, song, likes, shares }) {
   return (
      <div className='VideoFooter'>
         <div className='VideoFooter__text'>
            <Avatar src={avatarSrc} />
            <p>{channel}<span>•</span><Button>Follow</Button></p>
         </div>
         <div className='VideoFooter__ticker'>
            <MusicNoteIcon className="VideoFooter__icon" />
            <Ticker mode='smooth'>
               {({ index }) => (
                  <>
                     {/* <p> {song}  </p>  */}
                     <p>{song + '  •  '}</p>
                  </>
               )}
            </Ticker>
         </div>
         <div className='VideoFooter__actions'>
            <div className='VideoFooter__actionsLeft'>
               <FavouriteIcon />
               <ModeCommentIcon />
               <SendIcon />
               <MoreHorizIcon />
            </div>
            <div className='VideoFooter__actionsRight'>
               <div className='VideoFooter__stat'>
                  <FavouriteIcon />
                  <p>{likes}</p>
               </div>
               <div className='VideoFooter__stat'>
                  <ModeCommentIcon />
                  <p>{shares}</p>
               </div>
            </div>


         </div>
      </div>
   )
}

export default VideoFooter
