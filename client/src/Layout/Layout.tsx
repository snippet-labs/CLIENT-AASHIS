import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';

// UTILS
const Loader = lazy(() => import('../Utils/Loader/Loader'));
// COMPONENTS
const Menubar = lazy(() => import('../Components/Menubar/Menubar'));
const Navigationbar = lazy(
  () => import('../Components/Navigationbar/Navigationbar'),
);
// PAGES
const Homepage = lazy(() => import('../Pages/Home/Home'));

const Layout: React.FC = () => {
  return (
    <div className="CONTAINER SCREEN COLUMN RELATIVE">
      <Suspense fallback={<Loader />}>
        <div className="FIXED T2 L2 R2 Z10">
          <Menubar />
        </div>
        <div className="FLEX-GROW PADDING-TOP PADDING-BOTTOM FLOW-Y-AUTO CONTENT-TOP-MARGIN CONTENT-BOTTOM-MARGIN">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
        <div className="FIXED B2 md:B2 lg:B2 L2 R2 Z10">
          <Navigationbar />
        </div>
      </Suspense>
    </div>
  );
};

export default Layout;
