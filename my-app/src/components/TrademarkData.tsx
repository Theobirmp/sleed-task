import { motion } from 'framer-motion';
const TrademarkData = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
      className="h-[180px] md:h-[80px] border-t-2 border-opacity-30
    flex flex-col md:flex-row gap-4 md:gap-0 justify-around items-center
     bg-white dark:bg-gray-800 text-black dark:text-white transition-colors ease-linear duration-300"
    >
      <span>&copy; All rights reserved.</span>
      <span>
        Designed & Developed by {''}
        <a href="https://www.sleed.com/el/" className="underline">
          Sleed
        </a>
      </span>
      <div>
        <a className="underline" href="#">
          Terms of Use
        </a>
        <span> | </span>
        <a className="underline" href="#">
          Privacy Policy
        </a>
      </div>
    </motion.footer>
  );
};

export default TrademarkData;
