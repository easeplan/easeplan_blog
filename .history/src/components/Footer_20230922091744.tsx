import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import React from "react";
import '../styles/global.css'

const Footer = () => {
  return (
    <section className="footer py-12">
      <div className="container mx-auto">
        <div className="subscribe py-6 px-4 md:px-6 w-full">
          <h2 className="text-primary text-center text-xs md:text-5xl font-bold" style={{color:"#174e64"}}>
            Subscribe to our emails to see what we’re up to
          </h2>
          <div className="mt-6 flex space-x-5 md:flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Enter email address"
              className="px-2 py-1 border border-gray-300 focus:outline-none focus:border-primary md:mr-4 md:mb-0"
            />
            <button
              className="text-gray-500 bg-gray-200 px-6 py-1 text-lg font-semibold hover:bg-opacity-90 transition duration-300"
              style={{backgroundColor:;color:"#71f79f"}}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-secondary">
              {/* <Logo /> */}
            </div>
            <div className="text-secondary">
              <p className="font-semibold text-lg">Company</p>
              <div className="mt-2">
                <a href="/">About us</a>
                <a href="/">Contact Support</a>
                <a href="/">Terms and Conditions</a>
                <a href="/">Privacy Policy</a>
              </div>
            </div>
            <div className="text-secondary">
              <p className="font-semibold text-lg">Community</p>
              <div className="mt-2">
                <a href="/">Events</a>
                <a href="/">Blogs</a>
                <a href="/">Forum</a>
                <a href="/">Become vendor</a>
              </div>
            </div>
            <div className="text-secondary">
              <p className="font-semibold text-lg">Top Services</p>
              <div className="mt-2">
                <a href="/">Events Planners</a>
                <a href="/">Photographers</a>
                <a href="/">Djs</a>
                <a href="/">Caterers</a>
              </div>
            </div>
            <div className="text-secondary">
              <div className="flex items-center mb-4">
                <a href="/">
                  <FaFacebook className="text-2xl text-primary mr-4" />
                </a>
                <a href="/">
                  <FaInstagram className="text-2xl text-primary mr-4" />
                </a>
                <a href="/">
                  <FaLinkedin className="text-2xl text-primary mr-4" />
                </a>
                <a href="https://twitter.com/easeplan_team">
                  <FaTwitter className="text-2xl text-primary" />
                </a>
              </div>
              <p className="text-secondary">easeplan.team@gmail.com</p>
              <p className="mt-4">+234 XXXXXXXX</p>
            </div>
          </div>
        </div>
        <div className="text-center text-white mt-6">
          &copy; {new Date().getFullYear()} EasePlan & Co. All rights reserved
        </div>
      </div>
      {/* <Header> <a href="/">Events Planners</a>
                <a href="/">Photographers</a>
                <a href="/">Djs</a>
                <a href="/">Caterers</a></Header>
      <Newsletter>New letters on Easeplan</Newsletter> */}
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