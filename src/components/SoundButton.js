import React, { useRef, useEffect, useState } from 'react';


const SoundButton = () => {
  const [audio] = useState(new Audio('/SoundEffect.mp3'));
  const playArr = () => {
    audio.play();
  }
  return (
    <>
    <button className='h-10 w-40 text-base bg-red-50' onClick={playArr}>
      CLick here
    </button>
    </>
  );
};

export default SoundButton;