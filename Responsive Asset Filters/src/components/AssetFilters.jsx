import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';

function AssetFilters({ filters, setFilters, searchTerm, setSearchTerm, groupBy, setGroupBy }) {
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

    return (
        <div className="mb-8">
            {/* Search Bar */}
            <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search assets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            {/* Mobile Filter Toggle */}
            <button
                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                className="md:hidden w-full flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm mb-4"
            >
                <span className="flex items-center gap-2">
                    <Filter size={20} />
                    Filter Options
                </span>
                <span>{isFilterMenuOpen ? '▼' : '►'}</span>
            </button>

            {/* Filter Controls */}
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${isFilterMenuOpen ? 'block' : 'hidden md:grid'}`}>
                <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="p-2 border rounded-lg shadow-sm"
                >
                    <option value="all">All Types</option>
                    <option value="stock">Stocks</option>
                    <option value="crypto">Crypto</option>
                    <option value="bond">Bonds</option>
                </select>

                <select
                    value={filters.performance}
                    onChange={(e) => setFilters({ ...filters, performance: e.target.value })}
                    className="p-2 border rounded-lg shadow-sm"
                >
                    <option value="all">All Performance</option>
                    <option value="gain">Gains Only</option>
                    <option value="loss">Losses Only</option>
                </select>

                <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                    className="p-2 border rounded-lg shadow-sm"
                >
                    <option value="name">Sort by Name</option>
                    <option value="performance">Sort by Performance</option>
                    <option value="price">Sort by Current Price</option>
                </select>

                <select
                    value={groupBy}
                    onChange={(e) => setGroupBy(e.target.value)}
                    className="p-2 border rounded-lg shadow-sm"
                >
                    <option value="none">No Grouping</option>
                    <option value="type">Group by Type</option>
                    <option value="sector">Group by Sector</option>
                    <option value="marketCap">Group by Market Cap</option>
                </select>
            </div>
        </div>
    );
}

export default AssetFilters;
