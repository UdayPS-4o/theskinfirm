"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MaxWidthWrapper } from '../layout/max-width';

export default function AboutStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <MaxWidthWrapper>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full px-6 lg:px-20 py-16 bg-[#FBEDE4] rounded-bl-[150px] rounded-tr-[150px] mb-14"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 text-center text-[#86796F] font-inter">
          <StatItem value={5} suffix="+" label="YEARS" isInView={isInView} delay={0.1} />
          <StatItem value={60} suffix="+" label="TREATMENTS OFFERED" isInView={isInView} delay={0.2} />
          <StatItem value={2000} suffix="k" label="HAPPY PATIENTS" isInView={isInView} delay={0.3} />
          <a
            href="https://www.google.com/search?q=The+Skin+Firm+%7C+Laser+Skin+%26+Hair+Clinic+NIBM+Mohammed+Wadi+Reviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StatItem value={4.9} suffix="" label="RATING ON GOOGLE" isInView={isInView} delay={0.4} />
          </a>
        </div>
      </motion.section>
    </MaxWidthWrapper>
  );
}

function StatItem({
  value,
  suffix,
  label,
  isInView,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const duration = 1200;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(interval);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(interval);
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [isInView, value, delay]);

  const formatted = suffix === 'k' && value >= 1000
    ? `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}`
    : count.toString();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <p className="text-4xl font-semibold">{formatted}{suffix}</p>
      <p className="text-sm mt-1 tracking-wide">{label}</p>
    </motion.div>
  );
}
