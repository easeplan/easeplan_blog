import Image from "next/image";
import React from "react";
import LogoImg from "/public/easeplanlogo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src={LogoImg}
        alt="easeplan logo"
        className="lg:h-10 lg:w-20 h-7 w-10 mr-2"
      />
      <div className="text-left">
        <p className="font-bold lg:text-2xl text-md text-[#71f79f] nowrap">
          easeplan <span className="lg:text-lg text-md font-thin">blog</span>
        </p>
      </div>
    </div>
  );
};

export default Logo;
