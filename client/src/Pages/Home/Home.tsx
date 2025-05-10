import React from 'react';
// ICONS
import { VscSettings } from 'react-icons/vsc';

// COMPONENTS
import Button from '../../Utils/Button/Button';
// HOOKS
import useWindowSize from '../../Hooks/useWindowSize';

const Home: React.FC = () => {
  // HOOKS
  const windowSize: number = useWindowSize();
  return (
    <div>
      <span>
        <Button
          title={'SHOW CATEGORIES'}
          windowSize={windowSize}
          className="TEXT PADDING ROUNDED PRIMARY-GRAY"
          icon={<VscSettings size={20} />}
        />
      </span>
    </div>
  );
};

export default Home;
