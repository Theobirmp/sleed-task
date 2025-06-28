const ImagesContainer = () => {
  return (
    <section
      className="flex lg:flex-row flex-col items-center
     max-w-[300px] lg:max-w-[1000px] xl:max-w-[100%]
       mx-auto md:max-h-[700px] mb-24 md:mb-24 lg:mb-0 xl:max-h-[1000px] bg-slate-200 dark:bg-gray-800
       transition-colors duration-300 ease-linear w-[100%] h-[100%]"
    >
      <div className="h-[350px] xl:h-[600px] w-[100%] md:w-[650px] xl:w-[100%] flex justify-center">
        <img
          className="h-[100%] w-[100%]"
          src="./blueStars.jpg"
          alt="blue stars"
        />
      </div>
      <div className="h-[350px] xl:h-[600px] w-[100%] md:w-[650px] xl:w-[100%] flex justify-center">
        <img
          className="h-[100%] w-[100%]"
          src="./colorsStars.jpg"
          alt="colors stars"
        />
      </div>
    </section>
  );
};

export default ImagesContainer;
