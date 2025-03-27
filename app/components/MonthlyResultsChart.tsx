'use client';

import { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  ReferenceLine,
  Cell
} from 'recharts';
import { motion } from 'framer-motion';

// Mock data - Replace with actual data from your API
const mockData = {
  '2023': [
    { month: 'Jan', profit: 5.2 },
    { month: 'Feb', profit: -2.1 },
    { month: 'Mar', profit: 7.5 },
    { month: 'Apr', profit: 3.8 },
    { month: 'May', profit: -1.4 },
    { month: 'Jun', profit: 6.2 },
    { month: 'Jul', profit: 8.9 },
    { month: 'Aug', profit: -3.2 },
    { month: 'Sep', profit: 4.1 },
    { month: 'Oct', profit: 2.7 },
    { month: 'Nov', profit: 9.3 },
    { month: 'Dec', profit: -0.8 },
  ],
  '2024': [
    { month: 'Jan', profit: 4.7 },
    { month: 'Feb', profit: 6.3 },
    { month: 'Mar', profit: -1.9 },
    // Add more months as they come
  ],
};

// Calculate cumulative returns
const calculateCumulative = (yearData: any[]) => {
  let cumulative = 100; // Starting with 100
  return yearData.map((item) => {
    cumulative = cumulative * (1 + item.profit / 100);
    return {
      ...item,
      cumulative: parseFloat(cumulative.toFixed(2)),
    };
  });
};

export default function MonthlyResultsChart() {
  const [selectedYear, setSelectedYear] = useState('2023');
  const [showCumulative, setShowCumulative] = useState(false);
  
  const years = Object.keys(mockData);
  const currentYearData = mockData[selectedYear as keyof typeof mockData] || [];
  const cumulativeData = calculateCumulative(currentYearData);

  const displayData = showCumulative ? cumulativeData : currentYearData;
  
  // Get color based on profit
  const getBarColor = (value: number) => {
    return value >= 0 ? '#10B981' : '#EF4444';
  };
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-gray-700 dark:text-gray-300">{`${label}`}</p>
          {showCumulative ? (
            <p className="text-indigo-600 dark:text-indigo-400">
              <span className="font-medium">Value: </span>
              {`${payload[0].value}`}
            </p>
          ) : (
            <p className={payload[0].value >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
              <span className="font-medium">Profit: </span>
              {`${payload[0].value}%`}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
          Monthly Performance
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <label className="text-gray-700 dark:text-gray-300">Display:</label>
            <select 
              value={showCumulative ? 'cumulative' : 'monthly'}
              onChange={(e) => setShowCumulative(e.target.value === 'cumulative')}
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 text-gray-800 dark:text-white"
            >
              <option value="monthly">Monthly Returns</option>
              <option value="cumulative">Cumulative Value</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-gray-700 dark:text-gray-300">Year:</label>
            <div className="flex space-x-2">
              {years.map((year) => (
                <motion.button
                  key={year}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedYear === year
                      ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                      : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {year}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          {showCumulative ? (
            <BarChart 
              data={displayData}
              margin={{ top: 10, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeOpacity={0.2} />
              <XAxis 
                dataKey="month" 
                angle={-45} 
                textAnchor="end"
                height={70}
                tickMargin={20}
                tick={{ fill: 'currentColor' }}
                className="text-gray-600 dark:text-gray-400"
              />
              <YAxis 
                tick={{ fill: 'currentColor' }}
                className="text-gray-600 dark:text-gray-400"
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                dataKey="cumulative" 
                name="Account Value" 
                fill="#6366F1" 
                fillOpacity={0.8}
                radius={[4, 4, 0, 0]}
              />
              <ReferenceLine y={100} stroke="#6366F1" strokeDasharray="3 3" />
            </BarChart>
          ) : (
            <BarChart 
              data={displayData}
              margin={{ top: 10, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeOpacity={0.2} />
              <XAxis 
                dataKey="month" 
                angle={-45} 
                textAnchor="end"
                height={70}
                tickMargin={20}
                tick={{ fill: 'currentColor' }}
                className="text-gray-600 dark:text-gray-400"
              />
              <YAxis 
                tick={{ fill: 'currentColor' }}
                className="text-gray-600 dark:text-gray-400"
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <ReferenceLine y={0} stroke="#9CA3AF" />
              <Bar 
                dataKey="profit" 
                name="Monthly Profit %" 
                fill="#10B981"
                radius={[4, 4, 0, 0]}
              >
                {displayData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.profit)} />
                ))}
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
} 