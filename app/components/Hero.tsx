'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Automated <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">Crypto Trading</span> That Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            Invest in our rasta-trendier strategy and earn 90% of all profits.
            Our algorithm handles the trading while you watch your investment grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              href="/invest" 
              className="px-8 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-center font-medium shadow-lg shadow-indigo-500/20"
            >
              Start Investing
            </Link>
            <Link
              href="#how-it-works"
              className="px-8 py-3 rounded-full bg-white text-indigo-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 text-center font-medium"
            >
              Learn More
            </Link>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">72.4%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Annual Return</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">90%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Profit Share</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Automated Trading</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>
    </div>
  );
} 