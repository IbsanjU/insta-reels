
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

        <VideoCard 
        channel='IbsanjU'
        avatarSrc='https://instagram.fblr12-1.fna.fbcdn.net/v/t51.2885-19/s150x150/107183619_292778475108056_5734099724457939344_n.jpg?tp=1&_nc_ht=instagram.fblr12-1.fna.fbcdn.net&_nc_ohc=BYxKrqb0RzcAX-9gIyv&oh=6300127feedcef6dc4b3fe5b5465a0ac&oe=6063C262'
        song='Test song from ayyan dance'
        url='https://scontent-lga3-1.cdninstagram.com/v/t50.2886-16/10000000_741852866761920_5170221104726327227_n.mp4?_nc_ht=instagram.fblr12-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=vAe9AQEf3j0AX8phtj0&oe=603D7807&oh=829852f07b8ba9627a06c7f8d696fc33&dl=1'
        likes={103}
        shares={4}
        
        />
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


// install material ui for Icons
// npm install @material-ui/core
// npm install @material-ui/icons
// material-ui.com/components/icons/