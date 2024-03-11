import React from 'react';

const ImageCard: React.FC = () => {
  const imageUrl = "/images/trumpet.jpg";
  const altText = "An example image";
  const text = "Videoteca";

  return (
    <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0"
           style={{
             background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.65) 100%)'
           }}>
      </div>
      <img src={imageUrl} alt={altText} className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <p className="text-white text-6xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default ImageCard;
