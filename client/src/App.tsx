import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';

// COMPONENTS
import Layout from './Layout/Layout';
import Loader from './Utils/Loader/Loader';

// STORE
// ICONS

const Content = () => {
  // STATES
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(() => false);

  // SIDE-EFFECT
  useEffect(() => {
    setIsLoading(true);
    const elapsedTime = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(elapsedTime);
  }, [location.pathname]);

  return isLoading ? <Loader /> : <Layout />;
};

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Content />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
