import React, { useState } from 'react';

const VideoCarousel = () => {
  const videoList = [
    { url: '/videos/video.mp4', thumbnail: '/images/piano.png' },
    { url: '/videos/My video.mp4', thumbnail: '/images/orquesta.jpg' },
    { url: '/videos/video.mp4', thumbnail: '/images/violin.jpg' },
    // ... more videos
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to navigate to the next or previous video
  const navigate = (direction) => {
    setCurrentVideoIndex((prevIndex) => {
      const newIndex = direction === 'next'
        ? (prevIndex + 1) % videoList.length
        : (prevIndex - 1 + videoList.length) % videoList.length;
      return newIndex;
    });
  };

  return (
    <div className="flex flex-col relative items-center justify-center h-screen">
      <h2 className="text-4xl text-casal-500 font-bold my-4">Videoteca</h2>
      <div className="flex w-full items-center justify-between p-4">
      <button onClick={() => navigate('prev')} className="absolute z-10 carousel-button left-52 bottom-5 bg-transparent text-4xl">
        <span className="button_top">{"<"}
        </span>
      </button>
        <div className="flex w-full h-full items-center justify-center mx-4">
          <img
            src={videoList[(currentVideoIndex - 1 + videoList.length) % videoList.length].thumbnail}
            alt="Previous"
            className="w-1/5 h-auto cursor-pointer mx-2 border border-4 border-casal-500"
            onClick={() => navigate('prev')}
          />
          <video
            src={videoList[currentVideoIndex].url}
            controls
            className="w-3/5 h-auto max-w-none mx-2 border border-t-4 border-r-4 border-l-4 border-b-8 border-buddhagold-500"
          />
          <img
            src={videoList[(currentVideoIndex + 1) % videoList.length].thumbnail}
            alt="Next"
            className="w-1/5 h-auto cursor-pointer mx-2 border border-4 border-dovegray-500"
            onClick={() => navigate('next')}
          />
        </div>
        <button onClick={() => navigate('next')} className="absolute carousel-button z-10 right-52 bottom-5 bg-transparent text-4xl">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;