import img from './images/image1.jpg';
import './App.css';
import React from 'react';
function App() {
  return (
    <div >
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="titlered">Choose a product </h1>
          <br />
          <div>
          <img className='img1'src={img} alt='' />
          <br />
          <img className='img2' src='/images/image2.jpg'alt='' />
          </div>
          
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
  );
}

export default App;
