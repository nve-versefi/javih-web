import React, { useEffect, useRef } from 'react';

interface CarouselDataItem {
  _id: string;
  title: string;
  date: string;
  location: string;
  details: string;
  imageUrl: string;
}

interface CarouselCardProps {
  items: CarouselDataItem[];
  initialIndex?: number;
  selectedConcertIndex: number | null;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ items, initialIndex = 0, selectedConcertIndex }) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const carouselRef = useRef<HTMLDivElement>(null); // Add a ref to the carousel container
  
  useEffect(() => {
    if (selectedConcertIndex !== null && selectedConcertIndex !== currentIndex) {
      setCurrentIndex(selectedConcertIndex);
      scrollToConcert(selectedConcertIndex);
    }
  }, [selectedConcertIndex]);

  const scrollToConcert = (index: number) => {
    const carousel = carouselRef.current;
    const cardToScrollTo = carousel?.querySelector(`#card-${index}`);
  
    if (cardToScrollTo && carousel) {
      // Use type assertion here to treat cardToScrollTo as HTMLElement
      const scrollAmount = (cardToScrollTo as HTMLElement).offsetLeft - carousel.offsetLeft;
      carousel.scrollTo({
        left: scrollAmount - carousel.offsetWidth / 2 + (cardToScrollTo as HTMLElement).offsetWidth / 2,
        behavior: 'smooth'
      });
    }
  };
  

  const next = () => {
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    scrollToConcert(nextIndex);
  };

  const prev = () => {
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    scrollToConcert(prevIndex);
  };

  return (
    <div className="flex flex-col h-screen border border-2 border-casal-500 overflow-hidden">
      <h2 className="text-6xl text-center text-casal-500 font-bold my-8 mb-16">Conciertos</h2>
      <div ref={carouselRef} className="flex-grow w-full overflow-x-auto snap-x snap-mandatory custom-scrollbar">
        <div className="flex min-w-max">
          {items.map((item, index) => (
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
        <button onClick={prev} className="text-black hover:bg-blue-100 transition duration-300 ease-in-out">&lt;</button>
        <button onClick={next} className="text-black hover:bg-blue-100 transition duration-300 ease-in-out">&gt;</button>
      </div>
    </div>
  );
};

export default CarouselCard;
