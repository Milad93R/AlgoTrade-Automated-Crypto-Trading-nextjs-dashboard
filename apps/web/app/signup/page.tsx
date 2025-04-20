'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function SignUp() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Use AuthContext
  const { signUp, isLoading: authLoading } = useAuth();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');
    setSuccess('');
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await signUp({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      
      setSuccess('Registration successful! Please check your email to verify your account.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push('/signin');
      }, 3000);
      
    } catch (error) {
      console.error('Registration error:', error);
      setApiError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-100'} py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-center relative overflow-hidden`}>
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className={`absolute top-4 right-4 z-20 p-2 rounded-lg ${isDark ? 'bg-gray-800/70 hover:bg-gray-700/70' : 'bg-white/70 hover:bg-gray-100/70'} backdrop-blur-sm transition-colors duration-200 shadow-md border ${isDark ? 'border-gray-700' : 'border-gray-200'} cursor-pointer`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${isDark ? 'bg-purple-900/20' : 'bg-purple-200/50'} blur-3xl animate-pulse-slow`}></div>
        <div className={`absolute top-2/3 -left-20 w-72 h-72 rounded-full ${isDark ? 'bg-indigo-900/20' : 'bg-indigo-200/50'} blur-3xl animate-pulse-slower`}></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Link href="/" className="flex items-center justify-center mb-4 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-70 group-hover:opacity-100 blur group-hover:blur-md transition-all duration-300"></div>
            <span className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full border border-indigo-100 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text z-10">
              A
            </span>
          </div>
          <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text animate-text-shimmer">
            AtVest
          </span>
        </Link>
        <h2 className={`text-center text-2xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
          Create your account
        </h2>
        <p className={`text-center text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-sm mx-auto`}>
          Join ATvest to access our automated trading algorithms
        </p>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className={`${isDark ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'} py-5 px-4 shadow-xl sm:rounded-2xl sm:px-6 transition-all duration-300 border ${isDark ? 'border-gray-700/50' : 'border-gray-200/70'}`}>
          {success && (
            <div className="mb-4 rounded-xl bg-green-50 p-3 shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">{success}</p>
                </div>
              </div>
            </div>
          )}
          
          {apiError && (
            <div className="mb-4 rounded-xl bg-red-50 p-3 shadow-sm">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">{apiError}</p>
                </div>
              </div>
            </div>
          )}
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={`block text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  First name
                </label>
                <div className="mt-1 relative group">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border ${errors.firstName ? 'border-red-300' : isDark ? 'border-gray-700 group-focus-within:border-indigo-500' : 'border-gray-300 group-focus-within:border-indigo-500'} rounded-lg shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition-all duration-200 ${isDark ? 'bg-gray-700/80 text-white' : 'bg-white text-gray-900'}`}
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className={`block text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Last name
                </label>
                <div className="mt-1 relative group">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border ${errors.lastName ? 'border-red-300' : isDark ? 'border-gray-700 group-focus-within:border-indigo-500' : 'border-gray-300 group-focus-within:border-indigo-500'} rounded-lg shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition-all duration-200 ${isDark ? 'bg-gray-700/80 text-white' : 'bg-white text-gray-900'}`}
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className={`block text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Email address
              </label>
              <div className="mt-1 relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className={`h-4 w-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`appearance-none block w-full pl-10 px-3 py-2 border ${errors.email ? 'border-red-300' : isDark ? 'border-gray-700 group-focus-within:border-indigo-500' : 'border-gray-300 group-focus-within:border-indigo-500'} rounded-lg shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition-all duration-200 ${isDark ? 'bg-gray-700/80 text-white' : 'bg-white text-gray-900'}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="password" className={`block text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <div className="mt-1 relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className={`h-4 w-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`appearance-none block w-full pl-10 px-3 py-2 border ${errors.password ? 'border-red-300' : isDark ? 'border-gray-700 group-focus-within:border-indigo-500' : 'border-gray-300 group-focus-within:border-indigo-500'} rounded-lg shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition-all duration-200 ${isDark ? 'bg-gray-700/80 text-white' : 'bg-white text-gray-900'}`}
                  />
                  {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className={`block text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Confirm password
                </label>
                <div className="mt-1 relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className={`h-4 w-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`appearance-none block w-full pl-10 px-3 py-2 border ${errors.confirmPassword ? 'border-red-300' : isDark ? 'border-gray-700 group-focus-within:border-indigo-500' : 'border-gray-300 group-focus-within:border-indigo-500'} rounded-lg shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition-all duration-200 ${isDark ? 'bg-gray-700/80 text-white' : 'bg-white text-gray-900'}`}
                  />
                  {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting || authLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white ${isSubmitting || authLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 cursor-pointer'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1`}
              >
                {isSubmitting || authLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </div>
          </form>

          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className={`px-2 ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}`}>
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-3">
              <Link
                href="/signin"
                className={`w-full flex justify-center py-2 px-4 border ${isDark ? 'border-gray-700 text-indigo-400 hover:bg-gray-700/50' : 'border-gray-300 text-indigo-600 hover:bg-gray-50'} rounded-lg shadow-sm text-sm font-medium focus:outline-none transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-70">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
      </div>
    </div>
  );
} 