const API_KEY = '3W5ZDDUTKVKQJMQB'; // Use the provided demo key

export const fetchPortfolioData = async (symbol = 'IBM') => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};