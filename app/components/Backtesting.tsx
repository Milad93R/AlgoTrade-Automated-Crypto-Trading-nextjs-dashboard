'use client';

import { motion } from 'framer-motion';
import MonthlyResultsChart from './MonthlyResultsChart';
import Link from 'next/link';

export default function Backtesting() {
  const strategies = [
    { id: 'rasta-trendier', name: 'rasta-trendier Strategy', featured: true },
    { id: 'macd', name: 'MACD Histogram Strategy' },
    { id: 'sma', name: 'SMA Crossover Strategy' },
    { id: 'bollinger', name: 'Bollinger Bands Strategy' },
  ];
  
  return (
    <section id="backtesting" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Powerful Backtesting Engine
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Test your trading strategies against historical data to see how they would have performed
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <MonthlyResultsChart />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Strategy Library</h3>
            
            <div className="space-y-4 mb-8">
              {strategies.map((strategy) => (
                <div 
                  key={strategy.id} 
                  className={`p-4 ${strategy.featured ? 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800' : 'bg-gray-50 dark:bg-gray-700'} rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                        {strategy.name}
                        {strategy.featured && (
                          <span className="ml-2 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 py-0.5 px-2 rounded-full">
                            Featured
                          </span>
                        )}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {strategy.featured 
                          ? 'Our highest performing strategy with impressive results'
                          : 'Click to view detailed performance metrics'}
                      </p>
                    </div>
                    {strategy.featured && (
                      <Link href="/invest">
                        <button className="text-xs bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white py-1 px-3 rounded-full">
                          Invest Now
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="text-lg font-medium text-indigo-700 dark:text-indigo-400 mb-2">Key Statistics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Win Rate</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">72.4%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Profit Factor</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">2.81</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Max Drawdown</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">14.3%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sharpe Ratio</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">1.92</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-indigo-600 dark:bg-indigo-700 rounded-xl shadow-xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Ready to invest in rasta-trendier strategy?</h3>
              <p className="text-indigo-100 mb-6">
                Our highest performing strategy is now available for investment. Let our algorithm do the trading while you earn 90% of the profits.
              </p>
              <Link href="/invest">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 rounded-full bg-white text-indigo-600 hover:bg-indigo-50 transition-colors font-medium"
                >
                  Invest Now
                </motion.button>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="w-full aspect-square rounded-full bg-indigo-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-white opacity-80">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.286m5.94 2.286-2.286 5.94" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 