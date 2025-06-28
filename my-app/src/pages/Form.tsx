import FormHero from '../components/FormHero';
import Navbar from '../components/Navbar';
import FormComponent from '../components/FormComponent';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TrademarkData from '../components/TrademarkData';
import { useDarkMode } from '../hooks/useDarkMode';
const Form = () => {
  const { darkMode } = useDarkMode();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="bg-gray-200 dark:bg-gray-800 min-h-screen"
    >
      <Navbar />
      <header className="uppercase text-black dark:text-white h-[50px] bg-gray-300 dark:bg-gray-800 flex items-center">
        <h2 className="pl-2">
          <Link to="/">
            Αρχικη{' '}
            <span className="pointer-events-none">/ Φορμα Επικοινωνίας</span>
          </Link>
        </h2>
      </header>
      <FormHero />
      <FormComponent />
      <TrademarkData />
    </motion.div>
  );
};

export default Form;
