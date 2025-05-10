import React from 'react';
// ICONS
import { IoSearchSharp } from 'react-icons/io5';
import { MdKeyboardCommandKey } from 'react-icons/md';

// TYPES
import { SearchProps } from './Search.types';

const Searchbar: React.FC<SearchProps> = ({ isMac }) => {
  return (
    <div className="FLEX-CENTER HOVER-LINK TEXT hover:bg-black hover:text-white">
      <IoSearchSharp size={20} />
      <div className="flex items-center space-x-1">
        {isMac ? (
          <MdKeyboardCommandKey size={20} />
        ) : (
          <span className="text-sm">CTRL</span>
        )}
        <span className="font-normal">K</span>
      </div>
    </div>
  );
};

export default Searchbar;
