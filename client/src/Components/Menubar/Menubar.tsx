import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router';

// MOTION
import { AnimatePresence, motion } from 'motion/react';
// UTILS
import Button from '../../Utils/Button/Button';
import Search from '../../Utils/Search/Search';
import SearchModal from '../../Utils/Search/SearchModal';
// CONSTANTS
import { SALES } from '../../Constants/Saleoffer';
// ICONS
import { IoCall } from 'react-icons/io5';
import { FaTruckFast } from 'react-icons/fa6';
import { FaOpencart } from 'react-icons/fa6';
import { IoHeart } from 'react-icons/io5';
import { FaCartShopping } from 'react-icons/fa6';
import { IoMoon } from 'react-icons/io5';

// HOOKS
import useWindowSize from '../../Hooks/useWindowSize';
import useSearchModal from '../../Hooks/useSearchModal';

// MUI COMPONENTS
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

// FUNCTIONAL COMPONENT
const Menubar: React.FC = () => {
  // HOOK
  const windowSize: number = useWindowSize();
  // STATES
  const { isOpen, handleCloseSearchModal, handleOpenSearchModal } =
    useSearchModal();
  const [currentSale, setCurrentSale] = useState<string>(SALES[0]);
  const [isMac, setIsMac] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  // EFFECTS
  useEffect(() => {
    const showRandomSale = (): void => {
      const randomIndex: number = Math.floor(Math.random() * SALES.length);
      setCurrentSale(SALES[randomIndex]);
      const randomDelay: number = Math.floor(Math.random() * 5000) + 5000;
      timeoutRef.current = window.setTimeout(showRandomSale, randomDelay);
    };

    timeoutRef.current = window.setTimeout(showRandomSale, 5000);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase();
    setIsMac(platform.includes('mac'));
  }, []);

  // RENDER
  return (
    <div className="h-[11vh]">
      <div className="FLEX-CENTER GAP">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSale}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="FLEX-CENTER text-xs font-semibold md:text-md lg:text-lg w-[79%] HEIGHT bg-green-400 ROUNDED transition-all"
          >
            {currentSale}
          </motion.div>
        </AnimatePresence>

        <div className="FLEX-CENTER w-[10%] HEIGHT bg-gray-300 ROUNDED">
          <Button
            title="HELP CENTER"
            windowSize={windowSize}
            icon={<IoCall size={20} />}
            className="TEXT"
          />
        </div>

        <div className="FLEX-CENTER w-[10%] HEIGHT bg-gray-300 ROUNDED">
          <Button
            title="TRACK ORDER"
            windowSize={windowSize}
            icon={<FaTruckFast size={20} />}
            className="TEXT"
          />
        </div>
      </div>

      <div className="FLEX-BETWEEN  w-[100%] HEIGHT PADDING MARGIN-TOP bg-gray-300 ROUNDED">
        <div className="FLEX-CENTER GAP">
          <FaOpencart size={40} className="text-blue-600" />
        </div>

        <div className="FLEX-CENTER md:GAP lg:GAP">
          <Link to={'/login'} className="TEXT HOVER-LINK hover:bg-blue-400">
            Login
          </Link>
          <Link
            to={'/register'}
            className="TEXT HOVER-LINK hover:bg-orange-400"
          >
            Register
          </Link>
          <div className="FLEX-CENTER GAP MARGIN-TOP PADDING">
            <div className="HOVER-BUTTON">
              <Tooltip title="cart">
                <Badge badgeContent={0} showZero>
                  <FaCartShopping size={20} />
                </Badge>
              </Tooltip>
            </div>
            <div className="HOVER-BUTTON mr-3">
              <Tooltip title="wishlist">
                <Badge badgeContent={0} showZero>
                  <IoHeart size={20} />
                </Badge>
              </Tooltip>
            </div>
            <button onClick={handleOpenSearchModal}>
              <Search isMac={isMac} windowSize={windowSize} />
            </button>
            <div className="HOVER-BUTTON">
              <IoMoon size={20} />
            </div>
          </div>
        </div>
      </div>
      <SearchModal
        isOpen={isOpen}
        onClose={handleCloseSearchModal}
        isMac={isMac}
        windowSize={windowSize}
      />
    </div>
  );
};

export default Menubar;
