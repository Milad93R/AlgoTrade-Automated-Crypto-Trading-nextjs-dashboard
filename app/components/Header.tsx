'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'how-it-works', 'performance', 'faq'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Performance', href: '#performance', id: 'performance' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Invest', href: '/invest', id: 'invest' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 py-3 shadow-md backdrop-blur-lg' 
        : 'bg-white/70 dark:bg-gray-900/70 py-5 backdrop-blur-md'
    }`}>
      {/* Decorative header elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-4 top-0 w-24 h-24 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full filter blur-xl"></div>
        <div className="absolute right-1/4 top-0 w-20 h-20 bg-purple-400/10 dark:bg-purple-600/10 rounded-full filter blur-xl"></div>
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-300/50 dark:via-indigo-600/50 to-transparent"></div>
        )}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-70 group-hover:opacity-100 blur group-hover:blur-md transition-all duration-300"></div>
                <span className="relative flex items-center justify-center w-9 h-9 bg-white dark:bg-gray-800 rounded-full border border-indigo-100 dark:border-indigo-900 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text z-10">
                  A
                </span>
              </div>
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text animate-text-shimmer">
                AtVest
              </span>
              <div className="ml-2 hidden sm:flex items-center px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40">
                <span className="animate-pulse w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                <span className="text-xs font-medium text-indigo-800 dark:text-indigo-300">Live</span>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === item.id
                      ? 'text-indigo-700 dark:text-indigo-300'
                      : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-indigo-100 dark:bg-indigo-900/40 -z-10"
                      layoutId="navHighlight"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transform -translate-x-1/2 transition-all duration-300 group-hover:w-1/2"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          
          <div className="flex items-center">
            {/* Theme toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="mr-3"
            >
              <ThemeToggle />
            </motion.div>
            
            {/* Invest Now Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <Link
                href="/invest"
                className="hidden md:flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <span className="mr-2">Invest Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
            
            {/* Mobile menu button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="md:hidden ml-4 rounded-md p-2 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-1.5'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-1.5'}`}></span>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg overflow-hidden border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-3 px-4 rounded-lg ${
                        activeSection === item.id
                          ? 'text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30'
                          : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-2"
                >
                  <Link
                    href="/invest"
                    className="flex items-center justify-center py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white font-medium shadow-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-2">Invest Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 