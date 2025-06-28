import Navbar from '../components/Navbar';
import SubmittedData from '../components/SubmittedData';
import TrademarkData from '../components/TrademarkData';

const Data = () => {
  return (
    <section className="min-h-screen bg-gray-200 dark:bg-gray-800 transition-colors ease-linear duration-300">
      <Navbar />
      <section className="w-[100%] h-[calc(100vh-140px)] flex justify-center items-center">
        <SubmittedData />
      </section>
      <TrademarkData />
    </section>
  );
};

export default Data;
