import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const HomeGallery = () => {
  return (
    <section
      className="bg-white dark:bg-gray-800
      transition-colors duration-300 ease-linear h-[100vh] w-[100%] flex flex-col
     lg:flex-row gap-8 py-10 items-center
     mb-[100px] lg:mb-0 "
    >
      <div className="flex flex-col gap-2 items-center px-4 md:px-16 ">
        <header>
          <h2 className="text-black uppercase underline mb-4 dark:text-white">
            Photo Gallery
          </h2>
        </header>
        <div className="flex gap-4 flex-row lg:flex-col xl:flex-row  w-[100%]">
          <div className="w-[100%] xl:max-w-[350px] aspect-[2/1]">
            <img
              className="h-[300px] w-[200px] md:w-[300px]"
              src="./cometCrashing.jpg"
              alt="comet"
            />
          </div>
          <div className="w-[100%] xl:max-w-[350px] aspect-[2/1]">
            <img
              className="h-[300px]  w-[200px] md:w-[300px]"
              src="./earth.jpg"
              alt="earth"
            />
          </div>
        </div>
      </div>
      <div
        className=" relative max-w-[600px] h-[700px] xl:max-w-[700px] 
      xl:h-[1000px]  lg:ml-auto"
      >
        <div className="h-[100%] py-10">
          <img
            className="h-[100%] w-[100%]"
            src="./greenSky.jpg"
            alt="green sky"
          />
          <Link
            className="min-w-max
            bg-white px-4 py-2 text-blak
          flex items-center rounded-bl-md rounded-tr-md gap-2 absolute bottom-[20%] left-[20%] md:left-[50%] translate-x[-50%]"
            to="/form"
          >
            Συμπληρώστε τη φόρμα
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
