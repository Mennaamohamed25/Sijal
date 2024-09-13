import React from 'react';
import { motion } from 'framer-motion';

import Header from '../Component/Header';
import Service from '../Component/Services';
import Aboutus from '../Component/AboutUs';
import Benefits from '../Component/Benefits';
import Customers from '../Component/Customer';

// Define variants for each section with more dynamic animation
const sectionVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 }, // Start with opacity 0, translateY 100px, and a slight shrink
  visible: {
    opacity: 1,
    y: 0,
    scale: 1, // As the component becomes visible, it returns to its original scale and position
    transition: { duration: 0.8, ease: 'easeOut' }, // Smooth transition timing
  },
};

const Home = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} // Animation triggers every time 20% of the section is in view
        variants={sectionVariants}
      >
        <Header />
      </motion.div>

        <Service />
    

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
      >
        <Aboutus />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
      >
        <Benefits />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={sectionVariants}
      >
        <Customers />
      </motion.div>
    </>
  );
};

export default Home;
