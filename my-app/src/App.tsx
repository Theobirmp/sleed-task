import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Data from './pages/Data';
import { AnimatePresence } from 'framer-motion';
import { DarkModeProvider } from './theme/DarkModeContext';
function App() {
  const location = useLocation();
  return (
    <>
      <DarkModeProvider>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </AnimatePresence>
      </DarkModeProvider>
    </>
  );
}

export default App;
