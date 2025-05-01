import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router';

// MOTION
import { AnimatePresence, motion } from 'motion/react';
// UTILS
import Button from '../../Utils/Button/Button';
import Searchbar from '../../Utils/Searchbar/Searchbar';
// CONSTANTS
import { sales } from '../../Constants/Saleoffer';
// ICONS
import { IoCall } from 'react-icons/io5';
import { FaTruckFast } from 'react-icons/fa6';
import { FaOpencart } from 'react-icons/fa6';
import { IoHeart } from 'react-icons/io5';
import { FaCartShopping } from 'react-icons/fa6';
import { IoMoon } from 'react-icons/io5';

// HOOKS
import useWindowSize from '../../Hooks/useWindowSize';

// MUI COMPONENTS
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

// FUNCTIONAL COMPONENT
const Menubar: React.FC = () => {
  // HOOKS
  const windowSize: number = useWindowSize();
  const [currentSale, setCurrentSale] = useState<string>(sales[0]);
  const timeoutRef = useRef<number | null>(null);

  // EFFECTS
  useEffect(() => {
    const showRandomSale = (): void => {
      const randomIndex: number = Math.floor(Math.random() * sales.length);
      setCurrentSale(sales[randomIndex]);
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

  return (
    <div className="CONTAINER">
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
          <Link to={'/login'} className="TEXT HOVER-LINK hover:bg-green-400">
            Login
          </Link>
          <Link
            to={'/register'}
            className="TEXT HOVER-LINK hover:bg-orange-400"
          >
            Register
          </Link>
          <div className="FLEX-CENTER GAP MARGIN-TOP PADDING">
            <Searchbar />
            <div className="HOVER-BUTTON">
              <Tooltip title="cart">
                <Badge badgeContent={0} showZero>
                  <FaCartShopping size={20} />
                </Badge>
              </Tooltip>
            </div>
            <div className="HOVER-BUTTON">
              <Tooltip title="wishlist">
                <Badge badgeContent={0} showZero>
                  <IoHeart size={20} />
                </Badge>
              </Tooltip>
            </div>
            <div className="HOVER-BUTTON ml-3">
              <IoMoon size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
