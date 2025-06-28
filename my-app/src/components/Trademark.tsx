import React from 'react';

const Trademark = () => {
  return (
    <footer
      className="h-[80px] border-t-2 border-opacity-30
    flex justify-around items-center bg-white dark:bg-gray-800
    transition-colors duration-300 ease-linear text-black dark:text-white"
    >
      <span className="text-center">&copy; All rights reserved.</span>
      <span className="text-center">
        Designed & Developed by {''}
        <a href="https://www.sleed.com/el/" className="underline">
          Sleed
        </a>
      </span>
    </footer>
  );
};

export default Trademark;
