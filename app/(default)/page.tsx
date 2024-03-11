'use client'
import React, { useState, useEffect } from 'react';
import Newsletter from '@/components/newsletter';
import SectionBreak from '@/components/sectionbreak'; 
import Landing from '@/components/landing'; 
import ImageCard1 from '@/components/imagecard1';
import Biografia from '@/components/biografia'; 
import ImageCard2 from '@/components/imagecard2';
import Videoteca from '@/components/videoteca'; 
import ImageCard3 from '@/components/imagecard3';
import Galeria from '@/components/galeria'; 
import ImageCard4 from '@/components/imagecard4';
import Conciertos from '@/components/conciertos'; 
import ImageCard5 from '@/components/imagecard5';
import Form from '@/components/form';
import Calendar from '@/components/calendar'
import  {metadata}  from "@/components/metadata"
import { motion } from 'framer-motion';
require('dotenv').config('/variables');
import  carouselData  from '@/components/carouselData'; 


export default function Home() {

  const variants = {
    hidden: (isTextCard: boolean) => ({
      y: isTextCard ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
        // When interrupted, use `onRest` to finalize the state
        // This property isn't directly available in Framer Motion but demonstrates the intent
        // You might need to implement a similar logic using Framer Motion's lifecycle events
        onRest: () => {
          // Logic to ensure animation reaches a "complete" state
          // This is a conceptual implementation. You'll need to adapt it based on actual event handling in Framer Motion
        },
      },
    },
  };
  
  const [selectedConcertIndex, setSelectedConcertIndex] = useState<number | null>(null);

  const handleSelectDate = (date: Date) => {
    const index = carouselData.findIndex(
      (concert) => new Date(concert.date).toDateString() === date.toDateString()
    );
    
    if (index !== -1) {
      setSelectedConcertIndex(index); // Update the selected concert index
    }
  };

  return (
    
    <div className="container mx-auto max-w-full p-0">
      <motion.div
        custom={true} 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div id="Landing">
          <Landing />
        </div>
      </motion.div>

      <motion.div
        custom={false} 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ImageCard1 />
      </motion.div>

      <motion.div
        custom={true} 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div id="Biografia">
          <Biografia />
        </div>
      </motion.div>

      <motion.div
        custom={false} 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ImageCard2 />
      </motion.div>
      
      <motion.div
        custom={true} // This is where the custom prop is used
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div id="Video">
          <Videoteca />
        </div>
      </motion.div>
      <motion.div
        custom={false} // This is where the custom prop is used
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ImageCard3 />
      </motion.div>

      <motion.div
        custom={true} // This is where the custom prop is used
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div id="Galeria">
          <Galeria />
        </div>
      </motion.div>


      <motion.div
        custom={false} // This is where the custom prop is used
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ImageCard4 />
      </motion.div>

      <motion.div
        custom={true} // This is where the custom prop is used
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div id="Conciertos">
          <Conciertos selectedConcertIndex={selectedConcertIndex}/>
        </div>
      </motion.div>

      <motion.div
        custom={false} // This is where the custom prop is used
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ImageCard5 />
      </motion.div>

      <motion.div
        custom={true} // This is where the custom prop is used
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div id="Contacto">
          <Form />
        </div>
      </motion.div>
      <meta name="description" content={metadata.description} />
      <Calendar onSelectDate={handleSelectDate}/>
      <Newsletter />
    </div>
  )
}

