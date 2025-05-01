import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// COMPONENTS
import Navbar from './Components/Navbar/Navbar';

// STORE
// ICONS

const App = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
