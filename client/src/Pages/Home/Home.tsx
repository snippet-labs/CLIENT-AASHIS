import React, { useState } from 'react';

// ICONS
import { VscSettings } from 'react-icons/vsc';
// COMPONENTS
import Button from '../../Utils/Button/Button';
import Sidebar from '../../Components/Sidebar/Sidebar';
// HOOKS
import useWindowSize from '../../Hooks/useWindowSize';
// CONSTANTS
import { SHOPPING_CATEGORIES } from '../../Constants/Categories';

// FUNCTIONAL COMPONENT
const Home: React.FC = () => {
  // HOOK
  const windowSize: number = useWindowSize();
  // STATES
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // RENDER
  return (
    <div className="mt-3 RELATIVE">
      <span>
        <Button
          title="SHOW CATEGORIES"
          windowSize={windowSize}
          className="TEXT PADDING ROUNDED PRIMARY-GRAY CLICK TRANSITION POINTER"
          icon={<VscSettings size={20} />}
          onClick={() => setSidebarOpen(true)}
        />
      </span>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)}>
        <ul>
          {SHOPPING_CATEGORIES.map((item, index) => (
            <li
              key={index}
              className="PADDING ROUNDED POINTER HOVER-PRIMARY-GRAY"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </Sidebar>
    </div>
  );
};

export default Home;
