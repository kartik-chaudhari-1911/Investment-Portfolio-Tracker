import React, { useState } from 'react';
import AssetFilters from './AssetFilters';
import AssetList from './AssetList';
import { mockAssets } from '../data/mockData.js';

function AssetDashboard() {
    const [assets] = useState(mockAssets);
    const [filters, setFilters] = useState({
        type: 'all',
        performance: 'all',
        sortBy: 'name',
        sortOrder: 'asc',
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [groupBy, setGroupBy] = useState('none');

    return (
        <div className="container mx-auto px-4 py-8 shadow-lg rounded-lg bg-white">
            <h1 className="text-3xl font-bold text-gray-800 mb-8"> Asset Filters DashBoard</h1>
            <AssetFilters
                filters={filters}
                setFilters={setFilters}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                groupBy={groupBy}
                setGroupBy={setGroupBy}
            />
            <AssetList
                assets={assets}
                filters={filters}
                searchTerm={searchTerm}
                groupBy={groupBy}
            />
        </div>
    );
}

export default AssetDashboard;

