import React from 'react';

const TextCard: React.FC = () => {
    const title = "Card Title";
    const content = "This is the card content. It could be a description or any text.";
  
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-4">
        <h2 className="text-3xl text-purple-400 font-bold">{title}</h2>
        <p>{content}</p>
      </div>
    );
  };
  
  export default TextCard;
  