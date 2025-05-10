import React, { useState, useEffect } from 'react';
// ICONS
import { IoSearchSharp } from 'react-icons/io5';
import { MdKeyboardCommandKey } from 'react-icons/md';

const Searchbar: React.FC = () => {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase();
    setIsMac(platform.includes('mac'));
  }, []);

  return (
    <div className="FLEX-CENTER HOVER-LINK TEXT hover:bg-black hover:text-white">
      <IoSearchSharp size={20} />
      <div className="flex items-center space-x-1">
        {isMac ? (
          <MdKeyboardCommandKey size={20} />
        ) : (
          <kbd className="px-1 bg-gray-200 rounded text-sm">Ctrl</kbd>
        )}
        <span className="font-medium">K</span>
      </div>
    </div>
  );
};

export default Searchbar;
