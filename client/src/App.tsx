import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// COMPONENTS
import Menubar from './Components/Menubar/Menubar';

// STORE
// ICONS

const App = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path={'/'} element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
