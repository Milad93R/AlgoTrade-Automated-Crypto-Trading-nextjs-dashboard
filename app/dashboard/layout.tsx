'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle screen resize and set sidebar state accordingly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Check authentication and redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/signin');
    }
  }, [isLoading, isAuthenticated, router]);
  
  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return null; // Will redirect in the useEffect
  }
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleLogout = () => {
    logout();
  };
  
  const navigationItems = [
    { name: 'Overview', href: '/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Performance', href: '/dashboard/performance', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { name: 'Strategy', href: '/dashboard/strategy', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { name: 'Settings', href: '/dashboard/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
    { name: 'Profile', href: '/dashboard/profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Support', href: '/dashboard/support', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
  ];
  
  return (
    <div className={`${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'} min-h-screen flex flex-col`}>
      {/* Mobile menu button - only visible on small screens */}
      <div className="md:hidden fixed top-0 left-0 z-30 flex items-center p-4">
        <button 
          onClick={toggleMobileMenu}
          className={`p-2 rounded-md ${isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'} ${isMobileMenuOpen ? 'hidden' : ''}`}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <div 
        className={`
          ${isDark ? 'bg-gray-800' : 'bg-white'} 
          fixed h-full z-30 shadow-md transition-all duration-300 transform
          md:translate-x-0 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${isSidebarOpen ? 'md:w-64' : 'md:w-20'} 
          w-64
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/dashboard" className={`flex items-center ${!isSidebarOpen && 'md:justify-center'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-70 blur group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
              <span className="relative flex items-center justify-center w-8 h-8 bg-white rounded-full border border-indigo-100 text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text z-10">
                A
              </span>
            </div>
            {(isSidebarOpen || isMobileMenuOpen) && (
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                AtVest
              </span>
            )}
          </Link>
          <button 
            onClick={toggleSidebar}
            className={`hidden md:block ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
          >
            {isSidebarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            )}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`md:hidden ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="mt-5 px-2 overflow-y-auto h-[calc(100vh-5rem)]">
          <div className={`space-y-1 ${!isSidebarOpen && 'md:flex md:flex-col md:items-center'}`}>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  ${isSidebarOpen 
                    ? 'flex items-center px-4 py-3 text-sm font-medium rounded-lg' 
                    : 'md:flex md:justify-center p-3 rounded-lg flex items-center px-4 py-3 text-sm font-medium rounded-lg'
                  } 
                  ${isDark 
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`${isSidebarOpen ? 'mr-3 h-5 w-5' : 'md:mr-0 md:h-6 md:w-6 mr-3 h-5 w-5'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                {(isSidebarOpen || isMobileMenuOpen) && <span>{item.name}</span>}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 md:ml-${isSidebarOpen ? '64' : '20'}`}>
        {/* Header */}
        <header className={`
          ${isDark ? 'bg-gray-800' : 'bg-white'} 
          shadow-md h-16 fixed right-0 left-0 z-20 transition-all duration-300 
          md:ml-${isSidebarOpen ? '64' : '20'}
          pl-16 md:pl-0
        `}>
          <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center">
              <h1 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              
              {/* Theme Toggle */}
              <button 
                onClick={() => toggleTheme()}
                className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              
              {/* User menu */}
              <div className="relative">
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2"
                >
                  <div className="flex-shrink-0 h-8 w-8 rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500">
                    {user?.picture ? (
                      <img src={user.picture} alt={`${user.firstName} ${user.lastName}`} />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-white font-medium">
                        {user?.firstName ? user.firstName[0] : 'A'}
                      </div>
                    )}
                  </div>
                  <span className={`hidden sm:inline-block ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {user?.firstName} {user?.lastName}
                  </span>
                </button>
                
                {isUserMenuOpen && (
                  <div 
                    className={`absolute right-0 mt-2 w-48 py-2 rounded-md shadow-lg ${isDark ? 'bg-gray-700' : 'bg-white'} ring-1 ring-black ring-opacity-5`}
                  >
                    <Link 
                      href="/dashboard/profile" 
                      className={`block px-4 py-2 text-sm ${isDark ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className={`block w-full text-left px-4 py-2 text-sm ${isDark ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="pt-16">
          <div className="px-4 py-6 sm:px-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 