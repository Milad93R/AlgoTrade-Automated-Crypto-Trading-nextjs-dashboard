'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function TradingSignupForm() {
  const [amount, setAmount] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Predefined trading amounts
  const suggestedAmounts = ['500', '1000', '5000', '10000'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !termsAccepted) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl shadow-xl p-8 max-w-lg mx-auto`}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Trading Account Created!</h3>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            Thank you for joining the rasta-trendier strategy. Your trading account is being set up and will be active within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors"
          >
            Create Another Account
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl shadow-xl p-8 max-w-lg mx-auto`}
    >
      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Join rasta-trendier Strategy</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="amount" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            Starting Amount (USD)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'} sm:text-sm`}>$</span>
            </div>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              min="100"
              className={`block w-full pl-7 pr-12 py-3 ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-indigo-500 focus:border-indigo-500' 
                  : 'border-gray-300 focus:ring-indigo-600 focus:border-indigo-600'
              } rounded-lg`}
              required
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'} sm:text-sm`}>USD</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {suggestedAmounts.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(value)}
                className={`px-4 py-2 ${
                  isDark 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                } rounded-md text-sm font-medium transition-colors`}
              >
                ${value}
              </button>
            ))}
          </div>
        </div>
        
        <div className={`mb-6 ${isDark ? 'bg-indigo-900/20 border-indigo-800' : 'bg-indigo-50 border-indigo-100'} p-4 rounded-lg border`}>
          <h3 className={`text-lg font-medium ${isDark ? 'text-indigo-300' : 'text-indigo-800'} mb-2`}>Strategy Performance</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Historical Return</p>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>+72.4% <span className="text-sm font-normal">/year</span></p>
            </div>
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Your Fee</p>
              <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>10% <span className="text-sm font-normal">of profit</span></p>
            </div>
          </div>
          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
            * Past performance is not indicative of future results.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                I accept the <a href="#terms" className="text-indigo-500 hover:text-indigo-400">terms and conditions</a>
              </label>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                I understand that trading cryptocurrency is risky and I may lose my capital.
              </p>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={!amount || !termsAccepted || loading}
          className={`w-full py-3 px-4 rounded-lg font-medium text-white ${
            !amount || !termsAccepted
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          } transition-colors flex items-center justify-center`}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Start Trading Now'
          )}
        </button>
      </form>
    </motion.div>
  );
} 