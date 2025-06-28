import { Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import localStorageType from '../types/LocalStorageType';
import { motion } from 'framer-motion';
const SubmittedData = () => {
  const [data] = useLocalStorage<localStorageType>(
    'MESSAGE',
    {} as localStorageType
  );

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
      className="bg-white p-10 h-[100%] max-h-[700px]
       max-w-[1000px] container flex flex-col gap-4 mx-[20px] md:mx-[100px]"
    >
      <header className="text-2xl text-black font-bold text-center mb-4">
        <h3>Υποβληθέντα στοιχεία:</h3>
      </header>
      <div className="bg-gray-200 flex flex-col md:flex-row items-center md:items-stretch gap-6 px-8 py-8 w-[100%] justify-evenly">
        <span>{data.name}</span>
        <span>{data.surname}</span>
        <span>{data.email}</span>
        <span>{data.password}</span>
      </div>
      <div className="bg-gray-200 p-10 text-start">
        <h3 className="text-black text-xl">Μήνυμα</h3>
        <p className="pr-[40%] w-[100%]">{data.message}</p>
      </div>
      <div className="w-[100%] flex justify-center md:justify-end">
        <Link className="px-10 py-4 bg-black text-white rounded-md" to="/form">
          Επιστροφή
        </Link>
      </div>
    </motion.section>
  );
};

export default SubmittedData;
