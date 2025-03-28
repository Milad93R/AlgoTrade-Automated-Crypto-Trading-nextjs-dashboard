'use client';

import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

export default function HeroAnimations() {
  return (
    <AnimatedSection 
      id="home" 
      className="pt-32 pb-20 relative overflow-hidden"
      rootMargin="0px 0px -10% 0px"
      threshold={0}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Large gradient blobs with pulsing animation */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/50 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/50 rounded-full filter blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-200/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        
        {/* Floating crypto icons/symbols */}
        <div className="absolute top-1/3 left-20 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-1/4 right-32 w-8 h-8 bg-blue-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-indigo-400 opacity-20 rotate-45 animate-float-slow"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        {/* Animated gradient lines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-pulse-slow"></div>
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse-slower"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tag line with slide-in animation */}
          <div className="inline-block mb-4 px-4 py-1 bg-indigo-100 rounded-full text-indigo-800 font-medium text-sm animate-when-visible delay-100">
            Cryptocurrency Investment Made Simple
          </div>
          
          {/* Main heading with letter-by-letter appearance */}
          <h1 className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-when-visible delay-200">
            <span className="inline-block">Earn</span>{' '}
            <span className="relative inline-block overflow-hidden">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text animate-text-shimmer">Passive Income</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-600/0 via-indigo-600 to-purple-600/0 animate-width-expand"></span>
            </span>{' '}
            <span className="inline-block">With Our Automated Trading</span>
          </h1>
          
          {/* Subtitle with fade-in animation */}
          <p className="text-xl text-gray-600 mb-10 animate-when-visible delay-300">
            Our proven rasta-trendier strategy has generated{' '}
            <span className="relative font-semibold text-indigo-600 inline-block">
              72.4% annual returns
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-indigo-400/50 rounded"></span>
            </span>. 
            Invest today and keep 90% of all profits while we do all the work.
          </p>
          
          {/* CTA buttons with pop-up animation */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/invest" 
              className="relative px-8 py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 text-center font-medium shadow-lg shadow-indigo-500/20 transform transition-all hover:scale-105 animate-when-visible delay-400 overflow-hidden group"
            >
              <span className="relative z-10">Start Investing Today</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute top-0 left-0 w-20 h-full bg-white/10 transform -skew-x-20 translate-x-[-150%] animate-shimmer"></span>
            </Link>
            <Link 
              href="#how-it-works" 
              className="px-8 py-4 rounded-full bg-white text-indigo-600 hover:bg-gray-100 border border-gray-300 text-center font-medium transition-all hover:shadow-md animate-when-visible delay-500"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust elements with fade-in animation */}
          <div className="mt-12 pt-8 border-t border-gray-200 animate-when-visible delay-600">
            <p className="text-sm text-gray-500 mb-4">TRUSTED BY INVESTORS WORLDWIDE</p>
            <div className="flex justify-center space-x-8 opacity-70">
              <div className="h-8 w-16 bg-gray-400 rounded transform hover:scale-110 transition-transform"></div>
              <div className="h-8 w-16 bg-gray-400 rounded transform hover:scale-110 transition-transform"></div>
              <div className="h-8 w-16 bg-gray-400 rounded transform hover:scale-110 transition-transform"></div>
              <div className="h-8 w-16 bg-gray-400 rounded transform hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </div>

        {/* Stats with staggered pop-up animation */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all hover:scale-105 animate-when-visible delay-700">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4 animate-bounce-subtle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-indigo-600 animate-count-up" data-value="72.4">0</div>
            <div className="text-gray-600 mt-2">Annual Return</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all hover:scale-105 animate-when-visible delay-800">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4 animate-bounce-subtle" style={{ animationDelay: '0.1s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-indigo-600 animate-count-up" data-value="90">0</div>
            <div className="text-gray-600 mt-2">Profit Share</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all hover:scale-105 animate-when-visible delay-900">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4 animate-bounce-subtle" style={{ animationDelay: '0.2s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-indigo-600 animate-count-up" data-value="24">0</div>
            <div className="text-gray-600 mt-2">Automated Trading</div>
          </div>
        </div>
      </div>
      
      {/* Mouse scroll indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow opacity-70">
        <span className="text-xs text-gray-500 mb-2">Scroll</span>
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </AnimatedSection>
  );
} 