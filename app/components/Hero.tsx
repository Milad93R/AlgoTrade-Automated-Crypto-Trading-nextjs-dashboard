'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [floatingDots, setFloatingDots] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }>>([]);

  // For stat card particle animations
  const [statParticles, setStatParticles] = useState<Array<Array<{
    id: number;
    x: number;
    y: number;
  }>>>([]);
  
  // Animated circle variants
  const floatingCircleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 0.7,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        repeatDelay: 1,
      },
    }),
  };

  // Generate the floating dots only on the client side
  useEffect(() => {
    // Generate floating dots array
    const dots = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 4 + 3,
    }));
    
    setFloatingDots(dots);
    
    // Generate stat card particles (3 stat cards, 6 particles each)
    const particles = Array(3).fill(0).map(() => 
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100
      }))
    );
    
    setStatParticles(particles);
  }, []);

  return (
    <div id="home" className={`relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient circles */}
        <div className={`absolute top-0 left-1/4 w-96 h-96 ${isDark ? 'bg-indigo-900/30' : 'bg-indigo-200/50'} rounded-full filter blur-3xl animate-pulse-slow`}></div>
        <div className={`absolute bottom-0 right-1/4 w-[30rem] h-[30rem] ${isDark ? 'bg-purple-900/30' : 'bg-purple-200/50'} rounded-full filter blur-3xl animate-pulse-slower`}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        {/* Floating particles - only rendered on client side after useEffect runs */}
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.id}
            className={`absolute rounded-full ${isDark ? 'bg-indigo-500/30' : 'bg-indigo-400/30'}`}
            initial={{ 
              x: `${dot.x}%`, 
              y: `${dot.y}%`, 
              opacity: 0.3,
              scale: 0
            }}
            animate={{ 
              x: [`${dot.x}%`, `${dot.x + 5}%`, `${dot.x}%`],
              y: [`${dot.y}%`, `${dot.y + 5}%`, `${dot.y}%`],
              opacity: [0.3, 0.7, 0.3],
              scale: 1
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              width: dot.size,
              height: dot.size,
            }}
          />
        ))}
        
        {/* Animated rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`absolute left-1/2 top-1/2 rounded-full border ${isDark ? 'border-indigo-500/10' : 'border-indigo-600/10'}`}
            style={{ 
              width: `${i * 25}%`, 
              height: `${i * 25}%`,
              x: "-50%",
              y: "-50%",
            }}
            custom={i}
            variants={floatingCircleVariants}
            initial="hidden"
            animate="visible"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Styled badge above the title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-block mb-6 px-4 py-1 ${isDark ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-800'} rounded-full font-medium text-sm transform transition-transform hover:scale-105`}
          >
            PASSIVE CRYPTO TRADING
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}
          >
            Earn <span className="relative inline-block overflow-hidden">
              <span className={`bg-gradient-to-r ${isDark ? 'from-indigo-400 to-purple-400' : 'from-indigo-600 to-purple-600'} text-transparent bg-clip-text animate-text-shimmer bg-[length:200%_100%]`}>Passive Income</span>
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${isDark ? 'from-indigo-400/0 via-indigo-400 to-purple-400/0' : 'from-indigo-600/0 via-indigo-600 to-purple-600/0'} animate-width-expand`}></span>
            </span> With Our Automated Trading
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}
          >
            Join our proven crypto trading strategy and earn 90% of all profits.
            Our algorithm works 24/7 while you sit back and watch your gains grow.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Link 
              href="#" 
              className={`relative px-8 py-4 rounded-full ${isDark ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white text-center font-medium shadow-lg hover:shadow-xl shadow-indigo-500/20 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden group`}
            >
              <span className="relative z-10 flex items-center justify-center">
                Get Started
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              
              {/* Shimmering effect */}
              <span className="absolute top-0 left-0 w-20 h-full bg-white/10 transform -skew-x-20 translate-x-[-150%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out"></span>
              
              {/* Animated background gradient */}
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Animated corner accent */}
              <span className="absolute -top-1 -right-1 w-10 h-10 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-[5] origin-center"></span>
              
              {/* Pulsing ring */}
              <span className="absolute inset-0 rounded-full border-2 border-white/0 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500"></span>
            </Link>
            
            <Link
              href="#how-it-works"
              className={`relative px-8 py-4 rounded-full ${isDark ? 'bg-gray-800 text-indigo-400 hover:bg-gray-700 border border-gray-700' : 'bg-white text-indigo-600 hover:bg-gray-100 border border-gray-300'} text-center font-medium transform hover:scale-105 hover:-translate-y-1 transition-all overflow-hidden group`}
            >
              Learn More
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] ${isDark ? 'bg-indigo-400/50' : 'bg-indigo-600/50'} group-hover:w-full transition-all duration-300`}></span>
            </Link>
          </motion.div>
          
          {/* Stats with enhanced styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "72.4%", label: "Annual Return", delay: 0.4, icon: "chart" },
              { value: "90%", label: "Profit Share", delay: 0.5, icon: "wallet" },
              { value: "24/7", label: "Automated Trading", delay: 0.6, icon: "clock" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                className={`${isDark ? 'bg-gray-800/70 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} rounded-xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all relative overflow-hidden group`}
              >
                {/* Decorative corner accent */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-indigo-400/40 to-purple-400/40 rounded-bl-3xl"></div>
                
                <div className="relative z-10">
                  <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center mb-2`}>
                    {stat.icon === "chart" && (
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16L10.879 13.121C11.2571 12.7429 11.5024 12.5544 11.7803 12.4588C12.0582 12.3631 12.357 12.3631 12.6349 12.4588C12.9128 12.5544 13.1581 12.7429 13.6486 13.12L13.8586 13.2943C14.349 13.6714 14.5943 13.86 14.8723 13.9556C15.1502 14.0512 15.449 14.0512 15.7269 13.9556C16.0048 13.86 16.25 13.6714 16.7405 13.2943L20 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    )}
                    {stat.icon === "wallet" && (
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12C21 10.8954 20.1046 10 19 10H16C15.4477 10 15 10.4477 15 11V13C15 13.5523 15.4477 14 16 14H19C20.1046 14 21 13.1046 21 12Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M18 7V5C18 3.89543 17.1046 3 16 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H16C17.1046 21 18 20.1046 18 19V17" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    )}
                    {stat.icon === "clock" && (
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    <span>{stat.label}</span>
                  </div>
                  <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 inline-block group-hover:scale-110 transform transition-transform origin-left`}>
                    {stat.value}
                  </div>
                </div>
                
                {/* Animated hover effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
                
                {/* Interactive particle burst on hover - only rendered client-side */}
                {statParticles.length > 0 && (
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {statParticles[index]?.map((particle) => (
                      <div 
                        key={particle.id}
                        className={`absolute w-2 h-2 rounded-full ${isDark ? 'bg-indigo-400/30' : 'bg-indigo-500/30'}`}
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          animation: `particle-burst 1s ${particle.id * 0.1}s forwards`,
                          '--particle-x': `${particle.x}px`,
                          '--particle-y': `${particle.y}px`
                        } as React.CSSProperties}
                      />
                    ))}
                  </div>
                )}
                
                {/* Edge glow effect */}
                <div className="absolute inset-0 rounded-xl pointer-events-none">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 mx-auto w-6 h-10 rounded-full border-2 border-gray-400/20 flex items-start justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className={`w-1.5 h-3 ${isDark ? 'bg-indigo-400' : 'bg-indigo-600'} rounded-full mt-1`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 