import React from "react";
import "../styles/global.css";
import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="footer py-12">
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
                  <a href="/">Events</a>
                  <a href="/">Blogs</a>
                  <a href="/">Forum</a>
                  <a href="/">Become vendor</a>
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
                    <FaFacebook className="text-[#71f79f] text-3xl" />
                    <FaInstagram className="text-[#71f79f] text-3xl" />
                    <IoLogoLinkedin className="text-[#71f79f] text-3xl" />
                    <FaXTwitter className="text-[#71f79f] text-3xl" />
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
    </section>
  );
};

// const FooterSection = styled(`section`)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   padding: `3rem 0`,
// }));

// const BottomFooter = styled(`section`)(({ theme }) => ({
//   padding: `5rem 0 1rem 0`,
//   textAlign: `center`,
//   color: theme.palette.common.white,
// }));

// const Newsletter = styled(`div`)(({}) => ({
//   backgroundColor: `red`,
//   padding: `3rem`,

//   '@media (max-width: 1020px)': {
//     padding: `2rem`,
//   },

//   '@media (max-width: 900px)': {
//     padding: `1rem`,
//   },
// }));

// // const FooterContent = styled(`div`)(({}) => ({
// //   padding: `2rem 0`,
// //   marginTop: `3rem`,

// //   '@media (max-width: 1020px)': {
// //     padding: `2rem`,
// //   },

// //   '@media (max-width: 900px)': {
// //     padding: `1rem`,
// //   },
// // }));

// // const Grid = styled(`div`)(({}) => ({
// //   display: `grid`,
// //   gridTemplateColumns: `repeat(5, 1fr)`,
// //   alignItems: `start`,
// //   gap: `2rem`,

// //   '@media (max-width: 1020px)': {
// //     gridTemplateColumns: `repeat(2, 1fr)`,
// //     gap: `2rem`,
// //   },

// //   '@media (max-width: 900px)': {
// //     gridTemplateColumns: `repeat(1, 1fr)`,
// //     gap: `2rem`,
// //   },
// // }));

// // const List = styled(`div`)(({ theme }) => ({
// //   color: `#fff`,

// //   '.list': {
// //     display: `flex`,
// //     flexDirection: `column`,

// //     a: {
// //       lineHeight: `2.5`,
// //       color: `#fff`,
// //     },
// //   },

// //   '.iconFlex': {
// //     display: `flex`,

// //     '.icon': {
// //       fontSize: `1.7rem`,
// //       color: theme.palette.secondary.main,
// //       marginRight: `1.5rem`,
// //       marginBottom: `1rem`,
// //     },
// //   },

// //   '.title': {
// //     color: theme.palette.secondary.main,
// //     fontWeight: `700`,
// //     fontSize: `1rem`,
// //     marginBottom: `1rem`,
// //   },

// //   '@media (max-width: 1020px)': {
// //     padding: `2rem`,
// //   },

// //   '@media (max-width: 900px)': {
// //     padding: `1rem`,
// //   },
// // }));

// // const Title = styled(`h2`)(({ theme }) => ({
// //   fontWeight: `3rem`,
// //   color: theme.palette.primary.main,
// //   textAlign: `center`,

// //   '@media (max-width: 1020px)': {
// //     fontSize: `1.5rem`,
// //   },

// //   '@media (max-width: 900px)': {
// //     fontSize: `1rem`,
// //   },
// // }));

// // const FormWrapper = styled(`div`)(({}) => ({
// //   backgroundColor: `#73877B`,
// //   padding: `3rem`,
// //   width: `70%`,
// //   margin: `0 auto`,
// //   display: `flex`,
// //   flexDirection: `row`,

// //   '@media (max-width: 1020px)': {
// //     flexDirection: `column`,
// //     width: `100%`,
// //     padding: `0`,
// //     marginTop: `2rem`,
// //   },

// //   '@media (max-width: 900px)': {
// //     flexDirection: `column`,
// //     width: `100%`,
// //     padding: `0`,
// //     marginTop: `1rem`,
// //   },
// // }));

// // const Input = styled(`input`)(({ theme }) => ({
// //   padding: `1rem`,
// //   width: `100%`,
// //   marginRight: `1rem`,

// //   '&::placeholder': {
// //     color: theme.palette.primary.main,
// //   },

// //   '@media (max-width: 1020px)': {
// //     marginBottom: `1rem`,
// //     marginRight: `0`,
// //   },

// //   '@media (max-width: 900px)': {
// //     marginTop: `1rem`,
// //     marginRight: `0`,
// //   },
// // }));

// // const Button = styled(`button`)(({ theme }) => ({
// //   padding: `1rem 3rem`,
// //   textTransform: `uppercase`,
// //   fontWeight: `600`,
// //   backgroundColor: theme.palette.primary.main,
// //   color: theme.palette.secondary.main,
// //   border: `transparent`,
// // }));

// // const Footer = () => {
// //   return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
// // };

// const Header = styled.header`
//   background-color: #262b33;
//   padding: 1rem 0;
//   width: 100vw;
//   position:fixed;
//   z-index: 999;

// .display-mobile-nav {
//   display: block;
// }

// .display-none{
//   display: none;
// }

//   .desktop-nav {
//     display: none;
//   }

// .mobile-nav {

//   .display-mobile-nav {
//     display:flex;
//     flex-direction: column;
//     align-items: center;
//     box-shadow: 10px 10px 5px 0px rgba(189,189,189,0.75);
//     -webkit-box-shadow: 10px 10px 5px 0px rgba(189,189,189,0.75);
//     -moz-box-shadow: 10px 10px 5px 0px rgba(189,189,189,0.75);
//     transition: opacity 5s ease-in;

//   }
// }

// `;

export default Footer;
