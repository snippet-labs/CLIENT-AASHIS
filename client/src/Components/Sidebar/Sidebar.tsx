import React from 'react';

// ICONS
import { VscClose } from 'react-icons/vsc';
// TYPES
import { SidebarPropTypes } from './Sidebar.types';

// FUNCTIONAL COMPONENT
const Sidebar: React.FC<SidebarPropTypes> = ({
  isOpen,
  onClose,
  children,
  dataTestId,
}) => {
  // RENDER
  return (
    <div data-testid={dataTestId}>
      <div
        className={`FIXED inset-0 Z50 bg-opacity-30 BLUR-MD transition-opacity duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`BORDER-RIGHT-CORNER FIXED BORDER top-0 left-0 Z50 HEIGHT-FULL w-[70%] md:w-[25%] lg:w-[25%] WHITE bg-opacity-100 SHADOW transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="FLEX-BETWEEN p-4 border-b-2 border-gray-200">
          <h2 className="text-lg font-bold">CATEGORIES</h2>
          <button
            onClick={onClose}
            className="PADDING BORDER rounded-xl focus:outline-none hover:bg-black hover:text-white POINTER"
          >
            <VscClose size={20} />
          </button>
        </div>
        <div className="p-4 FLOW-Y-AUTO">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
