import React from 'react';
import { motion } from 'framer-motion';

function AssetCard({ asset }) {
    const performance = ((asset.currentPrice - asset.purchasePrice) / asset.purchasePrice * 100);
    const isPositive = performance > 0;

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg">{asset.name}</h3>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">{asset.symbol}</span>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="text-gray-600">Current Price:</span>
                    <span className="font-medium">${asset.currentPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Purchase Price:</span>
                    <span className="font-medium">${asset.purchasePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Performance:</span>
                    <span className={`flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'} font-semibold`}>
                        <div className="w-2 h-2 rounded-full bg-current" />
                        {performance.toFixed(2)}%
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

export default AssetCard;
