import Image from "next/image";
import React from "react";
import LogoImg from "/public/easeplanlogo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        width={50}
        height={30}
        src={LogoImg}
        alt="easeplan logo"
        style={{ fontWeight: "100" }}
      />
      <div className="text-left">
        <p className="font-bold lg:text-[1.5rem] text-lg text-[#71f79f] nowrap">
          easeplan <span className="lg:text-lg text-md font-thin"></span>
        </p>
      </div>
    </div>
  );
};

export default Logo;
