import React from "react";
import '../styles/global.css'

const Logo = () => {
  return (
    <div className="logo-wrapper flex items-center mr-[4rem] ml-[4rem] xs:ml-[1.5rem]">
      <img src="/images/easeplanlogo.png" alt="easeplan logo" />
      <div className="text-left">
        <p className="logo-text text-base">
          easeplan <span className="text-lg font-thin">blog</span>
        </p>
      </div>
    </div>
  );
};

export default Logo;