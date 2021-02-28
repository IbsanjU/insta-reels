
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="app">

      {/* <div className="app__top">

        {/* {image at top - logo} * /}
      <img className="app__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/100px-Instagram_logo_2016.svg.png" alt="" />

      {/* {Reels text } * /}
        <h1>Insta - Reels</h1>
      </div> */}

      <div className="app__videos">
        {/* {container of app__videos (scrollable container)} */}

        <VideoCard />
        <VideoCard />
        <VideoCard />

        {/* {<Video />} */}
        {/* {<Video />} */}
        {/* {<Video />} */}
      </div>
    </div>
  );
}

export default App;
