import Link from 'next/link';
import { Metadata } from 'next';
import HeroAnimations from './components/HeroAnimations';
import HowItWorks from './components/HowItWorks';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

export const metadata: Metadata = {
  title: 'AtVest - Automated Crypto Trading Investment',
  description: 'Invest in our rasta-trendier trading strategy and earn profits while we manage your investments',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Enhanced Header Component */}
      <Header />

      {/* Hero Section with Animations */}
      <HeroAnimations />

      {/* How It Works Section with Animations */}
      <HowItWorks />

      {/* Performance Section */}
      <AnimatedSection id="performance" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/20 rounded-full filter blur-3xl animate-pulse-slower"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02]"></div>
        </div>
      
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-800 dark:text-indigo-300 font-medium text-sm transform transition-transform hover:scale-105 animate-when-visible delay-100">
              PROVEN RESULTS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-when-visible delay-200">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Exceptional</span> Strategy Performance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-when-visible delay-300">
              Our rasta-trendier strategy has consistently outperformed market averages across all market conditions
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Glowing accent border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 dark:opacity-50 animate-pulse-slow"></div>
            
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 backdrop-blur-sm animate-when-visible delay-400">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0 flex items-center">
                  <span className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </span>
                  Strategy Performance Metrics
                </h3>
                <div className="bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full text-green-700 dark:text-green-400 font-medium flex items-center transform transition-transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 animate-bounce-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Verified 2-year backtest</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    label: "Annual Return",
                    value: "72.4%", 
                    note: "40.3% above market",
                    icon: "arrow-up",
                    color: "green",
                    delay: "delay-500"
                  },
                  {
                    label: "Win Rate", 
                    value: "68.5%", 
                    note: "Consistent results",
                    icon: "arrow-up", 
                    color: "green",
                    delay: "delay-600"
                  },
                  {
                    label: "Max Drawdown", 
                    value: "14.3%", 
                    note: "Low volatility",
                    icon: "check-circle", 
                    color: "green",
                    delay: "delay-700"
                  },
                  {
                    label: "Sharpe Ratio", 
                    value: "1.92", 
                    note: "Excellent risk-reward",
                    icon: "check-circle", 
                    color: "green",
                    delay: "delay-800"
                  }
                ].map((metric, index) => (
                  <div 
                    key={metric.label}
                    className={`relative overflow-hidden p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 animate-when-visible ${metric.delay}`} 
                  >
                    {/* Decorative corner accent */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-indigo-400/40 to-purple-400/40 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-bl-3xl"></div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{metric.label}</p>
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 my-2 animate-count-up" data-value={metric.value}>{metric.value}</p>
                    <div className={`mt-2 flex items-center text-${metric.color}-600 dark:text-${metric.color}-400 text-sm`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {metric.icon === "arrow-up" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                      </svg>
                      {metric.note}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-xl animate-when-visible delay-900">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                  <div className="w-full bg-white dark:bg-gray-800 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">Performance Chart</h4>
                      <div className="flex space-x-3">
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></span>
                          <span className="text-sm text-gray-600 dark:text-gray-300">Our Strategy</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
                          <span className="text-sm text-gray-600 dark:text-gray-300">Market Average</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chart mockup with animated lines */}
                    <div className="relative h-64 w-full">
                      {/* Bottom axis */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-700"></div>
                      
                      {/* Left axis */}
                      <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-200 dark:bg-gray-700"></div>
                      
                      {/* Market average line */}
                      <div className="absolute left-0 right-0 bottom-[30%] h-px bg-gray-300 dark:bg-gray-600 z-10 opacity-50"></div>
                      
                      {/* Our strategy line */}
                      <div className="absolute bottom-[10%] left-0 w-full h-px bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-400 z-20 animate-width-expand"></div>
                      
                      {/* Performance dots */}
                      <div className="absolute bottom-[10%] left-[80%] w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-30 animate-pulse-slow"></div>
                      <div className="absolute bottom-[30%] left-[80%] w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-30"></div>
                      
                      {/* Quarterly labels */}
                      <div className="absolute bottom-[-20px] left-[20%] text-xs text-gray-500 dark:text-gray-400">Q1</div>
                      <div className="absolute bottom-[-20px] left-[40%] text-xs text-gray-500 dark:text-gray-400">Q2</div>
                      <div className="absolute bottom-[-20px] left-[60%] text-xs text-gray-500 dark:text-gray-400">Q3</div>
                      <div className="absolute bottom-[-20px] left-[80%] text-xs text-gray-500 dark:text-gray-400">Q4</div>
                      
                      {/* Value labels */}
                      <div className="absolute top-0 left-[-30px] text-xs text-gray-500 dark:text-gray-400">+100%</div>
                      <div className="absolute top-[25%] left-[-30px] text-xs text-gray-500 dark:text-gray-400">+75%</div>
                      <div className="absolute top-[50%] left-[-30px] text-xs text-gray-500 dark:text-gray-400">+50%</div>
                      <div className="absolute top-[75%] left-[-30px] text-xs text-gray-500 dark:text-gray-400">+25%</div>
                      <div className="absolute bottom-0 left-[-30px] text-xs text-gray-500 dark:text-gray-400">0%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 text-sm text-gray-500 dark:text-gray-400 flex items-start border-t border-gray-100 dark:border-gray-700 animate-when-visible delay-1000">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>
                  Past performance is not indicative of future results. Cryptocurrency trading involves risk. 
                  Only invest what you can afford to lose. The example above represents backtesting results over a 24-month period.
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-16 animate-when-visible delay-1100">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-2xl shadow-xl p-8 text-white transform transition-all hover:shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <h3 className="text-2xl font-bold">Ready to grow your wealth?</h3>
                  </div>
                  <p className="text-indigo-100 mb-0 md:pr-6">
                    Join hundreds of satisfied investors today and experience our algorithm's performance firsthand.
                    Your investment journey is just a click away.
                  </p>
                </div>
                <div>
                  <Link
                    href="/invest"
                    className="inline-flex items-center px-8 py-4 rounded-full bg-white text-indigo-600 hover:bg-indigo-50 transition-all font-medium shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 group"
                  >
                    <span>Start Investing Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional metrics cards */}
          <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Continuous Operation",
                value: "24/7",
                description: "Our algorithm never sleeps, capturing opportunities around the clock",
                icon: "clock",
                delay: "delay-1200"
              },
              {
                title: "Success Rate",
                value: "93%",
                description: "Percentage of months with positive returns",
                icon: "chart",
                delay: "delay-1300"
              },
              {
                title: "Average Monthly Gain",
                value: "6.2%",
                description: "Consistent monthly growth over the past 2 years",
                icon: "trending-up",
                delay: "delay-1400"
              }
            ].map((card, index) => (
              <div 
                key={card.title}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all hover:shadow-xl hover:-translate-y-1 animate-when-visible ${card.delay}`}
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                  {card.icon === "clock" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {card.icon === "chart" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {card.icon === "trending-up" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{card.title}</h4>
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{card.value}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection id="faq" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-800 dark:text-indigo-300 font-medium text-sm animate-when-visible delay-100">
              GOT QUESTIONS?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-when-visible delay-200">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-when-visible delay-300">
              Everything you need to know about our investment service
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How does the investment process work?",
                  answer: "Once you invest, your funds will be allocated to our automated rasta-trendier strategy. The algorithm will trade on your behalf using proven technical indicators and risk management protocols. You'll have access to a dashboard where you can monitor performance in real-time.",
                  delay: "delay-400"
                },
                {
                  question: "What is the minimum investment?",
                  answer: "The minimum investment is $100 USD. There is no maximum limit on your investment, and you can add funds anytime.",
                  delay: "delay-500"
                },
                {
                  question: "How are fees calculated?",
                  answer: "We only earn when you earn. Our fee is 10% of the profits generated by the strategy. If there are no profits in a given period, you pay no fees. There are no hidden charges or management fees.",
                  delay: "delay-600"
                },
                {
                  question: "How can I withdraw my investment?",
                  answer: "You can withdraw your investment at any time from your dashboard. Withdrawal requests are processed within 24-48 hours, and funds will be sent to your designated account. There are no withdrawal fees or lock-up periods.",
                  delay: "delay-700"
                },
                {
                  question: "What are the risks involved?",
                  answer: "All investments carry risk, and cryptocurrency markets are volatile. While our strategy has historical performance data, past performance is not indicative of future results. Only invest what you can afford to lose. Our algorithm includes sophisticated risk management protocols to minimize potential losses.",
                  delay: "delay-800"
                }
              ].map((faq, index) => (
                <div key={index} className={`bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all animate-when-visible ${faq.delay}`}>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-start">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm mr-3 flex-shrink-0">Q</span>
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300 ml-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-center border border-indigo-100 dark:border-indigo-800 animate-when-visible delay-900">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Still have questions? Our support team is here to help you.
              </p>
              <Link 
                href="mailto:support@atvest.com" 
                className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-full transition-colors font-medium"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Footer Component */}
      <Footer />
    </main>
  );
}
