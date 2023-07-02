import videoTaxi from '../assets/videotaxi.mp4';
import React from 'react';

const VideoBackGround = () => {
  const style = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    margin: 0,
    padding: 0,
  };

  return <video style={style} src={videoTaxi} autoPlay loop muted></video>;
};

export default VideoBackGround;
