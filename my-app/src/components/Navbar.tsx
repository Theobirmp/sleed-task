import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useDarkMode } from '../hooks/useDarkMode';
const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      className="relative w-[100%] flex justify-center max-h-[60px] bg-white dark:bg-gray-800
      transition-colors duration-300 ease-linear"
    >
      <Link to="/">
        <header>
          <img className="h-[60px]" src="./sleedLogo.png" alt="sleed" />
        </header>
      </Link>
      <button
        onClick={() => toggleDarkMode()}
        className="absolute right-4 top-[50%] translate-y-[-50%]"
      >
        {darkMode === 'dark' ? (
          <BsFillSunFill size={25} color="white" />
        ) : (
          <BsFillMoonFill size={25} color="black" />
        )}
      </button>
    </motion.section>
  );
};

export default Navbar;
