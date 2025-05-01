// ICONS
import { IoSearchSharp } from 'react-icons/io5';
import { MdKeyboardCommandKey } from 'react-icons/md';

const Searchbar = () => {
  return (
    <div className="FLEX-CENTER HOVER-LINK TEXT hover:bg-black">
      <IoSearchSharp size={20} />
      <div className="FLEX-CENTER">
        <MdKeyboardCommandKey /> + K
      </div>
    </div>
  );
};

export default Searchbar;
