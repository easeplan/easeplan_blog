import React from "react";

const HeroSection = ({ handleSearch, searchQuery }: any) => {
  return (
    <section
      style={{
        paddingTop: "64px",
      }}
      className="bg-[#174e64] pb-[4rem] pt-[3rem] flex flex-col items-center justify-center xs:mb-5"
    >
      <div className="container mx-auto max-w-full flex flex-col items-center text-center">
        <h2 className="text-white text-[30px] font-bold mb-4 animate__animated animate__fadeIn">
          Easeplan Blog
        </h2>
        <p className="text-gray-100 mb-6 animate__animated animate__fadeIn animate__delay-1s text-md lg:w-[40%] w-[100%]">
          Find the latest industry news, interviews, and resources to grow your
          event business
        </p>
        <div className="lg:w-[50%] sm:w-[100%] w-[100%] relative bg-slate-600 animate__animated animate__fadeIn animate__delay-2s text-xs">
          <input
            value={searchQuery}
            onChange={handleSearch}
            type="text"
            placeholder="Search for blogs..."
            className="w-full text-[#174e64] px-4 py-4 bg-white text-md rounded-md border-2 border-transparent focus:text-[#174e64] focus:outline-none focus:border-primary transition-all duration-500"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
