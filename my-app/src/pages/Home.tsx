import React from 'react';
import Footer from '../components/Footer';
import HomeGallery from '../components/HomeGallery';
import HomeHero from '../components/HomeHero';
import ImagesContainer from '../components/ImagesContainer';
import Navbar from '../components/Navbar';
import Trademark from '../components/Trademark';
import { useDarkMode } from '../hooks/useDarkMode';

const Home = () => {
  const { darkMode } = useDarkMode();
  return (
    <main
      className={`${darkMode} bg-slate-200 dark:bg-gray-800
    transition-colors duration-300 ease-linear`}
    >
      <Navbar />
      <HomeHero />
      <HomeGallery />
      <ImagesContainer />
      <Footer />
      <Trademark />
    </main>
  );
};

export default Home;
