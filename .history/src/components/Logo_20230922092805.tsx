const Logo = () => {
    return (
        <div className="logo-wrapper flex items-center mr-[4rem] ml-[4rem] xs:ml-[1.5rem]">
        <img
          src="../../public/images/easeplanlogo.png"
          alt="easeplan logo"
        />
        <div className="text-left">
          <p className="logo-text text-base">
            easeplan <span className="text-sm font-thin">blog</span>
          </p>
        </div>
      </div>
    )
}