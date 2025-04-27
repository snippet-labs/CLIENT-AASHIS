import React, { useEffect, useState, useRef } from 'react';

// MOTION
import { AnimatePresence, motion } from 'motion/react';
// UTILS
import Button from '../../Utils/Button';
// CONSTANTS
import { sales } from '../../Constants/Saleoffer';
// ICONS
import { IoCall } from 'react-icons/io5';
import { FaTruckFast } from 'react-icons/fa6';
// HOOKS
import useWindowSize from '../../Hooks/useWindowSize';


// FUNCTIONAL COMPONENT
const Navbar: React.FC = () => {
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
      <div className="FLEX-CENTER gap-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSale}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="FLEX-CENTER text-xs font-semibold md:text-md lg:text-lg w-[80%] h-[40px] bg-green-400 rounded-md transition-all"
          >
            {currentSale}
          </motion.div>
        </AnimatePresence>

        <div className="FLEX-CENTER w-[10%] h-[40px] bg-gray-300 rounded-md">
          <Button
            title="HELP CENTER"
            windowSize={windowSize}
            icon={<IoCall size={20} />}
            className=""
          />
        </div>

        <div className="FLEX-CENTER w-[10%] h-[40px] bg-gray-300 rounded-md">
          <Button
            title="TRACK ORDER"
            windowSize={windowSize}
            icon={<FaTruckFast size={20} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
