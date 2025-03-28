'use client';

import { useRef } from 'react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import { useTheme } from '../context/ThemeContext';

export default function HowItWorks() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <AnimatedSection id="how-it-works" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-200'} overflow-hidden relative`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -left-20 top-40 w-64 h-64 ${isDark ? 'bg-indigo-900/20' : 'bg-indigo-100/40'} rounded-full filter blur-3xl`}></div>
        <div className={`absolute right-0 bottom-20 w-80 h-80 ${isDark ? 'bg-purple-900/20' : 'bg-purple-100/30'} rounded-full filter blur-3xl`}></div>
        
        {/* Animated connecting lines */}
        <div className={`absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r ${isDark ? 'from-indigo-900/0 via-indigo-700/30 to-indigo-900/0' : 'from-indigo-200/0 via-indigo-300/50 to-indigo-200/0'} transform -translate-y-1/2 hidden md:block`}></div>
        
        {/* Animated floating elements */}
        <div className={`absolute top-1/4 left-1/4 w-6 h-6 ${isDark ? 'bg-indigo-700/20' : 'bg-indigo-400/20'} rounded-full animate-float-slow`}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-4 h-4 ${isDark ? 'bg-purple-700/20' : 'bg-purple-400/20'} rounded-full animate-float`}></div>
        <div className={`absolute top-2/3 right-1/3 w-5 h-5 ${isDark ? 'bg-blue-700/20' : 'bg-blue-400/20'} rounded-full animate-float-slow`} style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-when-visible delay-100">
          <div className={`inline-block mb-4 px-4 py-1 ${isDark ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-800'} rounded-full font-medium text-sm animate-pulse-slow`}>
            SIMPLE PROCESS
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Three Simple Steps to Start Earning
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            No trading experience required - our algorithm does all the work
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="animate-when-visible delay-300">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-8 shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-white'} relative z-10 h-full`}>
              <div className={`absolute -right-3 -top-3 w-24 h-24 ${isDark ? 'bg-indigo-900/30' : 'bg-indigo-100/50'} rounded-full filter blur-xl animate-pulse-slow`}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 ${isDark ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-600'} rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-inner animate-bounce-subtle`}>
                  1
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>Sign Up & Join</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Create your account in minutes. Start with as little as $100 and scale up anytime as you see results.
                </p>
                <div className="mt-4 text-indigo-500 font-medium group">
                  <Link href="#" className="flex items-center transition-all duration-300 hover:pl-2">
                    <span>Get started</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Connection element */}
            <div className={`hidden md:block absolute top-1/2 right-0 w-1/2 h-px ${isDark ? 'bg-indigo-700/50' : 'bg-indigo-200'} z-0 transform translate-y-14`}></div>
          </div>
          
          {/* Step 2 */}
          <div className="animate-when-visible delay-500">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-8 shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-white'} relative z-10 h-full`}>
              <div className={`absolute -right-3 -top-3 w-24 h-24 ${isDark ? 'bg-indigo-900/30' : 'bg-indigo-100/50'} rounded-full filter blur-xl animate-pulse-slow`} style={{ animationDelay: '0.5s' }}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 ${isDark ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-600'} rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-inner animate-bounce-subtle`} style={{ animationDelay: '0.2s' }}>
                  2
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>Algorithm Trades for You</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Our rasta-trendier algorithm executes trades 24/7 based on sophisticated market analysis and proven risk management.
                </p>
                <div className={`mt-4 flex items-center text-green-500 font-medium border border-transparent rounded-lg px-2 py-1 transition-all ${isDark ? 'hover:border-green-800 hover:bg-green-900/30' : 'hover:border-green-100 hover:bg-green-50'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 animate-pulse-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fully automated</span>
                </div>
              </div>
            </div>
            
            {/* Connection elements */}
            <div className={`hidden md:block absolute top-1/2 left-0 w-1/2 h-px ${isDark ? 'bg-indigo-700/50' : 'bg-indigo-200'} z-0 transform translate-y-14`}></div>
            <div className={`hidden md:block absolute top-1/2 right-0 w-1/2 h-px ${isDark ? 'bg-indigo-700/50' : 'bg-indigo-200'} z-0 transform translate-y-14`}></div>
          </div>
          
          {/* Step 3 */}
          <div className="animate-when-visible delay-700">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-8 shadow-md transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-white'} relative z-10 h-full`}>
              <div className={`absolute -right-3 -top-3 w-24 h-24 ${isDark ? 'bg-indigo-900/30' : 'bg-indigo-100/50'} rounded-full filter blur-xl animate-pulse-slow`} style={{ animationDelay: '1s' }}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 ${isDark ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-600'} rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-inner animate-bounce-subtle`} style={{ animationDelay: '0.4s' }}>
                  3
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>Watch Your Profits Grow</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Track performance in real-time. Withdraw your profits or reinvest them anytime. You keep 90% of all profits.
                </p>
                <div className={`mt-4 flex items-center text-green-500 font-medium border border-transparent rounded-lg px-2 py-1 transition-all ${isDark ? 'hover:border-green-800 hover:bg-green-900/30' : 'hover:border-green-100 hover:bg-green-50'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 animate-pulse-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No hidden fees</span>
                </div>
              </div>
            </div>
            
            {/* Connection element */}
            <div className={`hidden md:block absolute top-1/2 left-0 w-1/2 h-px ${isDark ? 'bg-indigo-700/50' : 'bg-indigo-200'} z-0 transform translate-y-14`}></div>
          </div>
        </div>
        
        {/* CTA Button with animation */}
        <div className="text-center mt-16 animate-when-visible delay-900">
          <Link 
            href="#" 
            className="inline-block px-8 py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 text-center font-medium shadow-lg shadow-indigo-500/20 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            Start Your Trading Journey
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
} 