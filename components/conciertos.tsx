import React, { useState, useEffect } from 'react';
import carouselData from './carouselData';

interface CarouselCardProps {
  initialIndex?: number;
  selectedConcertIndex: number | null;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ initialIndex = 0, selectedConcertIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
    
  // States to control the visual effect of each button
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  
  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
    triggerClickEffect('next');
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
    triggerClickEffect('prev');
  };

  // Function to handle the visual feedback for button clicks
  const triggerClickEffect = (button: 'next' | 'prev') => {
    if (button === 'next') {
      setNextClicked(true);
      setTimeout(() => setNextClicked(false), 300); // Reset after 300ms
    } else {
      setPrevClicked(true);
      setTimeout(() => setPrevClicked(false), 300); // Reset after 300ms
    }
  };
  useEffect(() => {
    if (selectedConcertIndex !== null) {
      setCurrentIndex(selectedConcertIndex);
      // Scroll the card into view
      const cardToScrollTo = document.getElementById(`card-${selectedConcertIndex}`);
      cardToScrollTo?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }, [selectedConcertIndex]);
  return (
    <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">
      <h2 className="text-6xl text-center text-casal-500 font-bold my-8 mb-16">Conciertos</h2>
      <div className="flex-grow w-full overflow-x-auto snap-x snap-mandatory custom-scrollbar">
        <div className="flex min-w-max">
          {carouselData.map((item, index) => (
            <div
            id={`card-${index}`} 
            key={index}
            className={`snap-center shrink-0 first:pl-4 last:pr-4 mx-2 min-w-[30%]`}
          >
              <div className="flex flex-col items-center p-8 mx-8 bg-white shadow rounded-lg">
                <div className="w-full h-80 relative mb-4">
                  <img src={item.imageUrl} alt={item.title} className="absolute inset-0 mb-8 w-full h-full object-cover" />
                </div>
                <h3 className="text-5xl text-black font-bold mb-4">{item.title}</h3>
                <p className="text-2xl text-black mb-4">{item.date}</p>
                <p className="text-2xl text-black mb-4">{item.location}</p>
                <p className="text-2xl text-black mb-4">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between absolute w-full bottom-0 pb-4 px-4">
        <button
          onClick={prev}
          className={`text-black ${prevClicked ? 'bg-blue-500 shadow-xl' : 'hover:bg-blue-100'} transition duration-300 ease-in-out`}
        >
          &lt;
        </button>
        <button
          onClick={next}
          className={`text-black ${nextClicked ? 'bg-blue-500 shadow-xl' : 'hover:bg-blue-100'} transition duration-300 ease-in-out`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CarouselCard;