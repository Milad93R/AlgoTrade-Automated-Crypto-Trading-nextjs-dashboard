'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi there! How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Close chat if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('[data-chat-container]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! Our team will get back to you soon.",
        "I'd be happy to help with that. Could you provide more details?",
        "That's a great question about our investment strategies.",
        "We typically see returns between 10-15% with our automated trading systems.",
        "You can start investing with as little as $100 on our platform."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: Date.now().toString(),
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat toggle button - only visible when chat is closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
          >
            {/* Decorative rings around button */}
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 animate-pulse"></div>
            
            <motion.button
              onClick={() => setIsOpen(true)}
              className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                isDark 
                  ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white'
                  : 'bg-gradient-to-br from-indigo-400 via-indigo-500 to-purple-600 text-white'
              } hover:shadow-xl transform hover:scale-105 transition-all duration-300 border ${
                isDark ? 'border-indigo-900/50' : 'border-indigo-300/50'
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px rgba(79, 70, 229, 0.5)' 
              }}
              whileTap={{ scale: 0.95 }}
              title="Chat with us"
              aria-label="Open chat"
            >
              {/* Glassmorphism inner effects */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
              
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <circle cx="9" cy="10" r="1"></circle>
                  <circle cx="15" cy="10" r="1"></circle>
                </svg>
                
                {/* Notification dot */}
                <motion.span
                  className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border border-white shadow-md"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    transition: {
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 1.5
                    }
                  }}
                />
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            data-chat-container
          >
            <div className={`rounded-2xl overflow-hidden shadow-2xl border ${
              isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
            }`}>
              {/* Chat header */}
              <div className={`p-4 ${
                isDark
                  ? 'bg-gradient-to-r from-indigo-800/50 to-purple-800/50 border-b border-gray-800'
                  : 'bg-gradient-to-r from-indigo-100 to-purple-100 border-b border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative mr-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                        <span className="text-white font-bold">A</span>
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>AtVest Support</h3>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Usually replies in a few minutes</p>
                    </div>
                  </div>
                  
                  {/* Close button in top-right corner */}
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className={`p-1.5 rounded-full ${
                      isDark
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-white/40 hover:bg-white/60 text-gray-600'
                    } transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close chat"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Chat messages */}
              <div 
                className={`h-80 overflow-y-auto p-4 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
                style={{ scrollBehavior: 'smooth' }}
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <div
                      className={`inline-block max-w-[85%] rounded-lg px-4 py-2 ${
                        message.sender === 'user'
                          ? isDark
                            ? 'bg-indigo-600 text-white'
                            : 'bg-indigo-500 text-white'
                          : isDark
                          ? 'bg-gray-800 text-gray-200'
                          : 'bg-white text-gray-800 border border-gray-200'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user'
                          ? 'text-indigo-200'
                          : isDark
                          ? 'text-gray-500'
                          : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="mb-3 text-left">
                    <div className={`inline-block rounded-lg px-4 py-2 ${
                      isDark
                        ? 'bg-gray-800 text-gray-200'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Chat input */}
              <form onSubmit={handleSendMessage} className={`p-3 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="flex">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className={`flex-grow px-4 py-2 rounded-l-lg focus:outline-none ${
                      isDark
                        ? 'bg-gray-800 text-white placeholder-gray-500 border-gray-700'
                        : 'bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-200'
                    }`}
                    autoFocus
                  />
                  <button
                    type="submit"
                    className={`px-4 py-2 rounded-r-lg ${
                      !inputValue.trim()
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600'
                    } text-white transition-colors`}
                    disabled={!inputValue.trim()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </form>

              {/* Chat footer */}
              <div className={`px-3 py-2 text-center text-xs ${isDark ? 'bg-gray-900 text-gray-500' : 'bg-gray-50 text-gray-500'}`}>
                <p>Powered by AtVest Support</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 