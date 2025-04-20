// This file will export API client functions
// For now, we'll just create a placeholder

export interface ApiConfig {
  baseUrl: string;
  apiKey?: string;
}

let config: ApiConfig = {
  baseUrl: ''
};

export const initializeApi = (apiConfig: ApiConfig) => {
  config = apiConfig;
};

// This will be expanded with actual API endpoints
export const getTradingStrategies = async () => {
  // Placeholder for actual API call
  return [
    { id: 'rasta-trendier', name: 'rasta-trendier Strategy', featured: true },
    { id: 'macd', name: 'MACD Histogram Strategy' },
    { id: 'sma', name: 'SMA Crossover Strategy' }
  ];
}; 