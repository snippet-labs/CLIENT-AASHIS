import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { IoDiamond } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import useWindowSize from '../../Hooks/useWindowSize';
import Button from '../../Utils/Button/Button';

const Navbar: React.FC = () => {
  const options = {
    HOME: { icon: <IoMdHome size={20} />, path: '/' },
    ACCESSORIES: { icon: <IoDiamond size={20} />, path: '/accessories' },
    PROFILE: { icon: <FaUserAlt size={20} />, path: '/profile' },
  };

  const windowSize: number = useWindowSize();

  return (
    <div className="CONTAINER fixed bottom-0 w-full">
      <div className="FLEX-BETWEEN  w-[100%]  PADDING  bg-gray-300 ROUNDED">
        <div className="FLEX-EVENLY w-full gap-2">
          {Object.entries(options).map(([title, { icon, path }]) => (
            <NavLink
              key={title}
              to={path}
              className={({ isActive }) =>
                `flex-1 text-center transition-all ${
                  isActive
                    ? 'HOVER-LINK bg-black text-white'
                    : 'HOVER-LINK hover:bg-gray-500'
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

export default Navbar;
