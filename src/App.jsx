import './App.css';

import React from 'react'
import Menu from './components/Menu/Menu';
import VideoBackGround from './components/VideoBackGround';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Cars from './components/Cars/Cars';

const App = () => {
  return (
    <div className='app'>
    <VideoBackGround />
    <Menu />
    <Navbar />
    <Container />
    <Cars />
    </div>
  )
}

export default App;