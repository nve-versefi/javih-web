import React, { useState } from 'react';

// Define your image paths here
const imagePaths = [
  '/images/cactus.jpg',
  '/images/lazo.jpg',
  '/images/astronauta.jpg',
  '/images/objetivo.jpg',
  '/images/piano.png',
  '/images/trumpet.jpg',
  '/images/violin.jpg',
  '/images/drums.jpeg',
  // ...add as many images as you have
];

const CarouselCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateCarousel = (forward: boolean) => {
    setCurrentIndex((prevIndex) => {
      if (forward) {
        return (prevIndex + 1) % imagePaths.length;
      } else {
        return (prevIndex - 1 + imagePaths.length) % imagePaths.length;
      }
    });
  };

  // Calculate the indexes for the visible images
  const getVisibleIndexes = (centerIndex: number) => {
    const totalImages = imagePaths.length;
    let indexes = [];

    for (let i = -2; i <= 2; i++) {
      indexes.push((centerIndex + i + totalImages) % totalImages);
    }

    return indexes;
  };

  const visibleIndexes = getVisibleIndexes(currentIndex);

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      {/* Title section */}
      <div className="flex justify-center items-center h-1/12">
        <h2 className="text-5xl mb-8 font-bold text-casal-500">Galería</h2>
      </div>

      {/* Carousel section */}
      <div className="flex flex-col justify-center items-center h-11/12 relative">
      <button
  onClick={() => navigateCarousel(false)}
  className="absolute left-10 z-20 galery-button text-4xl p-2 bg-white text-casal-500 rounded-full flex justify-center items-center shadow-lg ring-8 ring-white ring-offset-2 ring-offset-transparent"
>
  &#60;
</button>

        <div className="flex justify-center items-center h-full mx-12">
          {visibleIndexes.map((index) => {
            const imagePath = imagePaths[index];
            let scale = 'scale-75 opacity-75'; // Adjusted default scale for side images
            let zIndex = 'z-0'; // Default z-index for non-center images

            // Customize the scale and opacity for the center image
            if (index === currentIndex) {
              scale = 'scale-100 opacity-100';
              zIndex = 'z-10';
            }

            // Customize for immediate neighbors
            const neighborIndexes = [
              (currentIndex - 1 + imagePaths.length) % imagePaths.length,
              (currentIndex + 1) % imagePaths.length,
            ];
            if (neighborIndexes.includes(index)) {
              scale = 'scale-90 opacity-90';
              zIndex = 'z-5';
            }

            return (
              <img
                key={imagePath}
                src={imagePath}
                alt={`Carousel item ${index}`}
                className={`transition-all ease-in-out duration-500 transform ${scale} ${zIndex} object-cover w-1/5`}
                style={{ height: '70vh' }} // Adjusted height for images
              />
            );
          })}
        </div>
        <button
  onClick={() => navigateCarousel(false)}
  className="absolute galery-button right-10 z-20 text-4xl p-2 bg-white text-casal-500 rounded-full flex justify-center items-center shadow-lg ring-8 ring-white ring-offset-2 ring-offset-transparent"
>
  &#62;
</button>
      </div>
    </div>
  );
};

export default CarouselCard;
