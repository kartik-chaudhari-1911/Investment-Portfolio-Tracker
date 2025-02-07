import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, CreditCard } from 'lucide-react';

function AssetCard({ asset }) {
    const performance = ((asset.currentPrice - asset.purchasePrice) / asset.purchasePrice * 100);
    const isPositive = performance > 0;

    // Color intensity based on performance magnitude
    const getPerformanceColor = () => {
        const absPerformance = Math.abs(performance);
        if (absPerformance < 5) return 'text-yellow-500';
        if (absPerformance < 10) return 'text-orange-500';
        return isPositive ? 'text-green-600' : 'text-red-600';
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 15px rgba(0,0,0,0.1)"
            }}
            className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                    <h3 className="font-bold text-xl text-gray-800">{asset.name}</h3>
                </div>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {asset.symbol}
                </span>
            </div>

            <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600">Current Price:</div>
                    <div className="font-semibold text-right">${asset.currentPrice.toLocaleString()}</div>
                    
                    <div className="text-gray-600">Purchase Price:</div>
                    <div className="font-semibold text-right">${asset.purchasePrice.toLocaleString()}</div>
                </div>

                <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                    <div className="text-gray-600">Performance:</div>
                    <div className={`flex items-center space-x-2 ${getPerformanceColor()} font-bold`}>
                        {isPositive ? (
                            <TrendingUp className="w-5 h-5" />
                        ) : (
                            <TrendingDown className="w-5 h-5" />
                        )}
                        <span>{performance.toFixed(2)}%</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default AssetCard;