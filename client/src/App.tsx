import { ReactElement } from "react";

// ICONS
import { IoIosSettings } from "react-icons/io";

const App = (): ReactElement => {
  return (
    <div className="w-full h-screen text-white bg-slate-900 text-xl md:text-6xl lg:text-8xl flex flex-col items-center justify-center">
      <IoIosSettings size={60} />
      UNDERDEVELOPMENT
    </div>
  );
};
export default App;
