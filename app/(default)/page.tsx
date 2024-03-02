'use client'
import React, { useState, useEffect } from 'react';
import Newsletter from '@/components/newsletter';
import SectionBreak from '@/components/sectionbreak'; 
import TextCard1 from '@/components/textcard1'; 
import ImageCard1 from '@/components/imagecard1';
import TextCard2 from '@/components/textcard2'; 
import ImageCard2 from '@/components/imagecard2';
import TextCard3 from '@/components/textcard3'; 
import ImageCard3 from '@/components/imagecard3';
import TextCard4 from '@/components/textcard4'; 
import ImageCard4 from '@/components/imagecard4';
import TextCard5 from '@/components/textcard5'; 
import ImageCard5 from '@/components/imagecard5';
import TextCard6 from '@/components/textcard6'; 
import ImageCard6 from '@/components/imagecard6';
import TextCard7 from '@/components/textcard7';
import  {metadata}  from "@/components/metadata"
import { motion } from 'framer-motion';
require('dotenv').config('/variables');

export default function Home() {

  const variants = {
    hidden: (isTextCard: boolean) => ({
      y: isTextCard ? -100 : 100, 
      opacity: 0,
    }),
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
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
          <TextCard1 />
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
          <TextCard2 />
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
          <TextCard3 />
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
          <TextCard4 />
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
          <TextCard5 />
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
        <div id="Noticias">
          <TextCard6 />
        </div>
      </motion.div>

      <motion.div
        custom={false} // This is where the custom prop is used
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ImageCard6 />
      </motion.div>

      <motion.div
        custom={true} // This is where the custom prop is used
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div id="Contacto">
          <TextCard7 />
        </div>
      </motion.div>
      <meta name="description" content={metadata.description} />
      <SectionBreak />
      <Newsletter />
    </div>
  )
}

