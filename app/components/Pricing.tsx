'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');
  
  const plans = [
    {
      name: 'Basic',
      description: 'For individual traders new to algorithmic trading',
      monthlyPrice: 29,
      yearlyPrice: 290, // Save ~$58 annually
      features: [
        'Backtesting on 10+ crypto pairs',
        'MACD & SMA strategies',
        'Manual trading signals',
        'Basic performance analytics',
        'Email support',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Pro',
      description: 'For active traders seeking alpha with advanced strategies',
      monthlyPrice: 79,
      yearlyPrice: 790, // Save ~$158 annually
      features: [
        'Backtesting on 30+ crypto pairs',
        'All built-in strategies',
        'Strategy optimization',
        'Automated trading (API)',
        'Detailed performance metrics',
        'Priority email support',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For professional traders and investment firms',
      monthlyPrice: 199,
      yearlyPrice: 1990, // Save ~$398 annually
      features: [
        'Unlimited crypto pairs',
        'Custom strategy development',
        'Multi-coin portfolio optimization',
        'Advanced risk management',
        'White-label reports',
        'Dedicated account manager',
        '24/7 priority support',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];
  
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Choose the plan that best fits your trading strategy and volume
          </motion.p>
          
          {/* Billing toggle */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button 
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-indigo-600 dark:bg-indigo-500"
            >
              <span className="sr-only">Toggle billing period</span>
              <span 
                className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingPeriod === 'yearly' ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
              Yearly <span className="text-green-600 dark:text-green-400 font-medium">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden relative ${
                plan.popular ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 transform md:scale-105 z-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-indigo-600 dark:bg-indigo-500 text-white py-1 px-4 absolute top-0 right-0 text-xs font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 h-12">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    /{billingPeriod === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white'
                      : 'bg-white hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500 text-indigo-600 dark:text-white border border-indigo-600 dark:border-indigo-400'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
              
              {billingPeriod === 'yearly' && (
                <div className="bg-green-50 dark:bg-green-900/20 py-2 text-center text-sm text-green-700 dark:text-green-400">
                  Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom solution? Contact our team for personalized pricing.
          </p>
          <a 
            href="#contact" 
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
} 