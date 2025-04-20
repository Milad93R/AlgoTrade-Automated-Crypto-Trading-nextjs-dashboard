'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Chart } from 'chart.js/auto';

// Mock data for demonstration
const mockPerformanceData = [65, 59, 80, 81, 56, 55, 72, 60, 55, 83, 79, 89];
const mockLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Mock recent trades
const mockRecentTrades = [
  { id: 1, pair: 'BTC/USDT', type: 'BUY', amount: '0.05', price: '37,245.32', time: '2023-05-01T09:45:00', profit: '+$350.65' },
  { id: 2, pair: 'ETH/USDT', type: 'SELL', amount: '1.2', price: '2,541.18', time: '2023-05-01T10:30:00', profit: '+$124.32' },
  { id: 3, pair: 'SOL/USDT', type: 'BUY', amount: '12.5', price: '83.76', time: '2023-05-01T11:15:00', profit: '-$52.80' },
  { id: 4, pair: 'BNB/USDT', type: 'SELL', amount: '2.7', price: '386.42', time: '2023-05-01T13:20:00', profit: '+$98.45' },
  { id: 5, pair: 'ADA/USDT', type: 'BUY', amount: '450', price: '0.542', time: '2023-05-01T14:05:00', profit: '-$25.30' },
];

export default function Dashboard() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const chartRef = useRef<Chart | null>(null);
  const chartCanvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Simple chart implementation
  useEffect(() => {
    if (!chartCanvasRef.current) {
      const canvas = document.getElementById('performanceChart') as HTMLCanvasElement;
      if (!canvas) return;
      chartCanvasRef.current = canvas;
    }
    
    const ctx = chartCanvasRef.current;
    
    // Destroy previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }
    
    // Create new chart
    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: mockLabels,
        datasets: [{
          label: 'Monthly Performance (%)',
          data: mockPerformanceData,
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          borderColor: 'rgb(99, 102, 241)',
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: 'rgb(99, 102, 241)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
              color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
            }
          },
          x: {
            grid: {
              color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
              color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
            }
          }
        }
      }
    });
    
    chartRef.current = newChart;
    
    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [isDark]);
  
  return (
    <div className="space-y-6">
      <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Account Balance */}
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Account Balance</p>
              <h2 className={`text-xl sm:text-2xl font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>$24,895.32</h2>
            </div>
            <div className={`${isDark ? 'bg-indigo-900/30 text-indigo-300' : 'bg-indigo-100 text-indigo-600'} p-2 rounded-lg`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              <span>+5.25%</span>
            </div>
            <span className={`text-xs ml-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>from last month</span>
          </div>
        </div>
        
        {/* Monthly Profit */}
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Monthly Profit</p>
              <h2 className={`text-xl sm:text-2xl font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>$1,240.65</h2>
            </div>
            <div className={`${isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-600'} p-2 rounded-lg`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              <span>+12.4%</span>
            </div>
            <span className={`text-xs ml-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>from last month</span>
          </div>
        </div>
        
        {/* Win Rate */}
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Win Rate</p>
              <h2 className={`text-xl sm:text-2xl font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>33%</h2>
            </div>
            <div className={`${isDark ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-600'} p-2 rounded-lg`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              <span>+2.1%</span>
            </div>
            <span className={`text-xs ml-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>from last month</span>
          </div>
        </div>
        
        {/* Profit Factor */}
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Profit Factor</p>
              <h2 className={`text-xl sm:text-2xl font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>1.5</h2>
            </div>
            <div className={`${isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-600'} p-2 rounded-lg`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
              <span>0.0%</span>
            </div>
            <span className={`text-xs ml-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>stable</span>
          </div>
        </div>
      </div>
      
      {/* Performance Chart */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Performance Overview</h2>
        <div className="h-60 sm:h-80">
          <canvas id="performanceChart"></canvas>
        </div>
      </div>
      
      {/* Recent Trades */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Recent Trades</h2>
          <button className={`text-sm font-medium ${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'}`}>
            View All
          </button>
        </div>
        
        {/* Table for larger screens */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className={isDark ? 'bg-gray-700/50' : 'bg-gray-50'}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Pair
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Type
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Amount
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Price
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Time
                </th>
                <th scope="col" className={`px-6 py-3 text-right text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Profit/Loss
                </th>
              </tr>
            </thead>
            <tbody className={`${isDark ? 'divide-gray-700' : 'divide-gray-200'} divide-y`}>
              {mockRecentTrades.map((trade) => (
                <tr key={trade.id} className={isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {trade.pair}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      trade.type === 'BUY' 
                        ? isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'
                        : isDark ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800'
                    }`}>
                      {trade.type}
                    </span>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {trade.amount}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    ${trade.price}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {new Date(trade.time).toLocaleString()}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm text-right font-medium ${
                    trade.profit.startsWith('+') 
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}>
                    {trade.profit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Cards for mobile view */}
        <div className="md:hidden space-y-4">
          {mockRecentTrades.map((trade) => (
            <div key={trade.id} className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{trade.pair}</span>
                  <span className={`ml-2 ${
                    trade.profit.startsWith('+') 
                      ? 'text-green-500'
                      : 'text-red-500'
                  } font-medium`}>
                    {trade.profit}
                  </span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  trade.type === 'BUY' 
                    ? isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'
                    : isDark ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800'
                }`}>
                  {trade.type}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Amount</p>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{trade.amount}</p>
                </div>
                <div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Price</p>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-800'}`}>${trade.price}</p>
                </div>
                <div className="col-span-2">
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Time</p>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{new Date(trade.time).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Strategy Status */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
          <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Strategy Status</h2>
          <button className={`inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Switch Strategy
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className={`border ${isDark ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-4`}>
            <div className="flex justify-between items-center mb-2">
              <h3 className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Current Strategy</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Rasta-Trendier</p>
          </div>
          
          <div className={`border ${isDark ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-4`}>
            <div className="flex justify-between items-center mb-2">
              <h3 className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Running Since</h3>
              <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>2 months</span>
            </div>
            <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Mar 10, 2023</p>
          </div>
          
          <div className={`border ${isDark ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-4`}>
            <div className="flex justify-between items-center mb-2">
              <h3 className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Next Optimization</h3>
              <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>5 days left</span>
            </div>
            <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Jun 15, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
