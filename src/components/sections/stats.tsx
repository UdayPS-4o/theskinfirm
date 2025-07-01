'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='w-full mt-24 flex justify-center'
    >
      <div className='max-w-7xl w-full bg-[#F9EFE7] rounded-tl-4xl rounded-br-4xl md:rounded-tl-[100px] md:rounded-br-[100px] xl:rounded-tl-[1000px] xl:rounded-br-[1000px] py-12 px-4'>
        <div className='mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4 lg:gap-8'>
          <Stat property='YEARS' value={3} suffix='+' isInView={isInView} delay={0.1} />
          <Stat property='TREATMENTS OFFERED' value={60} suffix='+' isInView={isInView} delay={0.2} />
          <Stat property='HAPPY PATIENTS' value={4000} suffix='k' isInView={isInView} delay={0.3} />
          <Stat property='RATING ON GOOGLE' value={4.8} suffix='' isInView={isInView} delay={0.4} />
        </div>
      </div>
    </motion.div>
  )
}

function Stat({property, value, suffix, isInView, delay}: {
  value: number, 
  property: string, 
  suffix: string,
  isInView: boolean,
  delay: number
}){
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        
        return () => clearInterval(counter);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  const formatValue = (num: number) => {
    if (suffix === 'k' && num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1);
    }
    return num.toString();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className='text-center text-[#8A7B70]'
    >
      <h2 className='text-4xl sm:text-6xl md:text-6xl lg:text-6xl'>{formatValue(count)}{suffix}</h2>
      <p className='text-base sm:text-xl md:text-xl lg:text-xl'>{property}</p>
    </motion.div>
  )
}