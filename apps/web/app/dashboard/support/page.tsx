'use client';

import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function Support() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Form state
  const [formData, setFormData] = useState({
    subject: '',
    category: 'technical-issue',
    priority: 'medium',
    message: '',
    attachment: null as File | null
  });
  
  // FAQ expanded state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // Support tickets
  const [tickets, setTickets] = useState([
    { id: 'TK-1001', subject: 'API Connection Issue', status: 'open', date: '2023-06-01T10:30:00', lastUpdate: '2023-06-01T14:45:00' },
    { id: 'TK-1000', subject: 'Billing Question', status: 'answered', date: '2023-05-28T08:15:00', lastUpdate: '2023-05-29T11:20:00' },
    { id: 'TK-999', subject: 'Strategy Configuration', status: 'closed', date: '2023-05-20T16:45:00', lastUpdate: '2023-05-22T09:30:00' },
  ]);
  
  // FAQs
  const faqs = [
    {
      question: 'How do I connect my exchange API?',
      answer: 'To connect your exchange API, go to the Settings page and select "API Connections". Click "Add New Connection" and select your exchange. You will need to enter your API key and secret. Make sure to only provide API keys with trading permissions if you intend to use automated trading features.'
    },
    {
      question: 'How do I change my subscription plan?',
      answer: 'You can change your subscription plan by going to your Profile page and clicking on "Upgrade your subscription" in the Account Information section. You\'ll be presented with available plans to choose from. Changes to your subscription will be applied at the beginning of your next billing cycle.'
    },
    {
      question: 'What trading pairs are supported?',
      answer: 'We currently support most major cryptocurrency pairs available on supported exchanges. This includes BTC/USDT, ETH/USDT, SOL/USDT, BNB/USDT, and many others. The full list of supported pairs is available in the Trading Strategy section when you set up a new strategy.'
    },
    {
      question: 'How is performance calculated?',
      answer: 'Performance metrics are calculated based on the trading history of your activated strategies. This includes profit/loss calculations, win rates, maximum drawdown, and other standard trading metrics. All calculations use the asset prices at the time of trade execution.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take security very seriously. All your data is encrypted both in transit and at rest. API keys are stored using industry-standard encryption protocols, and we never store your exchange account passwords. We also recommend enabling two-factor authentication for an additional layer of security.'
    }
  ];
  
  // Handle form input changes
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        attachment: e.target.files[0]
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    console.log('Submitting ticket:', formData);
    
    // Create a new ticket (mock implementation)
    const newTicket = {
      id: `TK-${1000 + tickets.length + 2}`,
      subject: formData.subject,
      status: 'open',
      date: new Date().toISOString(),
      lastUpdate: new Date().toISOString()
    };
    
    setTickets([newTicket, ...tickets]);
    
    // Reset form
    setFormData({
      subject: '',
      category: 'technical-issue',
      priority: 'medium',
      message: '',
      attachment: null
    });
    
    // Show success message (would use a toast in a real app)
    alert('Your ticket has been submitted successfully!');
  };
  
  // Toggle FAQ
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <div className="space-y-8">
      <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Support Center</h1>
      
      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6 flex flex-col items-center text-center`}>
          <div className={`p-3 rounded-full ${isDark ? 'bg-indigo-900/30 text-indigo-300' : 'bg-indigo-100 text-indigo-600'} mb-4`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Help Center</h2>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>Browse through our extensive knowledge base for answers to common questions.</p>
          <a href="#faq" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm font-medium">
            View FAQs
          </a>
        </div>
        
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6 flex flex-col items-center text-center`}>
          <div className={`p-3 rounded-full ${isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-600'} mb-4`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Support Ticket</h2>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>Create a new support ticket for personalized assistance with your issue.</p>
          <a href="#new-ticket" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm font-medium">
            Submit Ticket
          </a>
        </div>
        
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6 flex flex-col items-center text-center`}>
          <div className={`p-3 rounded-full ${isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-600'} mb-4`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Contact Us</h2>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>Need immediate help? Our support team is available via live chat during business hours.</p>
          <button className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm font-medium">
            Start Live Chat
          </button>
        </div>
      </div>
      
      {/* Your Tickets */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Your Support Tickets</h2>
          <button className="text-sm px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            View All Tickets
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className={isDark ? 'bg-gray-700/50' : 'bg-gray-50'}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Ticket ID
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Subject
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Status
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Date Created
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Last Update
                </th>
                <th scope="col" className={`px-6 py-3 text-right text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody className={`${isDark ? 'divide-gray-700' : 'divide-gray-200'} divide-y`}>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className={isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {ticket.id}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {ticket.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ticket.status === 'open' 
                        ? isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'
                        : ticket.status === 'answered'
                          ? isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'
                          : isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                    </span>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {formatDate(ticket.date)}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {formatDate(ticket.lastUpdate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                    <button className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {tickets.length === 0 && (
          <div className={`text-center py-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <p>You haven't created any support tickets yet.</p>
          </div>
        )}
      </div>
      
      {/* Create New Ticket */}
      <div id="new-ticket" className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
        <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Submit a Support Ticket</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="subject" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleFormChange}
              className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:ring-indigo-500 focus:border-indigo-500`}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleFormChange}
                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-indigo-500 focus:border-indigo-500`}
              >
                <option value="technical-issue">Technical Issue</option>
                <option value="account">Account Management</option>
                <option value="billing">Billing & Subscription</option>
                <option value="feature-request">Feature Request</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="priority" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleFormChange}
                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:ring-indigo-500 focus:border-indigo-500`}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleFormChange}
              className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:ring-indigo-500 focus:border-indigo-500`}
              required
            />
          </div>
          
          <div>
            <label htmlFor="attachment" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Attachment (optional)
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              onChange={handleFileChange}
              className={`mt-1 block w-full ${
                isDark 
                  ? 'text-gray-300' 
                  : 'text-gray-700'
              } file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium ${
                isDark
                  ? 'file:bg-gray-700 file:text-gray-300'
                  : 'file:bg-indigo-50 file:text-indigo-600'
              } hover:file:bg-indigo-100`}
            />
            <p className={`mt-1 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              You can upload files up to 10MB in size (PNG, JPG, PDF, DOC).
            </p>
          </div>
          
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
      
      {/* FAQs */}
      <div id="faq" className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
        <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`border ${isDark ? 'border-gray-700' : 'border-gray-200'} rounded-lg overflow-hidden`}>
              <button
                className={`w-full text-left px-4 py-3 flex justify-between items-center ${
                  expandedFaq === index
                    ? isDark ? 'bg-gray-700' : 'bg-gray-50'
                    : ''
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{faq.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform duration-200 ${
                    expandedFaq === index ? 'transform rotate-180' : ''
                  } ${isDark ? 'text-gray-400' : 'text-gray-500'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expandedFaq === index && (
                <div className={`px-4 py-3 ${isDark ? 'text-gray-300 border-t border-gray-700' : 'text-gray-700 border-t border-gray-200'}`}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact Information */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
        <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start">
            <div className={`flex-shrink-0 p-2 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>support@atvest.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className={`flex-shrink-0 p-2 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Phone</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>+1 (888) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className={`flex-shrink-0 p-2 rounded-md ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Support Hours</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Monday - Friday, 9AM - 6PM ET</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 