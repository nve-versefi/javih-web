import React from 'react';

const cardTitle = "Biography";
const cardText1 = "Esta temporada, la segunda a cargo de su director titular y artístico Javier Hermosa Sánchez, se presenta interesante. Cuentan con unos músicos con un gran nivel, liderados por un joven y carismático entusiasta director que trabaja con el grupo a un buen ritmo.";
const cardText2 = "Además, de la mano de su director Javier Hermosa Sánchez han impregnado los ambientes de juventud, talento y carisma, con interpretaciones llenas de emoción y nuevas propuestas muy interesantes para escuchar música.";
const cardImage1Url = "/images/orquesta.jpg"; 
const cardImage2Url = "/images/orquesta.jpg"; 

const TextCard: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-white-500 p-4">
      <div className="m-auto grid grid-rows-2 grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <p className="text-left text-3xl text-black mx-8">{cardText1}</p>
        </div>
        <div className="flex justify-center items-center">
          <img src={cardImage1Url} alt="Orquesta" className="h-72 w-auto object-scale-down" />
        </div>
        <div className="flex justify-center items-center">
          <img src={cardImage2Url} alt="Arpa" className="h-72 w-auto object-scale-down" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-left text-3xl text-black mx-8">{cardText2}</p>
        </div>
      </div>
    </div>
  );
};

export default TextCard;

