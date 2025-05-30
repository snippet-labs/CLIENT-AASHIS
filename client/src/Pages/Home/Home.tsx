import React, { useState } from 'react';

// ICONS
import { VscSettings } from 'react-icons/vsc';
// COMPONENTS
import Button from '../../Utils/Button/Button';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Carousel from '../../Utils/Carousal/Carousel';
// HOOKS
import useWindowSize from '../../Hooks/useWindowSize';
// CONSTANTS
import { SHOPPING_CATEGORIES } from '../../Constants/Categories';
import { EmblaOptionsType } from 'embla-carousel';


// FUNCTIONAL COMPONENT
const Home: React.FC = () => {
  // HOOK
  const windowSize: number = useWindowSize();
  // STATES
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  //CONSTANTS
  const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  // RENDER
  return (
    <>
      <div className="mt-5 RELATIVE">
        <span>
          <Button
            title="SHOW CATEGORIES"
            windowSize={windowSize}
            className="TEXT PADDING ROUNDED PRIMARY-GRAY CLICK TRANSITION POINTER"
            icon={<VscSettings size={20} />}
            onClick={() => setSidebarOpen(true)}
            dataTestId="show-categories-button"
          />
        </span>

        <Sidebar
          dataTestId="sidebar"
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        >
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
      <Carousel slides={SLIDES} options={OPTIONS} />
    </>
  );
};

export default Home;
