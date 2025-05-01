import { useState, useEffect } from 'react';

const useWindowSize = (): number => {
  // STATES
  const [windowSize, setWindowSize] = useState<number>(() => window.innerWidth);

  // SIDE-EFFECT
  useEffect(() => {
    // STATE HANDLER FUNCTION
    const handleWindowSize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowSize);

    return () => window.removeEventListener('resize', handleWindowSize);
  }, []);

  return windowSize;
};

export default useWindowSize;
