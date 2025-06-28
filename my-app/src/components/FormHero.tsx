import { motion } from 'framer-motion';
const FormHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="max-h-[200px] overflow-hidden">
        <img src="./HeroBg.png" alt="hero" />
      </div>
    </motion.section>
  );
};

export default FormHero;
