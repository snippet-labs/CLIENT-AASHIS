import React from 'react';
// ICONS
import { IoSearchSharp } from 'react-icons/io5';
import { MdKeyboardCommandKey } from 'react-icons/md';

// TYPES
import { SearchProps } from './Search.types';

const Searchbar: React.FC<SearchProps> = ({ isMac, windowSize }) => {
  const isMobile = windowSize <= 1300;
  return (
    <div className="FLEX-CENTER HOVER-LINK TEXT hover:bg-black hover:text-white">
      <IoSearchSharp size={20} />
      {!isMobile && (
        <div className="flex items-center space-x-1">
          {isMac ? (
            <MdKeyboardCommandKey size={20} />
          ) : (
            <span className="text-sm">CTRL</span>
          )}
          <span className="font-normal">K</span>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
