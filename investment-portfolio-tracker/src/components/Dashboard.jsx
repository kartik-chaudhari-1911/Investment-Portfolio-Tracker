import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../api/alphaVantage';
import PieChart from './PieChart';
import LineGraph from './LineGraph';
import AssetCard from './AssetCard';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStockData('IBM');
        console.log('Fetched Data:', data); 
        setStockData(data);
      } catch (err) {
        console.error('Error in Dashboard:', err);
        setError('Failed to fetch stock data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="dashboard">Loading...</div>;
  }

  if (error) {
    return <div className="dashboard">{error}</div>;
  }

  return (
    <div className="dashboard">
      <h1>Portfolio Overview</h1>
      <div className="charts">
        <PieChart />
        <LineGraph />
      </div>
      <div className="asset-cards">
        {stockData && <AssetCard data={stockData} />}
      </div>
    </div>
  );
};

export default Dashboard;   