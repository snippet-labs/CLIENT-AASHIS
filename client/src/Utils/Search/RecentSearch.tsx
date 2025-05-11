import React from 'react';

// TYPES
import { RecentSearchesProps } from './Search.types';

// ICONS
import { FaClockRotateLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

// FUNCTIONAL UTILITY COMPONENT
const RecentSearches: React.FC<RecentSearchesProps> = ({
  searches,
  onSelectSearch,
  onClearSearches,
}) => {
  if (searches.length === 0) {
    return (
      <div className="py-4 px-4 text-center text-gray-500 text-sm">
        There are no recent searches
      </div>
    );
  }

  // RENDER
  return (
    <div className="py-2 px-4">
      <div className="FLEX-BETWEEN py-2">
        <div className="CENTER gap-2 text-gray-500 text-xs font-medium">
          <FaClockRotateLeft size={20} />
          <span>Recent Searches</span>
        </div>
        <button
          className="text-xs text-gray-500 POINTER hover:text-red-500 px-2 py-1 rounded hover:bg-gray-50 transition-colors"
          onClick={onClearSearches}
          aria-label="Clear recent searches"
        >
          Clear
        </button>
      </div>

      <ul className="space-y-1">
        {searches.map((search, index) => (
          <li key={index}>
            <button
              className="w-full FLEX-BETWEEN px-3 py-2.5 rounded-lg hover:bg-gray-50 text-gray-900 transition-colors group"
              onClick={() => onSelectSearch(search)}
            >
              <span className="text-sm">{search}</span>
              <FaArrowRight
                size={14}
                className="text-blue-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
