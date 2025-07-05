"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  review: string;
}

export default function ReviewSection({ testimonials }: { testimonials: Testimonial[] }) {

  return (
    <section className="bg-[color:var(--color-light-background-alt)] px-4 sm:px-6 lg:px-20 py-20 my-10">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1
            }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="mb-12 text-center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }}
        >
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-[22px] leading-tight lg:leading-[28px] text-transparent bg-gradient-to-r from-[color:var(--color-primary-orange)] to-[color:var(--color-primary-brown)] bg-clip-text font-semibold tracking-wider mb-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
          >
            -------- Reviews --------
          </motion.p>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] leading-tight lg:leading-[60px] text-[color:var(--color-text-dark-gray)] font-bold tracking-tight"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }
            }}
            whileHover={{ 
              scale: 1.02,
              color: "#ec7754",
              transition: { duration: 0.3 }
            }}
          >
            <span className="bg-gradient-to-r from-[color:var(--color-text-dark-gray)] via-[color:var(--color-text-medium-gray)] to-[color:var(--color-text-dark-gray)] bg-clip-text text-transparent">
              Meet Our Customers
            </span>
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="relative border border-[color:var(--color-light-border)] rounded-2xl bg-gradient-to-br from-white via-[color:var(--color-light-background-alt-2)] to-[color:var(--color-light-background-alt-3)] p-6 flex flex-col gap-4 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 40 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(236, 119, 84, 0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary-orange)]/5 to-[color:var(--color-primary-brown)]/5 rounded-2xl opacity-0 group-hover:opacity-100"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Stars */}
              <motion.div 
                className="text-[color:var(--color-primary-orange)] text-sm relative z-10"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: "easeOut"
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      color: "var(--color-primary-brown)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <FontAwesomeIcon icon={faStar} className="mr-1" />
                  </motion.span>
                ))}
              </motion.div>
              
              {/* Review text */}
              <motion.p 
                className="text-sm text-[color:var(--color-text-dark-blue)] leading-relaxed relative z-10 italic"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <span className="text-[color:var(--color-primary-orange)] text-lg font-bold">&ldquo;</span>
                <span className="text-[color:var(--color-text-dark-blue)]">{testimonial.review}</span>
                <span className="text-[color:var(--color-primary-orange)] text-lg font-bold">&rdquo;</span>
              </motion.p>
              
              {/* User info */}
              <motion.div 
                className="flex items-center gap-4 mt-auto pt-4 relative z-10"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--color-primary-orange)] to-[color:var(--color-primary-brown)] flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {testimonial.name.charAt(0)}
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <motion.h4 
                    className="font-semibold text-[color:var(--color-text-dark-blue)] text-sm"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: "easeOut"
                        }
                      }
                    }}
                    whileHover={{ 
                      color: "var(--color-primary-orange)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {testimonial.name}
                  </motion.h4>
                  <motion.p 
                    className="text-xs text-gray-600"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: "easeOut"
                        }
                      }
                    }}
                  >
                    {testimonial.company}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}