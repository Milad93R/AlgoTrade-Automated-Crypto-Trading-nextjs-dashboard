'use client';

import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

// Define types for our data structures
interface StrategyPreset {
  id: number;
  name: string;
  description: string;
  riskLevel: string;
  expectedReturn: string;
  timeframe: string;
  winRate: string;
  active?: boolean;
}

interface ParameterSetting {
  id: number;
  name: string;
  value: number;
  min: number;
  max: number;
  step: number;
}

interface MarketPair {
  id: number;
  name: string;
  enabled: boolean;
}

// Mock strategy data
const strategyPresets: StrategyPreset[] = [
  { 
    id: 1, 
    name: 'Rasta-Trendier', 
    description: 'High performance trend-following strategy with moderate risk', 
    riskLevel: 'Moderate',
    expectedReturn: '15-25% Annual',
    timeframe: '4h',
    winRate: '63%',
  },
  { 
    id: 2, 
    name: 'Conservative Growth', 
    description: 'Safer approach with consistent but slower gains', 
    riskLevel: 'Low',
    expectedReturn: '8-12% Annual',
    timeframe: '1d',
    winRate: '72%',
  },
  { 
    id: 3, 
    name: 'Secure Income', 
    description: 'Focus on stable assets with income generation', 
    riskLevel: 'Very Low',
    expectedReturn: '5-8% Annual',
    timeframe: '1w',
    winRate: '85%',
  },
];

// Mock parameter settings
const strategyParameters: ParameterSetting[] = [
  { id: 1, name: 'RSI Period', value: 14, min: 7, max: 21, step: 1 },
  { id: 2, name: 'EMA Fast Period', value: 12, min: 5, max: 20, step: 1 },
  { id: 3, name: 'EMA Slow Period', value: 26, min: 15, max: 40, step: 1 },
  { id: 4, name: 'Take Profit %', value: 2.5, min: 0.5, max: 5, step: 0.1 },
  { id: 5, name: 'Stop Loss %', value: 1.5, min: 0.5, max: 3, step: 0.1 },
];

// Mock market pairs
const availablePairs: MarketPair[] = [
  { id: 1, name: 'BTC/USDT', enabled: true },
  { id: 2, name: 'ETH/USDT', enabled: true },
  { id: 3, name: 'XRP/USDT', enabled: false },
  { id: 4, name: 'ADA/USDT', enabled: true },
  { id: 5, name: 'SOL/USDT', enabled: false },
  { id: 6, name: 'DOT/USDT', enabled: false },
  { id: 7, name: 'AVAX/USDT', enabled: true },
  { id: 8, name: 'MATIC/USDT', enabled: true },
];

export default function StrategyPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [activeStrategy, setActiveStrategy] = useState<StrategyPreset>(strategyPresets[0]);
  const [strategyList, setStrategyList] = useState<StrategyPreset[]>(strategyPresets);
  const [parameters, setParameters] = useState<ParameterSetting[]>(strategyParameters);
  const [pairs, setPairs] = useState<MarketPair[]>(availablePairs);
  const [allocation, setAllocation] = useState(50); // % of capital to use
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmationStep, setConfirmationStep] = useState(0);
  
  // Handle parameter change
  const handleParameterChange = (id: number, value: number) => {
    setParameters(prevParameters => 
      prevParameters.map(param => 
        param.id === id ? {...param, value} : param
      )
    );
  };
  
  // Toggle pair selection
  const togglePair = (id: number) => {
    setPairs(prevPairs => 
      prevPairs.map(pair => 
        pair.id === id ? {...pair, enabled: !pair.enabled} : pair
      )
    );
  };
  
  // Select a strategy
  const selectStrategy = (strategy: StrategyPreset) => {
    setActiveStrategy(strategy);
    setShowConfirmModal(true);
    setConfirmationStep(0);
  };
  
  // Handle strategy confirmation
  const confirmStrategyChange = () => {
    if (confirmationStep < 2) {
      setConfirmationStep(prev => prev + 1);
    } else {
      // Apply strategy change
      updateStrategyPresets(
        strategyList.map((strat) => ({
          ...strat,
          active: strat.id === activeStrategy.id
        }))
      );
      setShowConfirmModal(false);
      setConfirmationStep(0);
    }
  };
  
  // Update strategy presets with active status
  const updateStrategyPresets = (newPresets: StrategyPreset[]) => {
    setStrategyList(newPresets);
    // In a real app, this would update the state and call an API
    console.log('Updating strategy presets:', newPresets);
  };

  // Handle selecting a different preset
  const applyStrategyPreset = () => {
    const updatedPresets = strategyList.map((preset: StrategyPreset) => 
      preset.id === activeStrategy.id 
        ? { ...preset, active: true } 
        : { ...preset, active: false }
    );
    updateStrategyPresets(updatedPresets);
    setShowConfirmModal(false);
  };
  
  return (
    <div className="space-y-6">
      <h1 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Trading Strategy
      </h1>
      
      {/* Strategy Selection */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <h2 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Strategy Selection
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {strategyPresets.map((strategy) => (
            <div
              key={strategy.id}
              onClick={() => selectStrategy(strategy)}
              className={`border p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                activeStrategy.id === strategy.id
                  ? isDark
                    ? 'border-indigo-500 bg-indigo-900/20'
                    : 'border-indigo-500 bg-indigo-50'
                  : isDark
                  ? 'border-gray-700 hover:border-gray-600'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex flex-col h-full">
                <h3 className={`text-base font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {strategy.name}
                </h3>
                <p className={`text-sm mt-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {strategy.description}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Risk Level</p>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {strategy.riskLevel}
                    </p>
                  </div>
                  <div>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Expected Return</p>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {strategy.expectedReturn}
                    </p>
                  </div>
                  <div>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Timeframe</p>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {strategy.timeframe}
                    </p>
                  </div>
                  <div>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Win Rate</p>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {strategy.winRate}
                    </p>
                  </div>
                </div>
                {activeStrategy.id === strategy.id && (
                  <div className="mt-3 text-sm text-center">
                    <span className={`px-2 py-1 rounded-full ${
                      isDark ? 'bg-indigo-900/60 text-indigo-200' : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      Active
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Parameter Settings */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <h2 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Parameter Settings
        </h2>
        <div className="space-y-4">
          {parameters.map((param) => (
            <div key={param.id} className="space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={`param-${param.id}`}
                  className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
                >
                  {param.name}
                </label>
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {param.value}
                </span>
              </div>
              <input
                id={`param-${param.id}`}
                type="range"
                min={param.min}
                max={param.max}
                step={param.step}
                value={param.value}
                onChange={(e) => handleParameterChange(param.id, parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <div className="flex justify-between text-xs mt-1">
                <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>{param.min}</span>
                <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>{param.max}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Risk Management */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <h2 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Risk Management
        </h2>
        <div className="space-y-3">
          <div className="space-y-1">
            <label
              htmlFor="capital-allocation"
              className={`block text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Capital Allocation ({allocation}%)
            </label>
            <input
              id="capital-allocation"
              type="range"
              min="1"
              max="100"
              value={allocation}
              onChange={(e) => setAllocation(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs">
              <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>1%</span>
              <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>100%</span>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-yellow-50 border border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800">
            <div className="flex items-start sm:items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-2 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-sm text-yellow-800 dark:text-yellow-200">
                <p>
                  Using {allocation}% of your capital for this strategy. Adjust based on your
                  risk tolerance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trading Pairs */}
      <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border p-4 sm:p-6`}>
        <h2 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Trading Pairs
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {pairs.map((pair) => (
            <button
              key={pair.id}
              onClick={() => togglePair(pair.id)}
              className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg border text-sm text-center transition ${
                pair.enabled
                  ? isDark
                    ? 'bg-indigo-900/30 border-indigo-800 text-indigo-200'
                    : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                  : isDark
                  ? 'bg-gray-700 border-gray-600 text-gray-300'
                  : 'bg-gray-50 border-gray-200 text-gray-500'
              }`}
            >
              {pair.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Apply Button */}
      <div className="flex justify-center sm:justify-end pb-6">
        <button
          onClick={() => setShowConfirmModal(true)}
          className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium"
        >
          Apply Strategy Changes
        </button>
      </div>
      
      {/* Strategy Change Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className={`${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-xl shadow-lg p-6 max-w-md w-full`}>
            <h3 className="text-xl font-semibold mb-4">Confirm Strategy Change</h3>
            
            {confirmationStep === 0 && (
              <div className="space-y-4">
                <p>You're about to apply the <strong>{activeStrategy.name}</strong> strategy to your trading.</p>
                <p>This will adjust your parameters and risk settings.</p>
                <div className="flex justify-end space-x-3 mt-6">
                  <button 
                    onClick={() => setShowConfirmModal(false)}
                    className={`px-4 py-2 rounded-md border ${
                      isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-600'
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmStrategyChange}
                    className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            
            {confirmationStep === 1 && (
              <div className="space-y-4">
                <p>Please review the following changes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Strategy: {activeStrategy.name}</li>
                  <li>Risk Level: {activeStrategy.riskLevel}</li>
                  <li>Capital Allocation: {allocation}%</li>
                  <li>Trading Pairs: {pairs.filter(p => p.enabled).length} enabled</li>
                </ul>
                <div className="flex justify-end space-x-3 mt-6">
                  <button 
                    onClick={() => setShowConfirmModal(false)}
                    className={`px-4 py-2 rounded-md border ${
                      isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-600'
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmStrategyChange}
                    className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
            
            {confirmationStep === 2 && (
              <div className="space-y-4">
                <p>Are you absolutely sure you want to change your trading strategy?</p>
                <p className="text-yellow-500 dark:text-yellow-400">This will reset your current trading positions.</p>
                <div className="flex justify-end space-x-3 mt-6">
                  <button 
                    onClick={() => setShowConfirmModal(false)}
                    className={`px-4 py-2 rounded-md border ${
                      isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-600'
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmStrategyChange}
                    className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    Apply Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}