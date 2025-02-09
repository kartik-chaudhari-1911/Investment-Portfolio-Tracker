import React from 'react';
import { PieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';

interface PortfolioOverviewProps {
  data: PortfolioData;
}

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316', '#84cc16', '#06b6d4'];

export const PortfolioOverview: React.FC<PortfolioOverviewProps> = ({ data }) => {
  const pieData = data.assets.map(asset => ({
    name: asset.name,
    value: asset.currentPrice * asset.quantity,
  }));

  const performanceData = [
    { name: '1D', value: data.performance.daily },
    { name: '1W', value: data.performance.weekly },
    { name: '1M', value: data.performance.monthly },
    { name: '1Y', value: data.performance.yearly },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100">
          <p className="font-medium text-gray-900">{label}</p>
          <p className="text-blue-600 font-semibold">
            ${Number(payload[0].value).toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 bg-gray-50">
      {/* Total Value Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Total Portfolio Value</h3>
          <div className="p-3 bg-blue-50 rounded-full">
            <DollarSign className="text-blue-600 h-6 w-6" />
          </div>
        </div>
        <p className="text-4xl font-bold text-gray-900 mb-4">
          ${data.totalValue.toLocaleString()}
        </p>
        <div className="flex items-center">
          {data.performance.daily >= 0 ? (
            <div className="flex items-center bg-emerald-50 px-3 py-1.5 rounded-full">
              <TrendingUp className="text-emerald-600 mr-2" size={16} />
              <span className="text-emerald-600 font-medium">
                +{data.performance.daily}% Today
              </span>
            </div>
          ) : (
            <div className="flex items-center bg-rose-50 px-3 py-1.5 rounded-full">
              <TrendingDown className="text-rose-600 mr-2" size={16} />
              <span className="text-rose-600 font-medium">
                {data.performance.daily}% Today
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Asset Distribution */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Asset Distribution</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                paddingAngle={2}
              >
                {pieData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Performance Overview</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6b7280' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6b7280' }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                }}
                formatter={(value: number) => [`${value}%`, 'Performance']}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#6366f1' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;