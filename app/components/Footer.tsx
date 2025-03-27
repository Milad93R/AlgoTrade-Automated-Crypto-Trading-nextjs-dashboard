'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  const [hovered, setHovered] = useState('');
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.1 + (i * 0.1),
        duration: 0.5
      }
    })
  };
  
  return (
    <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 bottom-0 w-96 h-96 bg-indigo-900/20 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 top-20 w-80 h-80 bg-purple-900/20 rounded-full filter blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        {/* Animated gradient lines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top content area */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Company info column */}
            <motion.div 
              className="md:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              custom={0}
            >
              <div className="flex items-center mb-6">
                <div className="relative mr-3">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-70 blur"></div>
                  <span className="relative flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full border border-indigo-900 text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text z-10">
                    A
                  </span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text animate-text-shimmer">
                  AtVest
                </span>
              </div>
              
              <p className="text-gray-300 mb-8 max-w-md">
                Advanced cryptocurrency investment platform with automated trading strategies. 
                Our rasta-trendier algorithm delivers exceptional returns with minimal effort on your part.
              </p>
              
              <div className="mb-8">
                <p className="text-sm text-indigo-400 mb-3 uppercase tracking-wider font-medium">Join our community</p>
                <div className="flex space-x-4">
                  {['twitter', 'discord', 'telegram', 'github'].map((platform, i) => (
                    <motion.a 
                      key={platform}
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`h-10 w-10 rounded-full flex items-center justify-center bg-gray-800 text-gray-400 hover:text-white hover:bg-${
                        platform === 'twitter' ? 'blue' : 
                        platform === 'discord' ? 'indigo' : 
                        platform === 'telegram' ? 'blue' : 
                        'gray'
                      }-600 transition-all duration-300`}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      onMouseEnter={() => setHovered(platform)}
                      onMouseLeave={() => setHovered('')}
                    >
                      {platform === 'twitter' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      )}
                      {platform === 'discord' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                      )}
                      {platform === 'telegram' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      )}
                      {platform === 'github' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="p-5 bg-gray-800/50 rounded-xl border border-gray-700 mt-8">
                <p className="text-gray-300 text-sm font-medium">
                  Sign up for our newsletter to get the latest updates on crypto investment strategies.
                </p>
                <div className="flex mt-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-gray-900 border border-gray-700 text-gray-300 px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg text-white font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation column 1 */}
            <motion.div 
              className="md:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              custom={1}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Platform</h3>
              <ul className="space-y-4">
                {['How It Works', 'Performance', 'FAQ', 'Features', 'Pricing'].map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    <Link 
                      href={`#${item.toLowerCase().replace(/\s/g, '-')}`} 
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform"></span>
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Navigation column 2 */}
            <motion.div 
              className="md:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              custom={2}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-4">
                {['About Us', 'Blog', 'Careers', 'Contact'].map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                  >
                    <Link 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform"></span>
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Navigation column 3 */}
            <motion.div 
              className="md:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              custom={3}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
              <ul className="space-y-4">
                {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Risk Disclosure', 'Compliance'].map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <Link 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform"></span>
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* CTA banner */}
          <motion.div 
            className="p-8 bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-2xl mb-12 border border-indigo-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-white mb-2">Ready to start your investment journey?</h3>
                <p className="text-indigo-200">
                  Join thousands of successful investors using our algorithm
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/invest"
                  className="inline-flex items-center bg-white text-indigo-600 hover:text-indigo-700 px-6 py-3 rounded-full font-medium shadow-lg transition-colors"
                >
                  <span>Start Investing</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Bottom content area */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  &copy; {year} AtVest. All rights reserved.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</Link>
              </div>
            </div>
            
            <motion.div 
              className="mt-8 p-6 bg-gray-800 rounded-xl text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="mb-2 font-medium text-white">Risk Disclosure:</p>
              <p>
                Cryptocurrency trading involves substantial risk and is not suitable for all investors. 
                The high degree of leverage can work against you as well as for you. 
                Before deciding to trade cryptocurrencies you should carefully consider your investment objectives, level of experience, and risk appetite. 
                Past performance is not indicative of future results.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
} 