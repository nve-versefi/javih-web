'use client'
import React, { useEffect, useRef, useState } from 'react';


const ParallaxPage: React.FC = () => {
  const armRef = useRef<HTMLImageElement>(null);
  const batonRef = useRef<HTMLImageElement>(null);
  const [typedText, setTypedText] = useState(''); // Use a different name like typedText
  const fullText = 'Javier Hermosa Conductor';
 
  // Function to apply transformations
  const applyTransformations = (scrollRatio) => {
    const armRotation = scrollRatio * 35; // Starting rotation angle for the arm
    const batonLowerDistance = scrollRatio * 20; // Lowering distance for the baton
    const batonRotation = scrollRatio * -160; // Rotation angle for the baton

    if (armRef.current) {
      armRef.current.style.transform = `rotate(${armRotation}deg)`;
    }

    if (batonRef.current) {
      batonRef.current.style.transform = `translateY(${batonLowerDistance}px) rotate(${batonRotation}deg)`;
    }
  };
  

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollRatio = scrollPosition / window.innerHeight;
      applyTransformations(scrollRatio);
    };

    // Apply initial transformations
    applyTransformations(0);

    // Set up scroll event listener
    window.addEventListener('scroll', handleScroll);

    let currentText = '';
    let index = 0;
    const typeInterval = setInterval(() => {
      currentText += fullText.charAt(index);
      setTypedText(currentText);
      index++;
      if (index === fullText.length) {
        clearInterval(typeInterval);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, []); 
  const splitIndex = fullText.indexOf(' Conductor'); // Finds the index where "Conductor" starts
  const firstName = typedText.substring(0, splitIndex);
  const titleName = typedText.substring(splitIndex);
  return (
    < div className="parallax-container" style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h1 className="title-container">
        <span className="first-name">{firstName}</span>
        <span className="title-name">{titleName}</span>
    
    </h1>
    <div style={{
      position: 'absolute',
      top: '60%',
      borderRadius: '20px',
      left: '10%', // Adjust to move the box left or right
      transform: 'translateY(-50%)',
      width: '400px', // Adjust the width as necessary
      textAlign: 'center',
      padding: '1rem',
      color: '#21586B', // Set the text color
      fontSize: '22px', // Set the text size
      fontWeight: 'medium',
      backgroundColor: '#fff', // Set background color of the box
      border: '4px solid #21586B',
      zIndex: 2,
    }}>
      <p>“Esta temporada, la segunda a cargo de su director
titular y artístico Javier Hermosa Sánchez, se presenta
interesante. Cuentan con unos músicos con un gran
nivel, liderados por un joven y carismático entusiasta
director que trabaja con el grupo a un buen ritmo.”</p>
      <div style={{
  position: 'absolute',
  bottom: '-40px',
  left: '50%',
  transform: 'translateX(+20%)',
  backgroundColor: '#716969',
  color: '#000',
  width: '240px',
  textAlign: 'left',
  fontWeight: 'bold',
  paddingLeft: '8px',
  height: '60px',
  lineHeight: '60px',
  clipPath: 'polygon(0 0, 0 100%, 100% 100%, 80% 50%, 100% 0)',
  // Shadows on the top-right and bottom-left corners
  // Actual border for the top and bottom edges
  zIndex: 2,
}}>
  La Voz de la A6
</div>
    </div>
      {/* Static body image */}
      <img src="/images/Director.png" alt="Static Body" style={{ position: 'absolute', height: '80vh', bottom: '0', zIndex: 2 }} />
      
      {/* Isolated arm image */}
      <img
        ref={armRef}
        src="/images/Arm2.png"
        alt="Moving Arm"
        style={{
          position: 'absolute',
          height: '25vh', // Adjust if necessary
          top: '39%', // Centers the arm vertically; adjust as needed
          left: '39.7%',
          // Initial transform, including a slight initial rotation if needed
          transform: 'translate(0%, 0%) rotate(15deg)', // Adjust these values as necessary
          transformOrigin: 'bottom left', // Set to the elbow or shoulder position
          zIndex: 1 // Ensure the arm is above the body image
        }}
      />
      
      {/* Baton image */}
      <img
        ref={batonRef}
        src="/images/Baton.png"
        alt="Moving Baton"
        style={{
          position: 'absolute',
          height: '14vh', // Adjust if necessary
          top: '27%', // Centers the arm vertically; adjust as needed
          left: '36%',
          transform: 'translate(-10%, -50%) rotate(-35deg)', // Adjust as necessary
          transformOrigin: 'top left', // Set to where the baton is held
          zIndex: 3 // Ensure the baton is above the arm image
        }}
      />
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '10%', // Adjust to move the box left or right
        transform: 'translateY(-50%)',
        borderRadius: '20px',
        width: '400px', // Adjust the width as necessary
        padding: '1rem',
        color: '#21586B', // Set the text color
        fontSize: '22px', // Set the text size
        fontWeight: 'medium',
        backgroundColor: '#fff', // Set background color of the box
        border: '4px solid #21586B',
        textAlign: 'center',
        zIndex: 2,
 
      }}>
        <p>“Además, de la mano de su director Javier Hermosa
Sánchez han impregnado los ambientes de juventud,
talento y carisma, con interpretaciones llenas de
emoción y nuevas propuestas muy interesantes para
escuchar música.”</p>
<div style={{
  position: 'absolute',
  bottom: '-40px',
  left: '50%',
  transform: 'translateX(+20%)',
  backgroundColor: '#716969',
  color: '#000',
  width: '240px',
  textAlign: 'left',
  fontWeight: 'bold',
  paddingLeft: '8px',
  height: '60px',
  lineHeight: '60px',
  clipPath: 'polygon(0 0, 0 100%, 100% 100%, 80% 50%, 100% 0)',
  zIndex: 2,
}}>
          Adesgam
        </div>
      
      </div>
    </div>
  );
};

export default ParallaxPage;
