import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, ArrowUpDown, TrendingUp, TrendingDown } from 'lucide-react';
import { Asset } from '../../types/portfolio';

interface AssetListProps {
  assets: Asset[];
  onAssetSelect: (asset: Asset) => void;
}

type SortOption = 'name' | 'performance' | 'value' | 'purchase-date';
type GroupOption = 'none' | 'type' | 'performance';

export const AssetList: React.FC<AssetListProps> = ({ assets, onAssetSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [groupBy, setGroupBy] = useState<GroupOption>('none');
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const calculatePerformance = (asset: Asset) => {
    return ((asset.currentPrice - asset.purchasePrice) / asset.purchasePrice) * 100;
  };

  const processedAssets = useMemo(() => {
    let filtered = assets.filter(asset => {
      const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(asset.type);
      return matchesSearch && matchesType;
    });

    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'performance':
          comparison = calculatePerformance(b) - calculatePerformance(a);
          break;
        case 'value':
          comparison = (b.currentPrice * b.quantity) - (a.currentPrice * a.quantity);
          break;
        case 'purchase-date':
          comparison = new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
          break;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    if (groupBy !== 'none') {
      const grouped: { [key: string]: Asset[] } = {};
      filtered.forEach(asset => {
        let groupKey = '';
        switch (groupBy) {
          case 'type':
            groupKey = asset.type;
            break;
          case 'performance':
            const perf = calculatePerformance(asset);
            groupKey = perf >= 10 ? 'High Performers (>10%)'
              : perf >= 0 ? 'Moderate Performers (0-10%)'
                : 'Underperformers (<0%)';
            break;
        }
        if (!grouped[groupKey]) grouped[groupKey] = [];
        grouped[groupKey].push(asset);
      });
      return grouped;
    }

    return { 'all': filtered };
  }, [assets, searchTerm, selectedTypes, sortBy, sortDirection, groupBy]);

  const toggleGroup = (groupName: string) => {
    setExpandedGroups(prev =>
      prev.includes(groupName)
        ? prev.filter(g => g !== groupName)
        : [...prev, groupName]
    );
  };

  const AssetCard = ({ asset }: { asset: Asset }) => {
    const performance = calculatePerformance(asset);
    return (
      <div
        className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
        onClick={() => onAssetSelect(asset)}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-gray-900">{asset.name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{asset.symbol}</span>
              <span className="text-sm text-gray-500">{asset.type}</span>
            </div>
          </div>
          <div className={`flex items-center px-3 py-1 rounded-full ${performance >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
            }`}>
            {performance >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
            <span className="text-sm font-medium">{performance.toFixed(2)}%</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Current Value</p>
            <p className="font-semibold">${(asset.currentPrice * asset.quantity).toLocaleString()}</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Price</p>
            <p className="font-semibold">${asset.currentPrice.toLocaleString()}</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Quantity</p>
            <p className="font-semibold">{asset.quantity}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <select
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="name">Name</option>
              <option value="performance">Performance</option>
              <option value="value">Value</option>
              <option value="purchase-date">Purchase Date</option>
            </select>
            <button
              onClick={() => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')}
              className="p-2 border rounded-lg hover:bg-gray-50"
            >
              <ArrowUpDown className={`h-5 w-5 ${sortDirection === 'asc' ? 'text-blue-500' : 'text-gray-400'}`} />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value as GroupOption)}
            >
              <option value="none">No Grouping</option>
              <option value="type">Group by Type</option>
              <option value="performance">Group by Performance</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['stocks', 'crypto', 'bonds', 'commodities'].map(type => (
            <button
              key={type}
              onClick={() => setSelectedTypes(prev =>
                prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
              )}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTypes.includes(type)
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {Object.entries(processedAssets).map(([group, groupAssets]) => (
          <div key={group} className="space-y-2">
            {groupBy !== 'none' && (
              <button
                onClick={() => toggleGroup(group)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <span className="font-medium text-gray-700">{group}</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${expandedGroups.includes(group) ? 'rotate-180' : ''
                    }`}
                />
              </button>
            )}
            {(groupBy === 'none' || expandedGroups.includes(group)) && (
              <div className="grid gap-4">
                {groupAssets.map(asset => (
                  <AssetCard key={asset.id} asset={asset} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetList;