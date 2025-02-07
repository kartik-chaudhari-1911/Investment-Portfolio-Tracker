import { useState } from 'react';
import { PortfolioOverview } from './components/Dashboard/PortfolioOverview';
import { AssetList } from './components/AssetList/AssetList';
import { Navbar } from './components/Navigation/Navbar';
import { Home } from './components/Home/Home';
import { PortfolioData, Asset } from './types/portfolio';

// Mock data for demonstration
const mockPortfolioData: PortfolioData = {
  totalValue: 200000,
  assets: [
    {
      id: '1',
      name: 'Apple Inc.',
      symbol: 'AAPL',
      type: 'stock',
      quantity: 100,
      currentPrice: 175.50,
      purchasePrice: 150.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-15',
      sector: 'Technology',
      highPrice: 180.00,
      lowPrice: 145.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '2',
      name: 'Bitcoin',
      symbol: 'BTC',
      type: 'crypto',
      quantity: 0.5,
      currentPrice: 65000,
      purchasePrice: 50000,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-02-10',
      sector: 'Cryptocurrency',
      highPrice: 70000,
      lowPrice: 30000,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '3',
      name: 'US Treasury Bond',
      symbol: 'USTB',
      type: 'bond',
      quantity: 10,
      currentPrice: 1000,
      purchasePrice: 980,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-03-05',
      sector: 'Bonds',
      highPrice: 1020,
      lowPrice: 950,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '4',
      name: 'Tesla Inc.',
      symbol: 'TSLA',
      type: 'stock',
      quantity: 50,
      currentPrice: 720.00,
      purchasePrice: 600.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-20',
      sector: 'Automotive',
      highPrice: 750.00,
      lowPrice: 580.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '5',
      name: 'Ethereum',
      symbol: 'ETH',
      type: 'crypto',
      quantity: 2,
      currentPrice: 4500,
      purchasePrice: 3000,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-02-15',
      sector: 'Cryptocurrency',
      highPrice: 4800,
      lowPrice: 2000,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '6',
      name: 'Amazon.com Inc.',
      symbol: 'AMZN',
      type: 'stock',
      quantity: 30,
      currentPrice: 3400.00,
      purchasePrice: 3200.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-25',
      sector: 'E-commerce',
      highPrice: 3500.00,
      lowPrice: 3100.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '7',
      name: 'Microsoft Corp.',
      symbol: 'MSFT',
      type: 'stock',
      quantity: 80,
      currentPrice: 290.00,
      purchasePrice: 250.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-30',
      sector: 'Technology',
      highPrice: 300.00,
      lowPrice: 240.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '8',
      name: 'Litecoin',
      symbol: 'LTC',
      type: 'crypto',
      quantity: 10,
      currentPrice: 200,
      purchasePrice: 150,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-02-20',
      sector: 'Cryptocurrency',
      highPrice: 250,
      lowPrice: 100,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '9',
      name: 'Facebook Inc.',
      symbol: 'FB',
      type: 'stock',
      quantity: 40,
      currentPrice: 350.00,
      purchasePrice: 300.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-10',
      sector: 'Technology',
      highPrice: 360.00,
      lowPrice: 290.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '10',
      name: 'Berkshire Hathaway',
      symbol: 'BRK.A',
      type: 'stock',
      quantity: 1,
      currentPrice: 420000,
      purchasePrice: 400000,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-05',
      sector: 'Finance',
      highPrice: 425000,
      lowPrice: 390000,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '11',
      name: 'Silver ETF',
      symbol: 'SLV',
      type: 'stock',
      quantity: 100,
      currentPrice: 25,
      purchasePrice: 22,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-02-25',
      sector: 'Commodities',
      highPrice: 27,
      lowPrice: 20,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '12',
      name: 'Google LLC',
      symbol: 'GOOGL',
      type: 'stock',
      quantity: 20,
      currentPrice: 2800.00,
      purchasePrice: 2500.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-12',
      sector: 'Technology',
      highPrice: 2900.00,
      lowPrice: 2400.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '13',
      name: 'Cardano',
      symbol: 'ADA',
      type: 'crypto',
      quantity: 500,
      currentPrice: 2.00,
      purchasePrice: 1.50,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-02-18',
      sector: 'Cryptocurrency',
      highPrice: 2.50,
      lowPrice: 1.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '14',
      name: 'Johnson & Johnson',
      symbol: 'JNJ',
      type: 'stock',
      quantity: 60,
      currentPrice: 170.00,
      purchasePrice: 160.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-28',
      sector: 'Healthcare',
      highPrice: 175.00,
      lowPrice: 150.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '15',
      name: 'NVIDIA Corp.',
      symbol: 'NVDA',
      type: 'stock',
      quantity: 25,
      currentPrice: 800.00,
      purchasePrice: 700.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-22',
      sector: 'Technology',
      highPrice: 850.00,
      lowPrice: 650.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '16',
      name: 'Procter & Gamble Co.',
      symbol: 'PG',
      type: 'stock',
      quantity: 50,
      currentPrice: 140.00,
      purchasePrice: 130.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-18',
      sector: 'Consumer Goods',
      highPrice: 145.00,
      lowPrice: 125.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '17',
      name: 'Coca-Cola Co.',
      symbol: 'KO',
      type: 'stock',
      quantity: 100,
      currentPrice: 60.00,
      purchasePrice: 55.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-15',
      sector: 'Beverages',
      highPrice: 62.00,
      lowPrice: 50.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '18',
      name: 'Walmart Inc.',
      symbol: 'WMT',
      type: 'stock',
      quantity: 80,
      currentPrice: 150.00,
      purchasePrice: 140.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-10',
      sector: 'Retail',
      highPrice: 155.00,
      lowPrice: 135.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '19',
      name: 'Visa Inc.',
      symbol: 'V',
      type: 'stock',
      quantity: 70,
      currentPrice: 220.00,
      purchasePrice: 200.00,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-01-08',
      sector: 'Finance',
      highPrice: 225.00,
      lowPrice: 190.00,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    },
    {
      id: '20',
      name: 'Gold',
      symbol: 'GOLD',
      type: 'commodity',
      quantity: 5,
      currentPrice: 1800,
      purchasePrice: 1700,
      lastUpdated: new Date().toISOString(),
      purchaseDate: '2023-02-01',
      sector: 'Commodities',
      highPrice: 1850,
      lowPrice: 1600,
      profitLoss: function () {
        return (this.currentPrice - this.purchasePrice) * this.quantity;
      }
    }
  ],
  performance: {
    daily: 2.5,
    weekly: 5.8,
    monthly: 12.3,
    yearly: 28.7
  },
  marketNews: [
    {
      id: '1',
      title: 'Federal Reserve Maintains Interest Rates',
      date: '2025-02-06',
      summary: 'The Federal Reserve decided to maintain current interest rates...'
    },
    {
      id: '2',
      title: 'Tech Stocks Rally Continues',
      date: '2025-02-06',
      summary: 'Major tech stocks continue their upward trend...'
    },
    {
      id: '3',
      title: 'Cryptocurrency Market Shows Strong Recovery',
      date: '2025-02-06',
      summary: 'Bitcoin and other cryptocurrencies show significant gains...'
    },
    {
      id: '4',
      title: 'Oil Prices Surge Amid Supply Concerns',
      date: '2025-02-06',
      summary: 'Rising tensions in the Middle East have led to increased oil prices...'
    },
    {
      id: '5',
      title: 'Global Markets React to Economic Data',
      date: '2025-02-06',
      summary: 'Investors are closely watching economic indicators as markets fluctuate...'
    },
    {
      id: '6',
      title: 'New Tech Innovations Set to Disrupt Industries',
      date: '2025-02-07',
      summary: 'Emerging technologies are expected to transform various sectors...'
    },
    {
      id: '7',
      title: 'Inflation Rates Hit Record Highs',
      date: '2025-02-07',
      summary: 'Recent reports indicate inflation is affecting consumer prices significantly...'
    },
    {
      id: '8',
      title: 'Stock Market Volatility Increases',
      date: '2025-02-07',
      summary: 'Market analysts are predicting continued fluctuations in stock prices...'
    },
    {
      id: '9',
      title: 'Renewable Energy Investments Surge',
      date: '2025-02-07',
      summary: 'Investors are increasingly focusing on sustainable energy solutions...'
    },
    {
      id: '10',
      title: 'Global Supply Chain Issues Persist',
      date: '2025-02-07',
      summary: 'Ongoing supply chain disruptions are impacting various industries...'
    }
  ]
};


function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio' | 'news'>('home');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const handleAssetSelect = (asset: Asset) => {
    setSelectedAsset(asset);
    setCurrentPage('portfolio');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {currentPage === 'home' && (
          <Home data={mockPortfolioData} onAssetSelect={handleAssetSelect} />
        )}

        {currentPage === 'portfolio' && (
          <>
            <PortfolioOverview data={mockPortfolioData} />

            <div className="mt-6">
              <AssetList
                assets={mockPortfolioData.assets}
                onAssetSelect={setSelectedAsset}
              />
            </div>

            {selectedAsset && (
              <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{selectedAsset.name} Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Current Price</p>
                    <p className="text-lg font-semibold">${selectedAsset.currentPrice.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Quantity</p>
                    <p className="text-lg font-semibold">{selectedAsset.quantity}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Value</p>
                    <p className="text-lg font-semibold">
                      ${(selectedAsset.currentPrice * selectedAsset.quantity).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Purchase Price</p>
                    <p className="text-lg font-semibold">${selectedAsset.purchasePrice.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {currentPage === 'news' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6">Market News</h2>
            <div className="space-y-6">
              {mockPortfolioData.marketNews.map(news => (
                <div key={news.id} className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <p className="text-gray-700">{news.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;