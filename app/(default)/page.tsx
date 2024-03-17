'use client'
import React, { createContext, useContext, useState } from 'react';
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
       
        onRest: () => {
         
        },
      },
    },
  };
  
  const handleSelectDate = (date: Date) => {
    const index = concertItems.findIndex(
      (concert) => new Date(concert.date).toDateString() === date.toDateString()
    );
  
    if (index !== -1) {
      setSelectedConcertIndex(index);
      // Navigate to Carousel component if necessary
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
        custom={true}
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
        custom={false} 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ImageCard3 />
      </motion.div>

      <motion.div
        custom={true} 
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
        custom={false} 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ImageCard4 />
      </motion.div>

      <motion.div
        custom={true} 
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
        custom={false} 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ImageCard5 />
      </motion.div>

      <div className="flex flex-wrap justify-between items-start mb-16 gap-4 mt-40">
          <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-3xl text-casal-500 font-bold text-center">Formulario de contacto</h2>
            <Form/>
        </div>
          <div className="flex flex-col w-full md:w-1/2 lg:w-5/12">
            <div className="mb-4">
              <h2 className="text-3xl text-casal-500 font-bold text-center">Calendario</h2>
                <div className="w-full ">
                  <Calendar onSelectDate={handleSelectDate} />
                </div>         
            </div>
          </div>
      </div>

      <Newsletter />

    </div>
  )

  }
 
