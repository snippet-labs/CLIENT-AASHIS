import React from 'react';
import { NavLink } from 'react-router-dom';

//ICONS
import { IoMdHome } from 'react-icons/io';
import { IoDiamond } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
//HOOKS
import useWindowSize from '../../Hooks/useWindowSize';
//UTILS
import Button from '../../Utils/Button/Button';

const Navigationbar: React.FC = () => {
  // PATH
  const NAVIGATION = {
    HOME: { icon: <IoMdHome size={20} />, path: '/' },
    ACCESSORIES: { icon: <IoDiamond size={20} />, path: '/accessories' },
    PROFILE: { icon: <FaUserAlt size={20} />, path: '/profile' },
  };

  //HOOKS
  const windowSize: number = useWindowSize();

  return (
    <div className="h-[6vh]">
      <div className="PADDING HEIGHT bg-gray-300 ROUNDED">
        <div className="FLEX-EVENLY GAP">
          {Object.entries(NAVIGATION).map(([title, { icon, path }]) => (
            <NavLink
              key={title}
              to={path}
              className={({ isActive }) =>
                `flex-1 text-center transition-all ${
                  isActive
                    ? 'HOVER-LINK bg-black text-white'
                    : 'HOVER-LINK hover:bg-gray-400'
                }`
              }
            >
              <Button
                title={title}
                icon={icon}
                windowSize={windowSize}
                className="TEXT"
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
