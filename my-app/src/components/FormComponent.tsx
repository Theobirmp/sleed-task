import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useLocalStorage } from '../hooks/useLocalStorage';
import localStorageType from '../types/LocalStorageType';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const FormComponent = () => {
  const [, setData] = useLocalStorage<localStorageType>(
    'MESSAGE',
    {} as localStorageType
  );
  // const checkbox = useRef<HTMLInputElement>(null);
  const [dataPageOpen, setDataPageOpen] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  useEffect(() => {
    validate();
  }, [name, surname, email, password, message]);
  const validate = () => {
    if (
      name !== '' &&
      surname !== '' &&
      email !== '' &&
      password !== '' &&
      message !== '' &&
      checkbox
    )
      return true;
    return false;
  };
  const submitData = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDataPageOpen(true);
    setData((data) => {
      return { ...data, name, surname, email, password, message };
    });
  };
  return (
    <motion.form
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
      className="flex flex-col gap-4 items-center mt-[-100px] py-10 px-4 md:px-20 bg-white
    dark:bg-gray-800 relative z-10 max-w-[90%] md:max-w-[75%]
     lg:max-w-[60%] mx-auto mb-[100px] transition-colors ease-linear duration-300"
    >
      <header className="text-black dark:text-white font-bold">
        <h3>Φόρμα Επικοινωνίας</h3>
      </header>
      <select
        className="border-black border-2  rounded-md px-4 py-3 w-[100%]"
        name="select"
        id="select"
      >
        <option className="border-black rounded-sm" value="prosopiko">
          Επικοινωνία με το τμήμα του προσωπικού
        </option>
        <option value="placeholder1">placeholder</option>
        <option value="placeholder2">placeholder</option>
        <option value="placeholder3">placeholder</option>
      </select>
      <div className="flex flex-col md:flex-row gap-2 w-[100%]">
        <input
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          className="bg-gray-100 rounded-md p-4 w-[100%]"
          type="text"
          required
          placeholder="Όνομα*"
        />
        <input
          value={surname}
          onChange={(e) => setSurname(e.currentTarget.value)}
          className="bg-gray-100 rounded-md p-4 w-[100%]"
          type="text"
          required
          placeholder="Επώνυμο*"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-[100%]">
        <input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          className="bg-gray-100 rounded-md p-4 w-[100%]"
          type="email"
          required
          placeholder="Email*"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          className="bg-gray-100 rounded-md p-4 w-[100%]"
          type="password"
          required
          placeholder="Κωδικος Παραγγελίας*"
        />
      </div>
      <div className="w-[100%] mt-2 flex flex-col gap-2">
        <label
          className="text-black font-bold dark:text-white"
          htmlFor="message"
        >
          Μήνυμα
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          className="bg-gray-100 rounded-md p-4 w-[100%]"
          placeholder="Γράψτε μας"
          name="message"
          id="message"
          cols={30}
          rows={10}
        ></textarea>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-[100%]">
        <span className="text-black dark:text-white">
          *Όλα τα πεδία είναι υποχρεωτικά
        </span>
        <div className="flex gap-2">
          <input
            type="checkbox"
            required
            onClick={() => setCheckbox((checkbox) => !checkbox)}
          />
          <span className="text-black dark:text-white">
            Αποδέχομαι τους{' '}
            <a className="underline" href="#">
              Όρους Χρήσης
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-2 justify-end w-[100%] mt-2">
        {dataPageOpen ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
          >
            <Link
              to="/data"
              className={`${
                !dataPageOpen ? 'pointer-events-none' : ''
              }flex gap-2 items-center bg-black text-white 
        px-8 py-2 mr-4`}
            >
              Go to Data Page
            </Link>
          </motion.span>
        ) : (
          <></>
        )}

        <button
          disabled={!validate()}
          onClick={submitData}
          className="flex gap-2 items-center bg-black text-white 
        px-8 py-2 disabled:bg-red-500 transition-colors ease-linear duration-300"
        >
          Υποβολή <AiOutlineArrowRight />
        </button>
      </div>
    </motion.form>
  );
};

export default FormComponent;
