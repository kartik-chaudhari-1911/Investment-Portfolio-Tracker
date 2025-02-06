export const mockAssets = [
   // Technology Sector - Mixed Performance
   {
    id: 1,
    name: "Apple Inc.",
    symbol: "AAPL",
    type: "stock",
    sector: "Technology",
    marketCap: "large",
    currentPrice: 190,
    purchasePrice: 120,  // +58% gain
  },
  {
    id: 2,
    name: "Microsoft",
    symbol: "MSFT",
    type: "stock",
    sector: "Technology",
    marketCap: "large",
    currentPrice: 400,
    purchasePrice: 250,  // +60% gain
  },
  {
    id: 3,
    name: "NVIDIA Corporation",
    symbol: "NVDA",
    type: "stock",
    sector: "Technology",
    marketCap: "large",
    currentPrice: 1200,
    purchasePrice: 700,  // +71% gain
  },
  {
    id: 4,
    name: "Intel Corporation",
    symbol: "INTC",
    type: "stock",
    sector: "Technology",
    marketCap: "large",
    currentPrice: 40,
    purchasePrice: 50,  // -20% loss
  },
  {
    id: 5,
    name: "Adobe Inc.",
    symbol: "ADBE",
    type: "stock",
    sector: "Technology",
    marketCap: "large",
    currentPrice: 450,
    purchasePrice: 550,  // -18% loss
  },

  // Cryptocurrencies - Volatile Performance
  {
    id: 6,
    name: "Bitcoin",
    symbol: "BTC",
    type: "crypto",
    currentPrice: 45000,
    purchasePrice: 30000,  // +50% gain
  },
  {
    id: 7,
    name: "Ethereum",
    symbol: "ETH",
    type: "crypto",
    currentPrice: 3500,
    purchasePrice: 1500,  // +133% gain
  },
  {
    id: 8,
    name: "Cardano",
    symbol: "ADA",
    type: "crypto",
    currentPrice: 0.5,
    purchasePrice: 1.0,  // -50% loss
  },
  {
    id: 9,
    name: "Litecoin",
    symbol: "LTC",
    type: "crypto",
    currentPrice: 80,
    purchasePrice: 100,  // -20% loss
  },
  {
    id: 10,
    name: "Polkadot",
    symbol: "DOT",
    type: "crypto",
    currentPrice: 15,
    purchasePrice: 10,  // +50% gain
  },

  // Financial Sector
  {
    id: 11,
    name: "JPMorgan Chase",
    symbol: "JPM",
    type: "stock",
    sector: "Financials",
    marketCap: "large",
    currentPrice: 160,
    purchasePrice: 140,  // +14% gain
  },
  {
    id: 12,
    name: "Goldman Sachs",
    symbol: "GS",
    type: "stock",
    sector: "Financials",
    marketCap: "large",
    currentPrice: 320,
    purchasePrice: 380,  // -16% loss
  },
  {
    id: 13,
    name: "Visa Inc.",
    symbol: "V",
    type: "stock",
    sector: "Financials",
    marketCap: "large",
    currentPrice: 280,
    purchasePrice: 200,  // +40% gain
  },

  // Healthcare Sector
  {
    id: 14,
    name: "Johnson & Johnson",
    symbol: "JNJ",
    type: "stock",
    sector: "Healthcare",
    marketCap: "large",
    currentPrice: 150,
    purchasePrice: 160,  // -6% loss
  },
  {
    id: 15,
    name: "Pfizer Inc.",
    symbol: "PFE",
    type: "stock",
    sector: "Healthcare",
    marketCap: "large",
    currentPrice: 35,
    purchasePrice: 45,  // -22% loss
  },

  // Bonds - Various Types
  {
    id: 16,
    name: "US Treasury 10Y",
    symbol: "UST10",
    type: "bond",
    currentPrice: 950,
    purchasePrice: 1000,  // -5% loss
  },
  {
    id: 17,
    name: "Corporate Bond AAA",
    symbol: "CBOND",
    type: "bond",
    currentPrice: 1050,
    purchasePrice: 1000,  // +5% gain
  },
  {
    id: 18,
    name: "High Yield Bond",
    symbol: "HYB",
    type: "bond",
    currentPrice: 850,
    purchasePrice: 1000,  // -15% loss
  },

  // Consumer Sector
  {
    id: 19,
    name: "Amazon.com Inc.",
    symbol: "AMZN",
    type: "stock",
    sector: "Consumer Discretionary",
    marketCap: "large",
    currentPrice: 4000,
    purchasePrice: 3400,  // +18% gain
  },
  {
    id: 20,
    name: "Tesla Inc.",
    symbol: "TSLA",
    type: "stock",
    sector: "Consumer Discretionary",
    marketCap: "large",
    currentPrice: 900,
    purchasePrice: 600,  // +50% gain
  },

  // Communication Services
  {
    id: 21,
    name: "Meta Platforms",
    symbol: "META",
    type: "stock",
    sector: "Communication Services",
    marketCap: "large",
    currentPrice: 400,
    purchasePrice: 300,  // +33% gain
  },
  {
    id: 22,
    name: "Netflix, Inc.",
    symbol: "NFLX",
    type: "stock",
    sector: "Communication Services",
    marketCap: "large",
    currentPrice: 300,
    purchasePrice: 450,  // -33% loss
  },

  // Energy Sector
  {
    id: 23,
    name: "ExxonMobil",
    symbol: "XOM",
    type: "stock",
    sector: "Energy",
    marketCap: "large",
    currentPrice: 90,
    purchasePrice: 65,  // +38% gain
  },
  {
    id: 24,
    name: "Chevron",
    symbol: "CVX",
    type: "stock",
    sector: "Energy",
    marketCap: "large",
    currentPrice: 140,
    purchasePrice: 110,  // +27% gain
  },

  // Additional Tech Stocks
  {
    id: 25,
    name: "Salesforce",
    symbol: "CRM",
    type: "stock",
    sector: "Technology",
    marketCap: "large",
    currentPrice: 280,
    purchasePrice: 230,  // +22% gain
  },
  {
    id: 26,
    name: "Oracle",
    symbol: "ORCL",
    type: "stock",
    sector: "Technology",
    marketCap: "large",
    currentPrice: 95,
    purchasePrice: 85,  // +12% gain
  },

  // Additional Cryptos
  {
    id: 27,
    name: "Solana",
    symbol: "SOL",
    type: "crypto",
    currentPrice: 120,
    purchasePrice: 40,  // +200% gain
  },
  {
    id: 28,
    name: "Avalanche",
    symbol: "AVAX",
    type: "crypto",
    currentPrice: 35,
    purchasePrice: 80,  // -56% loss
  },

  // Consumer Staples
  {
    id: 29,
    name: "Walmart",
    symbol: "WMT",
    type: "stock",
    sector: "Consumer Staples",
    marketCap: "large",
    currentPrice: 160,
    purchasePrice: 130,  // +23% gain
  },
  {
    id: 30,
    name: "Coca-Cola",
    symbol: "KO",
    type: "stock",
    sector: "Consumer Staples",
    marketCap: "large",
    currentPrice: 65,
    purchasePrice: 55,  // +18% gain
  },

  // Industrial Sector
  {
    id: 31,
    name: "Boeing",
    symbol: "BA",
    type: "stock",
    sector: "Industrials",
    marketCap: "large",
    currentPrice: 180,
    purchasePrice: 220,  // -18% loss
  },
  {
    id: 32,
    name: "Caterpillar",
    symbol: "CAT",
    type: "stock",
    sector: "Industrials",
    marketCap: "large",
    currentPrice: 240,
    purchasePrice: 180,  // +33% gain
  },

  // More Bonds
  {
    id: 33,
    name: "Municipal Bond",
    symbol: "MBOND",
    type: "bond",
    currentPrice: 980,
    purchasePrice: 1000,  // -2% loss
  },
  {
    id: 34,
    name: "Corporate Bond BB",
    symbol: "CBB",
    type: "bond",
    currentPrice: 920,
    purchasePrice: 1000,  // -8% loss
  },

  // Additional Financials
  {
    id: 35,
    name: "PayPal",
    symbol: "PYPL",
    type: "stock",
    sector: "Financials",
    marketCap: "large",
    currentPrice: 90,
    purchasePrice: 150,  // -40% loss
  },
  {
    id: 36,
    name: "Square",
    symbol: "SQ",
    type: "stock",
    sector: "Financials",
    marketCap: "large",
    currentPrice: 80,
    purchasePrice: 120,  // -33% loss
  },

  // Real Estate
  {
    id: 37,
    name: "American Tower",
    symbol: "AMT",
    type: "stock",
    sector: "Real Estate",
    marketCap: "large",
    currentPrice: 220,
    purchasePrice: 180,  // +22% gain
  },
  {
    id: 38,
    name: "Prologis",
    symbol: "PLD",
    type: "stock",
    sector: "Real Estate",
    marketCap: "large",
    currentPrice: 130,
    purchasePrice: 110,  // +18% gain
  },

  // Materials
  {
    id: 39,
    name: "Freeport-McMoRan",
    symbol: "FCX",
    type: "stock",
    sector: "Materials",
    marketCap: "large",
    currentPrice: 45,
    purchasePrice: 35,  // +29% gain
  },
  {
    id: 40,
    name: "Newmont Mining",
    symbol: "NEM",
    type: "stock",
    sector: "Materials",
    marketCap: "large",
    currentPrice: 55,
    purchasePrice: 65,  // -15% loss
  },

  // More Cryptos
  {
    id: 41,
    name: "Chainlink",
    symbol: "LINK",
    type: "crypto",
    currentPrice: 18,
    purchasePrice: 12,  // +50% gain
  },
  {
    id: 42,
    name: "Uniswap",
    symbol: "UNI",
    type: "crypto",
    currentPrice: 7,
    purchasePrice: 15,  // -53% loss
  },

  // Additional Tech
  {
    id: 43,
    name: "AMD",
    symbol: "AMD",
    type: "stock",
    sector: "Technology",
    marketCap: "large",
    currentPrice: 140,
    purchasePrice: 80,  // +75% gain
  },
  {
    id: 44,
    name: "Palantir",
    symbol: "PLTR",
    type: "stock",
    sector: "Technology",
    marketCap: "large",
    currentPrice: 25,
    purchasePrice: 22,  // +14% gain
  },

  // Additional Healthcare
  {
    id: 45,
    name: "Moderna",
    symbol: "MRNA",
    type: "stock",
    sector: "Healthcare",
    marketCap: "large",
    currentPrice: 150,
    purchasePrice: 200,  // -25% loss
  },
  {
    id: 46,
    name: "Merck",
    symbol: "MRK",
    type: "stock",
    sector: "Healthcare",
    marketCap: "large",
    currentPrice: 95,
    purchasePrice: 75,  // +27% gain
  },

  // More Consumer Discretionary
  {
    id: 47,
    name: "Nike",
    symbol: "NKE",
    type: "stock",
    sector: "Consumer Discretionary",
    marketCap: "large",
    currentPrice: 120,
    purchasePrice: 140,  // -14% loss
  },
  {
    id: 48,
    name: "Starbucks",
    symbol: "SBUX",
    type: "stock",
    sector: "Consumer Discretionary",
    marketCap: "large",
    currentPrice: 95,
    purchasePrice: 110,  // -14% loss
  },

  // Additional Communication Services
  {
    id: 49,
    name: "Disney",
    symbol: "DIS",
    type: "stock",
    sector: "Communication Services",
    marketCap: "large",
    currentPrice: 95,
    purchasePrice: 150,  // -37% loss
  },
  {
    id: 50,
    name: "Electronic Arts",
    symbol: "EA",
    type: "stock",
    sector: "Communication Services",
    marketCap: "large",
    currentPrice: 140,
    purchasePrice: 120,  // +17% gain
  }
];
