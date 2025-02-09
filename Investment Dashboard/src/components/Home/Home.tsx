import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp, Activity, DollarSign } from 'lucide-react';
import { PortfolioData, Asset } from '../../types/portfolio';

interface HomeProps {
  data: PortfolioData;
  onAssetSelect: (asset: Asset) => void;
}

export const Home: React.FC<HomeProps> = ({ data, onAssetSelect }) => {
  const topPerformers = [...data.assets]
    .sort((a, b) => {
      const aPerformance = (a.currentPrice - a.purchasePrice) / a.purchasePrice;
      const bPerformance = (b.currentPrice - b.purchasePrice) / b.purchasePrice;
      return bPerformance - aPerformance;
    })
    .slice(0, 3);

  const totalGainLoss = data.assets.reduce((acc, asset) => {
    const gainLoss = (asset.currentPrice - asset.purchasePrice) * asset.quantity;
    return acc + gainLoss;
  }, 0);

  return (
    <div className="space-y-8 p-6 bg-gray-50">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl shadow-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-3">Welcome to Investment Portfolio Tracker</h1>
        <p className="text-indigo-100 text-lg">Track your investments and make informed decisions</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Portfolio Value</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">${data.totalValue.toLocaleString()}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-full">
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Gain/Loss</p>
              <p className={`text-3xl font-bold mt-2 ${totalGainLoss >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                ${Math.abs(totalGainLoss).toLocaleString()}
                <span className="text-lg ml-1">{totalGainLoss >= 0 ? 'Gain' : 'Loss'}</span>
              </p>
            </div>
            <div className={`p-3 rounded-full ${totalGainLoss >= 0 ? 'bg-emerald-50' : 'bg-rose-50'}`}>
              {totalGainLoss >= 0 ? (
                <ArrowUpRight className="h-8 w-8 text-emerald-600" />
              ) : (
                <ArrowDownRight className="h-8 w-8 text-rose-600" />
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Portfolio Performance</p>
              <p className="text-3xl font-bold text-indigo-600 mt-2">{data.performance.monthly}% MTD</p>
            </div>
            <div className="bg-indigo-50 p-3 rounded-full">
              <Activity className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Top Performers</h2>
          <div className="bg-emerald-50 p-2 rounded-full">
            <TrendingUp className="h-6 w-6 text-emerald-600" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPerformers.map(asset => {
            const performance = ((asset.currentPrice - asset.purchasePrice) / asset.purchasePrice) * 100;
            return (
              <div
                key={asset.id}
                className="p-6 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-200 hover:shadow-md"
                onClick={() => onAssetSelect(asset)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{asset.name}</h3>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                    {asset.symbol}
                  </span>
                </div>
                <p className={`text-xl font-bold ${performance >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  ${asset.currentPrice.toLocaleString()}
                  <span className="text-sm ml-2">({performance.toFixed(2)}%)</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;