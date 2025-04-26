// UTILS
import Button from '../../Utils/Button';

// ICONS
import { IoCall } from 'react-icons/io5';
import { FaTruckFast } from 'react-icons/fa6';

// HOOKS
import useWindowSize from '../../Hooks/useWindowSize';

const Navbar: React.FC = () => {
  const windowSize: number = useWindowSize();
  return (
    <div className="CONTAINER">
      <div className="FLEX-CENTER  gap-2">
        <div className="FLEX-CENTER text-xs font-semibold md:text-md lg:text-lg w-[80%] h-[40px] bg-green-400 rounded-md transition-all">
          CLEARANCE SALE IS LIVE NOW !
        </div>
        <div className="FLEX-CENTER w-[10%] h-[40px] bg-gray-300 rounded-md">
          <Button
            title={'HELP CENTER'}
            windowSize={windowSize}
            icon={<IoCall size={20} />}
            className=""
          />
        </div>
        <div className="FLEX-CENTER w-[10%] h-[40px] bg-gray-300 rounded-md">
          <Button
            title={'TRACK ORDER'}
            windowSize={windowSize}
            icon={<FaTruckFast size={20} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
