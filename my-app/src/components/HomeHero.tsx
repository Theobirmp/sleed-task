import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from 'framer-motion';
const HomeHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="b max-h-[calc(100vh-60px)] overflow-hidden relative"
    >
      <img src="./HeroBg.png" alt="" />
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        className="bg-slate-200 dark:bg-gray-800
        transition-colors duration-300 ease-linear bg-opacity-70 opacity-60
         absolute md:right-[50px] md:bottom-[50px] right-0 bottom-0 z-10
      px-6 py-4 flex flex-col gap-6 md:w-[40%]"
      >
        <h3 className="text-black dark:text-white opacity-90">Season 2022</h3>
        <h1 className="text-black dark:text-white font-bold text-2xl">
          Επικοινωνήστε μαζί μας!
        </h1>
        <Link
          className="min-w-max bg-black px-4 py-2 rounded-bl-md rounded-tr-md
           text-white self-start flex gap-2 items-center"
          to="/form"
        >
          Συμπλήρωσε τη φόρμα
          <AiOutlineArrowRight />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default HomeHero;
