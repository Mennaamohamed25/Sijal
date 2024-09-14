import React, { useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Components
import Header from '../Component/Header';
import Service from '../Component/Services';
import Aboutus from '../Component/AboutUs';
import Benefits from '../Component/Benefits';
import Customers from '../Component/Customer';

// Define animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 }, // Initial state
  visible: {
    opacity: 1,
    y: 0,
    scale: 1, // Final state
    transition: { duration: 0.8, ease: 'easeOut' }, // Animation properties
  },
};

const Section = ({ children }) => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // Define handleScroll function and memoize it
  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (section) {
      const { top, bottom } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom > 0) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }
  }, [controls]);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, [handleScroll]); // Include handleScroll in dependencies

  return (
    <motion.div
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <Header />

      <Section>
        <Service />
      </Section>

      <Section>
        <Aboutus />
      </Section>

      <Section>
        <Benefits />
      </Section>

      <Section>
        <Customers />
      </Section>
    </>
  );
};

export default Home;
