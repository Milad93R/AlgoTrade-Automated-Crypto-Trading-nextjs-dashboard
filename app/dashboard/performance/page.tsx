'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Chart } from 'chart.js/auto';

// Mock data
const monthlyReturns = [
  { month: 'Jan', return: 12.3 },
  { month: 'Feb', return: -5.2 },
  { month: 'Mar', return: 8.7 },
  { month: 'Apr', return: 15.1 },
  { month: 'May', return: -2.8 },
  { month: 'Jun', return: 7.4 },
  { month: 'Jul', return: 9.2 },
  { month: 'Aug', return: 4.5 },
  { month: 'Sep', return: -3.1 },
  { month: 'Oct', return: 11.8 },
  { month: 'Nov', return: 5.6 },
  { month: 'Dec', return: 6.9 }
];

const drawdownData = [
  { date: '2023-01-01', drawdown: 0 },
  { date: '2023-01-15', drawdown: -3 },
  { date: '2023-02-01', drawdown: -12 },
  { date: '2023-02-15', drawdown: -8 },
  { date: '2023-03-01', drawdown: -4 },
  { date: '2023-03-15', drawdown: -15 },
  { date: '2023-04-01', drawdown: -32 },
  { date: '2023-04-15', drawdown: -25 },
  { date: '2023-05-01', drawdown: -18 },
  { date: '2023-05-15', drawdown: -5 },
  { date: '2023-06-01', drawdown: -1 },
  { date: '2023-06-15', drawdown: 0 }
];

const tradingPairs = [
  { name: 'BTC/USDT', allocation: 35, color: 'rgb(247, 147, 26)' },
  { name: 'ETH/USDT', allocation: 25, color: 'rgb(131, 131, 131)' },
  { name: 'SOL/USDT', allocation: 15, color: 'rgb(0, 163, 255)' },
  { name: 'BNB/USDT', allocation: 10, color: 'rgb(240, 185, 11)' },
  { name: 'ADA/USDT', allocation: 8, color: 'rgb(0, 51, 173)' },
  { name: 'DOT/USDT', allocation: 7, color: 'rgb(230, 0, 122)' }
];

const performanceMetrics = [
  { name: 'Annual Return', value: '204.5%', description: 'Annualized return since inception' },
  { name: 'Max Drawdown', value: '53.2%', description: 'Largest peak-to-trough decline' },
  { name: 'Profit Factor', value: '1.5', description: 'Ratio of gross profit to gross loss' },
  { name: 'Sharpe Ratio', value: '1.8', description: 'Return per unit of risk taken' },
  { name: 'Win Rate', value: '33.5%', description: 'Percentage of profitable trades' },
  { name: 'Avg. Profit/Loss', value: '5.8%', description: 'Average profit or loss per trade' },
  { name: 'Avg. Holding Time', value: '4.2 days', description: 'Average trade duration' },
  { name: 'Avg. Profit / Loss Ratio', value: '3.2', description: 'Ratio of average profit to average loss' }
];

export default function PerformancePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Chart references
  const monthlyReturnsChartRef = useRef<Chart | null>(null);
  const drawdownChartRef = useRef<Chart | null>(null);
  const allocationChartRef = useRef<Chart | null>(null);
  
  // Canvas references
  const monthlyReturnsCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawdownCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const allocationCanvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const [timeRange, setTimeRange] = useState('1y');
  const [chartsInitialized, setChartsInitialized] = useState(false);
  
  // Mock data
  const monthlyReturns = [2.4, 1.8, -0.7, 3.2, 1.5, -1.2, 4.3, 2.1, 1.9, -0.4, 2.8, 3.5];
  
  const drawdownData = [
    { month: 'Jan', drawdown: -2.5 },
    { month: 'Feb', drawdown: -3.2 },
    { month: 'Mar', drawdown: -5.1 },
    { month: 'Apr', drawdown: -1.8 },
    { month: 'May', drawdown: -2.9 },
    { month: 'Jun', drawdown: -6.3 },
    { month: 'Jul', drawdown: -3.1 },
    { month: 'Aug', drawdown: -2.5 },
    { month: 'Sep', drawdown: -4.7 },
    { month: 'Oct', drawdown: -2.2 },
    { month: 'Nov', drawdown: -1.9 },
    { month: 'Dec', drawdown: -3.4 },
  ];
  
  const tradingPairs = [
    { name: 'BTC/USDT', allocation: 35 },
    { name: 'ETH/USDT', allocation: 25 },
    { name: 'SOL/USDT', allocation: 15 },
    { name: 'BNB/USDT', allocation: 10 },
    { name: 'ADA/USDT', allocation: 8 },
    { name: 'DOT/USDT', allocation: 7 },
  ];
  
  const performanceMetrics = [
    { name: 'Total Return', value: '32.5%', description: 'Overall return since strategy inception' },
    { name: 'Sharpe Ratio', value: '1.8', description: 'Risk-adjusted return measure' },
    { name: 'Sortino Ratio', value: '2.2', description: 'Downside risk-adjusted return' },
    { name: 'Max Drawdown', value: '-6.3%', description: 'Largest peak-to-trough decline' },
    { name: 'Win Rate', value: '63%', description: 'Percentage of winning trades' },
    { name: 'Average Win', value: '$345', description: 'Average profit per winning trade' },
    { name: 'Average Loss', value: '$210', description: 'Average loss per losing trade' },
    { name: 'Profit Factor', value: '1.7', description: 'Ratio of gross profit to gross loss' },
  ];
  
  // Use effect for initializing charts
  useEffect(() => {
    if (
      !monthlyReturnsCanvasRef.current || 
      !drawdownCanvasRef.current || 
      !allocationCanvasRef.current ||
      chartsInitialized
    ) {
      return;
    }

    // Initialize monthly returns chart
    const monthlyReturnsCtx = monthlyReturnsCanvasRef.current;
    if (monthlyReturnsChartRef.current) {
      monthlyReturnsChartRef.current.destroy();
    }
    
    monthlyReturnsChartRef.current = new Chart(monthlyReturnsCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Monthly Returns (%)',
          data: monthlyReturns,
          backgroundColor: monthlyReturns.map(value => 
            value >= 0 ? 
              isDark ? 'rgba(52, 211, 153, 0.7)' : 'rgba(16, 185, 129, 0.7)' : 
              isDark ? 'rgba(248, 113, 113, 0.7)' : 'rgba(239, 68, 68, 0.7)'
          ),
          borderColor: monthlyReturns.map(value => 
            value >= 0 ? 
              isDark ? 'rgb(52, 211, 153)' : 'rgb(16, 185, 129)' : 
              isDark ? 'rgb(248, 113, 113)' : 'rgb(239, 68, 68)'
          ),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `Return: ${context.parsed.y}%`;
              }
            }
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
              color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
              callback: function(value) {
                return value + '%';
              }
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
    
    // Initialize drawdown chart
    const drawdownCtx = drawdownCanvasRef.current;
    if (drawdownChartRef.current) {
      drawdownChartRef.current.destroy();
    }
    
    drawdownChartRef.current = new Chart(drawdownCtx, {
      type: 'line',
      data: {
        labels: drawdownData.map(item => item.month),
        datasets: [{
          label: 'Max Drawdown (%)',
          data: drawdownData.map(item => item.drawdown),
          fill: true,
          backgroundColor: isDark ? 'rgba(220, 38, 38, 0.2)' : 'rgba(252, 165, 165, 0.2)',
          borderColor: isDark ? 'rgba(220, 38, 38, 0.7)' : 'rgba(239, 68, 68, 0.7)',
          borderWidth: 2,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `Drawdown: ${context.parsed.y}%`;
              }
            }
          },
        },
        scales: {
          y: {
            grid: {
              color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
              color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
              callback: function(value) {
                return value + '%';
              }
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
    
    // Initialize allocation chart
    const allocationCtx = allocationCanvasRef.current;
    if (allocationChartRef.current) {
      allocationChartRef.current.destroy();
    }
    
    allocationChartRef.current = new Chart(allocationCtx, {
      type: 'doughnut',
      data: {
        labels: tradingPairs.map(pair => pair.name),
        datasets: [{
          label: 'Capital Allocation (%)',
          data: tradingPairs.map(pair => pair.allocation),
          backgroundColor: [
            'rgba(99, 102, 241, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(249, 115, 22, 0.7)',
            'rgba(236, 72, 153, 0.7)',
            'rgba(139, 92, 246, 0.7)',
            'rgba(6, 182, 212, 0.7)',
          ],
          borderColor: [
            'rgb(99, 102, 241)',
            'rgb(16, 185, 129)',
            'rgb(249, 115, 22)',
            'rgb(236, 72, 153)',
            'rgb(139, 92, 246)',
            'rgb(6, 182, 212)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
              padding: 10,
              font: {
                size: 11
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.parsed}%`;
              }
            }
          }
        }
      }
    });
    
    setChartsInitialized(true);
    
    // Cleanup function
    return () => {
      if (monthlyReturnsChartRef.current) {
        monthlyReturnsChartRef.current.destroy();
      }
      if (drawdownChartRef.current) {
        drawdownChartRef.current.destroy();
      }
      if (allocationChartRef.current) {
        allocationChartRef.current.destroy();
      }
    };
  }, [isDark, chartsInitialized]);
  
  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
    // In a real app, you would fetch new data based on the selected range
    // and update the charts
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Performance Analysis</h1>
        
        <div className={`inline-flex p-1 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
          {['1m', '3m', '6m', '1y', 'All'].map((range) => (
            <button
              key={range}
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${
                timeRange === range 
                  ? `${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-sm`
                  : `${isDark ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-900 hover:bg-gray-100`
              }`}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      
      {/* Performance Metrics */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Performance Metrics</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
              <div className="flex flex-col">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{metric.name}</span>
                <span className={`text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{metric.value}</span>
                <span className={`text-xs mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{metric.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Charts - Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Returns Chart */}
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Monthly Returns</h2>
          <div className="h-60 sm:h-80">
            <canvas ref={monthlyReturnsCanvasRef} />
          </div>
        </div>
        
        {/* Max Drawdown Chart */}
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Maximum Drawdown</h2>
          <div className="h-60 sm:h-80">
            <canvas ref={drawdownCanvasRef} />
          </div>
        </div>
      </div>
      
      {/* Charts - Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Allocation Chart */}
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Capital Allocation</h2>
          <div className="h-60 sm:h-80">
            <canvas ref={allocationCanvasRef} />
          </div>
        </div>
        
        {/* Trading Statistics */}
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Trading Statistics</h2>
          
          <div className="space-y-4">
            <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Total Trades</span>
                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>247</span>
              </div>
              <div className="h-1 w-full bg-gray-300 dark:bg-gray-600 rounded-full">
                <div className="h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Winning Trades</span>
                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>156 (63%)</span>
              </div>
              <div className="h-1 w-full bg-gray-300 dark:bg-gray-600 rounded-full">
                <div className="h-1 bg-green-500 dark:bg-green-400 rounded-full" style={{ width: '63%' }}></div>
              </div>
            </div>
            
            <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Losing Trades</span>
                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>91 (37%)</span>
              </div>
              <div className="h-1 w-full bg-gray-300 dark:bg-gray-600 rounded-full">
                <div className="h-1 bg-red-500 dark:bg-red-400 rounded-full" style={{ width: '37%' }}></div>
              </div>
            </div>
            
            <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Average Trade Duration</span>
                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>2.4 Days</span>
              </div>
              <div className="h-1 w-full bg-gray-300 dark:bg-gray-600 rounded-full">
                <div className="h-1 bg-yellow-500 dark:bg-yellow-400 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Historical Performance Data */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Historical Performance Data</h2>
        
        {/* Table for larger screens */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className={isDark ? 'bg-gray-700/50' : 'bg-gray-50'}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Period
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Return
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  # of Trades
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Win %
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Profit Factor
                </th>
                <th scope="col" className={`px-6 py-3 text-right text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Profit/Loss
                </th>
              </tr>
            </thead>
            <tbody className={`${isDark ? 'divide-gray-700' : 'divide-gray-200'} divide-y`}>
              {[
                { period: 'January 2023', return: '+3.2%', trades: 24, winRate: '67%', profitFactor: '1.9', profitLoss: '+$1,245.32' },
                { period: 'February 2023', return: '+1.8%', trades: 18, winRate: '61%', profitFactor: '1.6', profitLoss: '+$745.18' },
                { period: 'March 2023', return: '-0.7%', trades: 22, winRate: '45%', profitFactor: '0.9', profitLoss: '-$320.45' },
                { period: 'April 2023', return: '+2.4%', trades: 19, winRate: '68%', profitFactor: '2.1', profitLoss: '+$985.70' },
                { period: 'May 2023', return: '+1.5%', trades: 21, winRate: '57%', profitFactor: '1.4', profitLoss: '+$632.25' },
              ].map((data, index) => (
                <tr key={index} className={isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {data.period}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                    data.return.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {data.return}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {data.trades}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {data.winRate}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                    {data.profitFactor}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm text-right font-medium ${
                    data.profitLoss.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {data.profitLoss}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Cards for mobile view */}
        <div className="md:hidden space-y-4">
          {[
            { period: 'January 2023', return: '+3.2%', trades: 24, winRate: '67%', profitFactor: '1.9', profitLoss: '+$1,245.32' },
            { period: 'February 2023', return: '+1.8%', trades: 18, winRate: '61%', profitFactor: '1.6', profitLoss: '+$745.18' },
            { period: 'March 2023', return: '-0.7%', trades: 22, winRate: '45%', profitFactor: '0.9', profitLoss: '-$320.45' },
            { period: 'April 2023', return: '+2.4%', trades: 19, winRate: '68%', profitFactor: '2.1', profitLoss: '+$985.70' },
            { period: 'May 2023', return: '+1.5%', trades: 21, winRate: '57%', profitFactor: '1.4', profitLoss: '+$632.25' },
          ].map((data, index) => (
            <div key={index} className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              <div className="flex justify-between items-start mb-3">
                <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{data.period}</span>
                <span className={`font-medium ${
                  data.return.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {data.return}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Trades</p>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{data.trades}</p>
                </div>
                
                <div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Win Rate</p>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{data.winRate}</p>
                </div>
                
                <div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Profit Factor</p>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{data.profitFactor}</p>
                </div>
                
                <div>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Profit/Loss</p>
                  <p className={`font-medium ${
                    data.profitLoss.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>{data.profitLoss}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 