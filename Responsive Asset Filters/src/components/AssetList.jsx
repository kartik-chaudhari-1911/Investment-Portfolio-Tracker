import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AssetCard from './AssetCard';

function AssetList({ assets, filters, searchTerm, groupBy }) {
    const filteredAndSortedAssets = useMemo(() => {
        return assets
            .filter(asset => {
                const matchesType = filters.type === 'all' || asset.type === filters.type;
                const matchesPerformance = filters.performance === 'all' ||
                    (filters.performance === 'gain' && asset.currentPrice > asset.purchasePrice) ||
                    (filters.performance === 'loss' && asset.currentPrice < asset.purchasePrice);
                const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    asset.symbol.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesType && matchesPerformance && matchesSearch;
            })
            .sort((a, b) => {
                const getValue = (item) => {
                    switch (filters.sortBy) {
                        case 'performance':
                            return ((item.currentPrice - item.purchasePrice) / item.purchasePrice) * 100;
                        case 'price':
                            return item.currentPrice;
                        default:
                            return item.name;
                    }
                };

                const aValue = getValue(a);
                const bValue = getValue(b);

                return filters.sortOrder === 'asc'
                    ? (typeof aValue === 'string' ? aValue.localeCompare(bValue) : aValue - bValue)
                    : (typeof bValue === 'string' ? bValue.localeCompare(aValue) : bValue - aValue);
            });
    }, [assets, filters, searchTerm]);

    const groupedAssets = useMemo(() => {
        if (groupBy === 'none') return { 'All Assets': filteredAndSortedAssets };

        return filteredAndSortedAssets.reduce((groups, asset) => {
            const key = asset[groupBy] || 'Other';
            if (!groups[key]) groups[key] = [];
            groups[key].push(asset);
            return groups;
        }, {});
    }, [filteredAndSortedAssets, groupBy]);

    return (
        <AnimatePresence>
            {Object.entries(groupedAssets).map(([group, groupAssets]) => (
                <motion.div
                    key={group}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-8"
                >
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                        <h2 className="text-xl font-semibold mb-2">{group}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {groupAssets.map((asset) => (
                                <AssetCard key={asset.id} asset={asset} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>
    );
}

export default AssetList;
