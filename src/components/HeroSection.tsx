import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#174e64] pb-[4rem] pt-[3rem] px-4 flex flex-col items-center justify-center xs:mb-5">
      <div className="container mx-auto max-w-full flex flex-col items-center text-center">
        <h2 className="text-white text-[40px] font-bold mb-4 animate__animated animate__fadeIn">
          Our Blog
        </h2>
        <p className="text-gray-100 mb-6 animate__animated animate__fadeIn animate__delay-1s text-md lg:w-[40%] w-[100%]">
          Discover our latest posts and deepen your knowledge on various topics.
          Feel free to explore and search for the topics you are interested in.
        </p>
        <div className="w-[50%] xs:w-[90%] relative bg-slate-600 animate__animated animate__fadeIn animate__delay-2s text-xs">
          <input
            type="text"
            placeholder="Search for posts..."
            className="w-full text-slate-50 px-4 py-4 bg-white text-md rounded-md border-2 border-transparent focus:outline-none focus:border-primary transition-all duration-500"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-4 text-gray-400">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
