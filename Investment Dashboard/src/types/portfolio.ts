export interface Asset {
  purchaseDate: string | number | Date;
  sector: string;
  id: string;
  name: string;
  symbol: string;
  type: 'stock' | 'crypto' | 'bond' | 'commodity';
  quantity: number;
  currentPrice: number;
  purchasePrice: number;
  lastUpdated: string;
  highPrice: number; 
  lowPrice: number;  
  profitLoss: () => number; 
}

export interface PortfolioData {
  totalValue: number;
  assets: Asset[];
  performance: {
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
  };
  marketNews: {
    id: string;
    title: string;
    date: string;
    summary: string;
  }[];
}