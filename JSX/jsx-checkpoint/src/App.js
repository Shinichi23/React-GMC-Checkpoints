import React from 'react';
import './App.css';
import img from './imageInSrc.jpg';
import './style.css';

function App() {
  return (
    <div>
    <div style={{border:'solid 1px black',maxWidth:"100vw",}} className='backgroundImg'>  
 
    	<h1 className='titleRed'>JAPAN</h1>  
 
        	<br></br> 
 
            <img style ={{width:530, height:360 }} src={img} alt='Japan'/> 
            
            <br></br> 
 
             	<img style ={{width:640, height:440 }} src='./imageInPublic.jpg' alt='Japan'/>  
 
    </div>  
 
    {/*<video style ={{width:320, height:240 }} controls>  
 
        <source src='myVideo.mp4' type='video/mp4'/> 
 
  </video> (i did the task, but i didn't use this tag cause it doesn't work(it work but i don't have a video so it's not realy nice x))*/}

    </div>
  );
}

export default App;

