'use client';

import { useState, useEffect, useMemo } from 'react';
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
  Cell,
  LineChart,
  Line
} from 'recharts';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

type MonthlyResult = {
  month: string;
  balance: number;
  change_from_initial: number;
};

type ApiResponse = {
  monthly_results: MonthlyResult[];
  win_rate: number;
  profit_factor: number;
  win_count: number;
  loss_count: number;
};

// Transform API data for chart display
const transformData = (data: MonthlyResult[]) => {
  try {
    const transformedData: any[] = [];
    if (data.length === 0) return transformedData;
    
    // Month names in order for display
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Process only available months
    data.forEach((item) => {
      const monthIndex = parseInt(item.month.substring(5, 7)) - 1;
      const monthName = monthNames[monthIndex];
      
      transformedData.push({
        name: monthName,
        month: monthName,
        sortIndex: monthIndex,
        profit: 0, // Will be calculated below
        balance: item.balance,
        fullMonth: item.month
      });
    });
    
    // Calculate monthly profit percentages
    for (let i = 0; i < transformedData.length; i++) {
      if (i === 0) {
        // First month starts from 0
        transformedData[i].profit = 0;
      } else {
        const prevBalance = transformedData[i - 1].balance;
        const currentBalance = transformedData[i].balance;
        const percentChange = ((currentBalance - prevBalance) / prevBalance) * 100;
        transformedData[i].profit = parseFloat(percentChange.toFixed(2));
      }
    }
    
    console.log("Transformed result:", transformedData);
    return transformedData;
  } catch (err) {
    console.error("Error transforming data:", err);
    return [];
  }
};

// Calculate cumulative returns based on balance values
const calculateCumulative = (yearData: any[]) => {
  try {
    if (!yearData || yearData.length === 0) return [];
    
    // Start at 0% growth (index 100)
    const baseValue = yearData[0].balance;
    if (baseValue === 0) return yearData; // Avoid division by zero
    
    const result = yearData.map((item, index) => {
      let cumulativeValue;
      
      // First month always starts at 0% growth
      if (index === 0) {
        cumulativeValue = 0;
      } else {
        cumulativeValue = ((item.balance / baseValue) * 100) - 100;
      }
      
      return {
        ...item,
        cumulative: parseFloat(cumulativeValue.toFixed(2))
      };
    });
    
    return result;
  } catch (err) {
    console.error("Error calculating cumulative data:", err);
    return [];
  }
};

export default function MonthlyResultsChart() {
  const [selectedYear, setSelectedYear] = useState('2021');
  const [chartType, setChartType] = useState<'bar' | 'line'>('line');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [yearlyData, setYearlyData] = useState<Record<string, any[]>>({});
  const [stats, setStats] = useState<{
    win_rate: number;
    profit_factor: number;
    win_count: number;
    loss_count: number;
  } | null>(null);
  
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const years = ['2021', '2022', '2023', '2024', '2025'];
  
  useEffect(() => {
    const fetchYearData = async (year: string) => {
      if (yearlyData[year] && yearlyData[year].length > 0) return; // Skip if we already have this year's data
      
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`http://localhost:8001/api/v1/results/monthly/rasta1-${year}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${year}`);
        }
        
        const data: ApiResponse = await response.json();
        console.log(data);
        
        // Filter data for just this year (API might return a bit of next year)
        const yearMonthPrefix = year + '-';
        const filteredData = data.monthly_results.filter(item => 
          item.month.startsWith(yearMonthPrefix)
        );
        
        if (filteredData.length === 0) {
          console.warn(`No data found for year ${year}`);
          setYearlyData(prev => ({
            ...prev,
            [year]: []
          }));
          return;
        }
        
        const transformedData = transformData(filteredData);
        console.log("Transformed data for year:", year, transformedData);
        
        setYearlyData(prev => ({
          ...prev,
          [year]: transformedData
        }));
        
        // If this is the currently selected year, also update stats
        if (year === selectedYear) {
          setStats({
            win_rate: data.win_rate,
            profit_factor: data.profit_factor,
            win_count: data.win_count,
            loss_count: data.loss_count
          });
        }
      } catch (err) {
        console.error(`Error fetching data for ${year}:`, err);
        setError(`Failed to load data for ${year}. Please try again later.`);
      } finally {
        setIsLoading(false);
      }
    };
    
    // Fetch the selected year first
    fetchYearData(selectedYear);
    
    // Then fetch a couple of adjacent years for quick switching
    const yearIndex = years.indexOf(selectedYear);
    if (yearIndex > 0) {
      fetchYearData(years[yearIndex - 1]); // Fetch previous year
    }
    if (yearIndex < years.length - 1) {
      fetchYearData(years[yearIndex + 1]); // Fetch next year
    }
  }, [selectedYear]); // We need to remove 'yearlyData' from the dependency array to avoid infinite loops
  
  // Memoize the current year data to avoid unnecessary recalculations
  const currentYearData = useMemo(() => yearlyData[selectedYear] || [], [yearlyData, selectedYear]);
  
  // Memoize cumulative data calculation
  const cumulativeData = useMemo(() => calculateCumulative(currentYearData), [currentYearData]);
  
  // Prepare data for display - sort by month
  const displayData = useMemo(() => {
    // Sort by month index to ensure correct order (Jan to Dec)
    const sortedData = [...currentYearData].sort((a, b) => a.sortIndex - b.sortIndex);
    
    console.log("Display data (sorted):", sortedData);
    
    // Log a sample data point if available to check the structure
    if (sortedData && sortedData.length > 0) {
      console.log("Sample data point:", sortedData[0]);
      console.log("Data keys:", Object.keys(sortedData[0]));
    }
    
    return sortedData;
  }, [currentYearData]);
  
  // Ensure we're rendering the component
  useEffect(() => {
    console.log("MonthlyResultsChart rendered");
    console.log("Chart type:", chartType);
    console.log("Selected year:", selectedYear);
    console.log("Current year data length:", currentYearData.length);
    console.log("Has yearly data for selected year:", Boolean(yearlyData[selectedYear]));
  }, [chartType, selectedYear, currentYearData.length, yearlyData]);
  
  // Get color based on profit
  const getBarColor = (value: number) => {
    return value >= 0 ? '#10B981' : '#EF4444';
  };
  
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataItem = payload[0].payload;
      
      return (
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-3 rounded-lg shadow-lg border`}>
          <p className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{`${label} (${dataItem.fullMonth})`}</p>
          <p className="text-indigo-500">
            <span className="font-medium">Balance: </span>
            {`$${dataItem.balance.toLocaleString()}`}
          </p>
          <p className={dataItem.profit >= 0 ? "text-green-500" : "text-red-500"}>
            <span className="font-medium">Monthly Change: </span>
            {`${dataItem.profit}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  const renderStatsSection = () => {
    if (!stats) return null;
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Win Rate</h3>
          <p className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{stats.win_rate}%</p>
        </div>
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Profit Factor</h3>
          <p className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{stats.profit_factor}</p>
        </div>
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Winning Trades</h3>
          <p className={`text-2xl font-bold text-green-500`}>{stats.win_count}</p>
        </div>
        <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Losing Trades</h3>
          <p className={`text-2xl font-bold text-red-500`}>{stats.loss_count}</p>
        </div>
      </div>
    );
  };

  // Add this new useEffect to update stats when year changes
  useEffect(() => {
    const updateStatsForSelectedYear = async () => {
      // If we already have the year's data in yearlyData
      if (yearlyData[selectedYear] && yearlyData[selectedYear].length > 0) {
        try {
          // We need to fetch the stats from the API again since we only have the transformed data
          const response = await fetch(`http://localhost:8001/api/v1/results/monthly/rasta1-${selectedYear}`);
          
          if (!response.ok) {
            throw new Error(`Failed to fetch stats for ${selectedYear}`);
          }
          
          const data: ApiResponse = await response.json();
          
          // Update the stats with the current year's data
          setStats({
            win_rate: data.win_rate,
            profit_factor: data.profit_factor,
            win_count: data.win_count,
            loss_count: data.loss_count
          });
        } catch (err) {
          console.error(`Error fetching stats for ${selectedYear}:`, err);
        }
      }
    };
    
    updateStatsForSelectedYear();
  }, [selectedYear, yearlyData]);

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-xl p-6 w-full`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4 md:mb-0`}>
          Monthly Performance
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <label className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Chart Type:</label>
            <select 
              value={chartType}
              onChange={(e) => setChartType(e.target.value as 'bar' | 'line')}
              className={`${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-gray-100 border-gray-300 text-gray-800'
              } border rounded-md p-2`}
            >
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {years.map((year) => (
          <motion.button
            key={year}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleYearChange(year)}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedYear === year
                ? 'bg-indigo-600 text-white'
                : isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {year}
          </motion.button>
        ))}
      </div>
      
      {renderStatsSection()}
      
      {isLoading && !yearlyData[selectedYear] ? (
        <div className="w-full h-80 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
        </div>
      ) : error ? (
        <div className="w-full h-80 flex items-center justify-center">
          <p className="text-red-500">{error}</p>
        </div>
      ) : displayData.length === 0 ? (
        <div className="w-full h-80 flex items-center justify-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>No data available for {selectedYear}</p>
        </div>
      ) : (
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="90%">
            {chartType === 'line' ? (
              <LineChart
                data={displayData}
                margin={{ top: 10, right: 30, left: 20, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end"
                  height={70}
                  tickMargin={20}
                  tickFormatter={(value, index) => displayData[index].name}
                />
                <YAxis 
                  scale="log"
                  domain={['auto', 'auto']}
                  tickFormatter={(value) => `$${value}`}
                  allowDataOverflow={true}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="balance" 
                  name="Account Balance ($)" 
                  stroke="#6366F1" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            ) : (
              <BarChart 
                data={displayData}
                margin={{ top: 10, right: 30, left: 20, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end"
                  height={70}
                  tickMargin={20}
                  tickFormatter={(value, index) => displayData[index].name}
                />
                <YAxis 
                  scale="log"
                  domain={['auto', 'auto']}
                  tickFormatter={(value) => `$${value}`}
                  allowDataOverflow={true}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar 
                  dataKey="balance" 
                  name="Account Balance ($)" 
                  fill="#6366F1" 
                  fillOpacity={0.8}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      )}
      
      {selectedYear && yearlyData[selectedYear] && yearlyData[selectedYear].length > 0 && (
        <div className="mt-6 px-4 py-3 rounded-lg bg-indigo-50 dark:bg-gray-700/50 text-sm">
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            <span className="font-medium">Starting Balance:</span> ${yearlyData[selectedYear][0].balance.toLocaleString()}
            {yearlyData[selectedYear].length > 1 && (
              <>
                <span className="mx-2">→</span>
                <span className="font-medium">Ending Balance:</span> ${yearlyData[selectedYear][yearlyData[selectedYear].length - 1].balance.toLocaleString()}
                <span className="mx-2">→</span>
                <span className="font-medium">Year Growth:</span> 
                <span className={getYearGrowthColor(yearlyData[selectedYear])}>
                  {calculateYearGrowth(yearlyData[selectedYear])}%
                </span>
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

// Helper function to calculate total year growth percentage
function calculateYearGrowth(yearData: any[]): string {
  if (!yearData || yearData.length < 2) return '0';
  
  const startBalance = yearData[0].balance;
  const endBalance = yearData[yearData.length - 1].balance;
  const growthPercent = ((endBalance - startBalance) / startBalance) * 100;
  
  return growthPercent.toFixed(2);
}

// Helper to determine color based on year growth
function getYearGrowthColor(yearData: any[]): string {
  const growth = parseFloat(calculateYearGrowth(yearData));
  
  if (growth > 0) return 'text-green-600 dark:text-green-400 font-medium';
  if (growth < 0) return 'text-red-600 dark:text-red-400 font-medium';
  return 'text-gray-600 dark:text-gray-400 font-medium';
} 