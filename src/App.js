import React, { useState, useEffect } from "react";

import './App.css';
import VideoCard from './VideoCard';
import db from "./firebase"

function App() {
  const [reels, setReels] = useState([])

  useEffect(() => {
    // App Component will run ONCE when it loads and never again {if we pass a empty dependency array}
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className="app">

      <div className="app__videos">
        {/* {container of app__videos (scrollable container)} */}

        {reels.map(({ channel, url, avatarSrc, song, likes, shares }) => (

          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />

        ))}


      </div>
    </div>
  );
}

export default App;


// install material ui for Icons
// npm install @material-ui/core
// npm install @material-ui/icons
// material-ui.com/components/icons/

// Install ticker (scrolling text)
// npm i react-ticker

// install firebase for hosting
// npm install -g firebase-tools

// npm i firebase


// firebase login
// firebase init
// npm run build
// firebase deploy

