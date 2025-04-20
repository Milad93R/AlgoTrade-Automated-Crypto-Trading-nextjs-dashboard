'use client';

import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

export default function Profile() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const isDark = theme === 'dark';
  
  // Mock user data - in a real app, this would come from the user context
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || 'John',
    lastName: user?.lastName || 'Doe',
    email: user?.email || 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    country: 'United States',
    timezone: 'UTC-5 (Eastern Time)',
    bio: 'Experienced trader with a focus on cryptocurrency markets.',
    memberSince: 'January 2023',
    subscription: 'Premium',
    nextBilling: 'June 15, 2023',
    tradingExperience: 'Intermediate'
  });
  
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({...profileData});
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileData(formData);
    setIsEditMode(false);
  };
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Your Profile</h1>
        <button 
          onClick={() => setIsEditMode(!isEditMode)}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
            isEditMode 
              ? 'bg-gray-500 hover:bg-gray-600 text-white'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          {isEditMode ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
      
      {/* Profile Header */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <div className="h-32 w-32 rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500">
              {user?.picture ? (
                <img 
                  src={user.picture} 
                  alt={`${profileData.firstName} ${profileData.lastName}`} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-white text-4xl font-semibold">
                  {profileData.firstName[0]}{profileData.lastName[0]}
                </div>
              )}
            </div>
            {isEditMode && (
              <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            )}
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {profileData.email}
            </p>
            <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {profileData.subscription}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {profileData.tradingExperience}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Member since {profileData.memberSince}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Information */}
      {isEditMode ? (
        <form onSubmit={handleSubmit}>
          <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
            <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              
              <div>
                <label htmlFor="country" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Japan</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="timezone" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Timezone
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                >
                  <option>UTC-8 (Pacific Time)</option>
                  <option>UTC-7 (Mountain Time)</option>
                  <option>UTC-6 (Central Time)</option>
                  <option>UTC-5 (Eastern Time)</option>
                  <option>UTC+0 (GMT)</option>
                  <option>UTC+1 (Central European Time)</option>
                  <option>UTC+9 (Japan Standard Time)</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="bio" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={3}
                  value={formData.bio}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              
              <div>
                <label htmlFor="tradingExperience" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Trading Experience
                </label>
                <select
                  id="tradingExperience"
                  name="tradingExperience"
                  value={formData.tradingExperience}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Professional</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Personal Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div>
              <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email</h3>
              <p className={`mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.email}</p>
            </div>
            
            <div>
              <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Phone</h3>
              <p className={`mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.phone}</p>
            </div>
            
            <div>
              <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Country</h3>
              <p className={`mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.country}</p>
            </div>
            
            <div>
              <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Timezone</h3>
              <p className={`mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.timezone}</p>
            </div>
            
            <div className="md:col-span-2">
              <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Bio</h3>
              <p className={`mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.bio}</p>
            </div>
            
            <div>
              <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Trading Experience</h3>
              <p className={`mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.tradingExperience}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Account Information */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
        <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Account Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div>
            <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Member Since</h3>
            <p className={`mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.memberSince}</p>
          </div>
          
          <div>
            <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Subscription</h3>
            <p className={`mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.subscription}</p>
          </div>
          
          <div>
            <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Next Billing Date</h3>
            <p className={`mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{profileData.nextBilling}</p>
          </div>
        </div>
        
        <div className="mt-6 space-y-2">
          <button className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Upgrade your subscription
          </button>
          
          <button className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View billing history
          </button>
        </div>
      </div>
      
      {/* Password and Security */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-6`}>
        <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Password & Security</h2>
        
        <div className="space-y-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
            Change Password
          </button>
          
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none ml-4">
            Enable Two-Factor Authentication
          </button>
        </div>
        
        <div className="mt-6">
          <h3 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Recent Activities</h3>
          <div className={`border ${isDark ? 'border-gray-700' : 'border-gray-200'} rounded-lg divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Password changed</p>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>May 15, 2023 at 10:30 AM</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Successful
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Login from new device</p>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>May 12, 2023 at 2:15 PM</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  New device
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Login from new location</p>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>May 8, 2023 at 9:45 AM</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 