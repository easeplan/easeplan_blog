import React from "react";
import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#174e64] py-12">
      <div className="lg:px-20 px-10 w-full">
        <div className="flex lg:flex-row md:flex-col flex-col justify-between">
          <div className="w-full ">
            <Logo />
            <p className="text-white my-6">
              Make event planning easy with Easeplan. Find & hire the best
              vendors, event service providers, connect with top event planners
              in Nigeria. Decorators, Photographers, Bakers, Caterers, Ushering,
              Event planners, Make-up artists, DJs, MCs, Hair stylist, in
              Nigeria
            </p>
          </div>
          <div className="flex justify-center w-full md:mt-20">
            <div className="flex lg:flex-row md:flex-row flex-col justify-center w-full gap-20">
              <div className="">
                <p className="font-semibold text-md text-[#71f79f] ">
                  Community
                </p>
                <div className="flex flex-col space-y-4 mt-6 text-white">
                  <Link href="/" className="text-md leading-6 text-white">
                    Home
                  </Link>
                  <Link href="/" className="text-md leading-6 text-white">
                    Blog
                  </Link>
                  <Link
                    href="/https://app.easeplan.io/findvendors"
                    className="text-md leading-6 text-white">
                    Find Vendors
                  </Link>
                  <Link
                    href="https://app.easeplan.io/signup"
                    className="text-md leading-6 text-white">
                    Become a vendor
                  </Link>
                </div>
              </div>
              <div className="text-secondary">
                <p className="font-semibold text-lg text-[#71f79f]">
                  Top Services
                </p>
                <div className="flex flex-col space-y-4 mt-6 text-white">
                  <a href="/">Events Planners</a>
                  <a href="/">Photographers</a>
                  <a href="/">Djs</a>
                  <a href="/">Caterers</a>
                </div>
              </div>
              <div className="flex flex-col space-y-4 text-white">
                <div className="">
                  <div className="flex gap-4 mb-3">
                    <Link href="https://www.facebook.com/easeplan.io/">
                      <FaFacebook className="text-[#71f79f] text-3xl" />
                    </Link>
                    <Link href="https://www.instagram.com/easeplan.io/">
                      <FaInstagram className="text-[#71f79f] text-3xl" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/easeplan/">
                      <IoLogoLinkedin className="text-[#71f79f] text-3xl" />
                    </Link>
                    <Link href="https://twitter.com/easeplan_team">
                      <FaXTwitter className="text-[#71f79f] text-3xl" />
                    </Link>
                  </div>
                  <p className="text-secondary">easeplan.team@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white mt-20">
          &copy; {new Date().getFullYear()} EasePlan & Co. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
