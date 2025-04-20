'use client';

import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [tradeAlerts, setTradeAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [marketNews, setMarketNews] = useState(false);
  
  // Security settings
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(30);
  const [showApiKey, setShowApiKey] = useState(false);
  
  // Mock API Key
  const apiKey = "atv_sk_67e9d4f21a8b40e3c5692d1fb3c8a5f9";
  
  return (
    <div className="space-y-6">
      <h1 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Settings</h1>
      
      {/* Notifications Settings */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <h2 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Notification Preferences</h2>
        
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
            <div>
              <h3 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Email Notifications</h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Receive important updates via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer mt-1 sm:mt-0">
              <input 
                type="checkbox" 
                checked={emailNotifications} 
                onChange={() => setEmailNotifications(!emailNotifications)} 
                className="sr-only peer"
              />
              <div className={`w-11 h-6 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600`}></div>
            </label>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
            <div>
              <h3 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Push Notifications</h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Get real-time alerts on your device</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer mt-1 sm:mt-0">
              <input 
                type="checkbox" 
                checked={pushNotifications} 
                onChange={() => setPushNotifications(!pushNotifications)} 
                className="sr-only peer"
              />
              <div className={`w-11 h-6 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600`}></div>
            </label>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
            <div>
              <h3 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Trade Alerts</h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Be notified when trades are executed</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer mt-1 sm:mt-0">
              <input 
                type="checkbox" 
                checked={tradeAlerts} 
                onChange={() => setTradeAlerts(!tradeAlerts)} 
                className="sr-only peer"
              />
              <div className={`w-11 h-6 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600`}></div>
            </label>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
            <div>
              <h3 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Weekly Reports</h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Receive performance summaries every week</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer mt-1 sm:mt-0">
              <input 
                type="checkbox" 
                checked={weeklyReports} 
                onChange={() => setWeeklyReports(!weeklyReports)} 
                className="sr-only peer"
              />
              <div className={`w-11 h-6 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600`}></div>
            </label>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
            <div>
              <h3 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Market News</h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Get updates on market trends and news</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer mt-1 sm:mt-0">
              <input 
                type="checkbox" 
                checked={marketNews} 
                onChange={() => setMarketNews(!marketNews)} 
                className="sr-only peer"
              />
              <div className={`w-11 h-6 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600`}></div>
            </label>
          </div>
        </div>
      </div>
      
      {/* Security Settings */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <h2 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Security Settings</h2>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
            <div>
              <h3 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Two-Factor Authentication</h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Add an extra layer of security to your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer mt-1 sm:mt-0">
              <input 
                type="checkbox" 
                checked={twoFactorAuth} 
                onChange={() => setTwoFactorAuth(!twoFactorAuth)} 
                className="sr-only peer"
              />
              <div className={`w-11 h-6 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600`}></div>
            </label>
          </div>
          
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-2">
              <div>
                <h3 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Session Timeout (minutes)</h3>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Automatically log out after period of inactivity</p>
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{sessionTimeout} min</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="60" 
              step="5" 
              value={sessionTimeout} 
              onChange={(e) => setSessionTimeout(parseInt(e.target.value))} 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs mt-1">
              <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>5 min</span>
              <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>60 min</span>
            </div>
          </div>
          
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-2">
              <div>
                <h3 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>API Key</h3>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Your private API key for integrations</p>
              </div>
              <button 
                onClick={() => setShowApiKey(!showApiKey)}
                className={`text-xs font-medium px-2 py-1 rounded mt-1 sm:mt-0 ${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {showApiKey ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className={`p-2 sm:p-3 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-md font-mono text-xs sm:text-sm overflow-x-auto`}>
              {showApiKey ? apiKey : '•'.repeat(apiKey.length)}
            </div>
            <div className="mt-2 flex space-x-2">
              <button className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded">
                Reset Key
              </button>
              <button className="text-xs bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700 px-2 py-1 rounded">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Appearance Settings */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <h2 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Appearance</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className={`text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Theme</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div 
                onClick={() => isDark && toggleTheme()}
                className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                  !isDark 
                    ? 'border-indigo-600 ring-1 sm:ring-2 ring-indigo-600 bg-white' 
                    : 'border-gray-300 dark:border-gray-600 bg-white'
                }`}
              >
                <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden bg-white border border-gray-200">
                  <div className="h-full w-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-gray-900 text-sm font-medium">Light</h4>
                  <p className="text-gray-500 text-xs">Default light theme</p>
                </div>
              </div>
              
              <div 
                onClick={() => !isDark && toggleTheme()}
                className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                  isDark 
                    ? 'border-indigo-600 ring-1 sm:ring-2 ring-indigo-600 bg-gray-900' 
                    : 'border-gray-300 bg-gray-900'
                }`}
              >
                <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden bg-gray-800 border border-gray-700">
                  <div className="h-full w-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-white text-sm font-medium">Dark</h4>
                  <p className="text-gray-400 text-xs">Easier on the eyes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Save Settings Button */}
      <div className="flex justify-center sm:justify-end pb-6">
        <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
} 