import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import Errorpage from '../Pages/Error/Error';

// UTILS
const Loader = lazy(() => import('../Utils/Loader/Loader'));
// COMPONENTS
const Menubar = lazy(() => import('../Components/Menubar/Menubar'));
const Navigationbar = lazy(
  () => import('../Components/Navigationbar/Navigationbar'),
);
// PAGES
const Homepage = lazy(() => import('../Pages/Home/Home'));

// FUNCTIONAL COMPONENT
const Layout: React.FC = () => {
  // RENDER
  return (
    <div className="CONTAINER SCREEN COLUMN RELATIVE">
      <Suspense fallback={<Loader />}>
        <div className="FIXED T2 L2 R2 Z10">
          <Menubar />
        </div>
        <div className="FLEX-GROW PADDING-TOP PADDING-BOTTOM FLOW-Y-AUTO CONTENT-TOP-MARGIN CONTENT-BOTTOM-MARGIN">
          <Routes>
            <Route>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<Errorpage />} />
            </Route>
          </Routes>
        </div>
        <div className="FIXED B2 L2 R2 Z10">
          <Navigationbar />
        </div>
      </Suspense>
    </div>
  );
};

export default Layout;
