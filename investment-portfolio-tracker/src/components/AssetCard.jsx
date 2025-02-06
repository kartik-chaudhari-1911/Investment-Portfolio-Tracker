import React from 'react';
import '../styles/AssetCard.css';

const AssetCard = ({ data }) => {
  // Check if data is defined and contains the expected keys
  if (!data || !data['Time Series (5min)']) {
    return (
      <div className="asset-card">
        <h2>No Data Available</h2>
        <p>Please check the stock symbol or try again later.</p>
      </div>
    );
  }

  const timeSeries = data['Time Series (5min)'];
  const latestTime = Object.keys(timeSeries)[0];
  const latestData = timeSeries[latestTime];

  return (
    <div className="asset-card">
      <h2>IBM Stock Details</h2>
      <p>Time: {latestTime}</p>
      <p>Open: {latestData['1. open']}</p>
      <p>High: {latestData['2. high']}</p>
      <p>Low: {latestData['3. low']}</p>
      <p>Close: {latestData['4. close']}</p>
      <p>Volume: {latestData['5. volume']}</p>
    </div>
  );
};

export default AssetCard;