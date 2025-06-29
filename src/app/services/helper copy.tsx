'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import treatmentsData from '@/data/treatments.json';

type TabKey = "skin" | "hair" | "laser";

interface HelperProps {
  activeTab: TabKey;
}

const Helper: React.FC<HelperProps> = ({ activeTab }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentData, setCurrentData] = useState(treatmentsData[activeTab]);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  // Initialize all sections as expanded when data changes
  useEffect(() => {
    const initialExpanded: {[key: string]: boolean} = {};
    treatmentsData[activeTab].sections.forEach((section) => {
      initialExpanded[section.title] = true; // All sections start uncollapsed
    });
    setExpandedSections(initialExpanded);
  }, [activeTab]);

  useEffect(() => {
    if (currentData !== treatmentsData[activeTab]) {
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setCurrentData(treatmentsData[activeTab]);
        setIsTransitioning(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [activeTab, currentData]);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  return (
    <div className="flex flex-col gap-[20px] w-full">
      {currentData.sections.map((section) => {
        const isExpanded = expandedSections[section.title] ?? true;
        
        return (
          <div
            key={section.title}
            className="mb-[20px] last:mb-0"
          >
            <div className="bg-white border border-[#E6E6E6] rounded-[10px] p-[26px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-full">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection(section.title)}
              >
                <h2 className="text-[#D4A380] text-[24px] font-semibold leading-[24px] uppercase m-0">
                  {section.title}
                </h2>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M25 20L15 10L5 20"
                    stroke="#333333"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="mt-[32px] relative overflow-hidden">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-[24px]">
                    {/* Ripple effect overlay */}
                    <AnimatePresence>
                      {isTransitioning && (
                        <motion.div
                          className="absolute inset-0 pointer-events-none z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.1 }}
                        >
                          <motion.div
                            className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-[#D4A380]/30 to-[#D4A380]/10 rounded-full"
                            initial={{
                              scale: 0,
                              x: '-50%',
                              y: '-50%',
                              opacity: 0.8
                            }}
                            animate={{
                              scale: 50,
                              opacity: 0
                            }}
                            transition={{
                              duration: 0.6,
                              ease: "easeOut"
                            }}
                          />
                          <motion.div
                            className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-[#D4A380]/20 to-transparent rounded-full"
                            initial={{
                              scale: 0,
                              x: '-50%',
                              y: '-50%',
                              opacity: 1
                            }}
                            animate={{
                              scale: 60,
                              opacity: 0
                            }}
                            transition={{
                              duration: 0.8,
                              ease: "easeOut",
                              delay: 0.1
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {section.treatments.map((treatment: any, treatmentIndex) => (
                      <motion.div
                        key={`treatment-${treatmentIndex}`}
                        className="bg-white border border-[#E6E6E6] rounded-[10px] p-[12px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-full hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                        initial={false}
                        animate={{
                          scale: isTransitioning ? 0.98 : 1
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut"
                        }}
                      >
                        <div className="flex gap-[16px] items-start">
                          {/* Image container with smooth blending */}
                          <div className="w-[140px] h-[140px] flex-shrink-0 rounded-[8px] overflow-hidden relative">
                            <AnimatePresence mode="wait">
                              <motion.img
                                key={`${activeTab}-${treatment?.imageSrc}`}
                                src={treatment?.imageSrc || "https://picsum.photos/id/27/200/200"}
                                alt={treatment?.title || "Treatment"}
                                className="w-full h-full object-cover absolute inset-0"
                                initial={{
                                  opacity: 0,
                                  scale: 1.1,
                                  filter: "blur(4px)"
                                }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                  filter: "blur(0px)"
                                }}
                                exit={{
                                  opacity: 0,
                                  scale: 0.9,
                                  filter: "blur(2px)"
                                }}
                                transition={{
                                  duration: 0.5,
                                  ease: "easeInOut",
                                  delay: treatmentIndex * 0.1
                                }}
                              />
                            </AnimatePresence>
                          </div>
                          
                          {/* Text content with smooth transformations */}
                          <div className="flex-1 flex flex-col justify-start">
                            <AnimatePresence mode="wait">
                              <motion.h3
                                key={`${activeTab}-title-${treatment?.title}`}
                                className="text-[#D4A380] text-[16px] font-semibold leading-[20px] tracking-[-0.1px] m-0 mb-[8px]"
                                initial={{
                                  opacity: 0,
                                  y: 20,
                                  filter: "blur(2px)"
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                  filter: "blur(0px)"
                                }}
                                exit={{
                                  opacity: 0,
                                  y: -10,
                                  filter: "blur(1px)"
                                }}
                                transition={{
                                  duration: 0.4,
                                  ease: "easeOut",
                                  delay: treatmentIndex * 0.05 + 0.1
                                }}
                              >
                                {treatment?.title || "Treatment Title"}
                              </motion.h3>
                            </AnimatePresence>
                            
                            <AnimatePresence mode="wait">
                              <motion.p
                                key={`${activeTab}-desc-${treatment?.description}`}
                                className="text-[#333333] text-[13px] font-normal leading-[18px] tracking-[-0.05px] m-0 mb-[12px] line-clamp-4 overflow-hidden"
                                initial={{
                                  opacity: 0,
                                  y: 15,
                                  filter: "blur(2px)"
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                  filter: "blur(0px)"
                                }}
                                exit={{
                                  opacity: 0,
                                  y: -5,
                                  filter: "blur(1px)"
                                }}
                                transition={{
                                  duration: 0.5,
                                  ease: "easeOut",
                                  delay: treatmentIndex * 0.05 + 0.2
                                }}
                              >
                                {treatment?.description || "Treatment description"}
                              </motion.p>
                            </AnimatePresence>
                            
                            <motion.div 
                              className="flex items-center gap-[6px] cursor-pointer group"
                              animate={{
                                opacity: isTransitioning ? 0.5 : 1
                              }}
                              transition={{
                                duration: 0.3,
                                delay: treatmentIndex * 0.05 + 0.3
                              }}
                            >
                              <span className="text-[#000000] text-[12px] font-medium leading-[16px] group-hover:text-[#333333] transition-colors duration-300">
                                Learn More
                              </span>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="group-hover:translate-x-[2px] transition-transform duration-300"
                              >
                                <path
                                  d="M2.33333 1H9V7.66667M9 1L1 9L9 1Z"
                                  stroke="#D4A380"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Helper;