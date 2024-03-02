import React from 'react';

const ImageCard: React.FC = () => {
    // Example image URL and alt text
    const imageUrl = "/images/drums.jpg";
    const altText = "An example image";
  
    return (
      <div className="h-screen flex justify-center items-center">
        <img src={imageUrl} alt={altText} className="object-cover w-full h-full" />
      </div>
    );
  };
  
  export default ImageCard;
