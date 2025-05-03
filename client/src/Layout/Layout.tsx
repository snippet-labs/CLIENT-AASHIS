import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';

// UTILS
const Loader = lazy(() => import('../Utils/Loader/Loader'));
// COMPONENTS
const Menubar = lazy(() => import('../Components/Menubar/Menubar'));

const Layout: React.FC = () => {
  return (
    <div className="CONTAINER">
      <Suspense fallback={<Loader />}>
        <Menubar />
        <Routes>
          <Route></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default Layout;
