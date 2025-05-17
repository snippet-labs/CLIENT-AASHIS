import React from 'react';
import { Link } from 'react-router-dom';

//LOTTIE-ANIMATIONS
import Lottie from 'lottie-react';
import animation from '../../../public/Lottie/404.json';

//UTILS
import Button from '../../Utils/Button/Button';

//ICONS
import { FaArrowLeft } from 'react-icons/fa';

//FUNCTIONAL COMPONENT
const Error: React.FC = () => {

  // RENDER
  return (
    <div className="FLEX-CENTER COLUMN h-full overflow-hidden">
      <Lottie
        animationData={animation}
        loop={true}
        className="LOTTIE-SIZE mt-[50%] md:mt-[5%] lg:mt-[5%]"
      />
      <div className="FLEX-CENTER GAP cursor-pointer">
        <FaArrowLeft size={20} />
        <Link to="/">
          <Button
            title="Go To Home Page"
            className="TEXT bg-gray-300 HOVER-LINK hover:bg-amber-200"
          />
        </Link>
      </div>
    </div>
  );
};

export default Error;
