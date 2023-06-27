// import Logo from './Logo';

const Footer = () => {
  return (
    <section className="bg-primary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mt-12">
          <div className="logoContainer">
            <div className="logoWrapper">
              
            </div>
            <p className="mt-2 text-secondary-light">
              Plan fantastic events with ease using Easeplan. Our platform
              helps you find the best service providers, event planners, and
              vendors, simplifying the event planning process in one
              easy-to-use platform.
            </p>
          </div>
          <div className="flex flex-col text-end">
            <p className="text-secondary-main font-bold mb-4">Company</p>
            <div className="flex flex-col">
              <a href="/">About us</a>
              {/* <a href="/blog">Blog</a> */}
              <a href="/">Contact Support</a>
              <a href="/">Terms and Conditions</a>
              <a href="/">Privacy Policy</a>
            </div>
          </div>
          {/* <div className="flex flex-col text-end">
            <p className="text-secondary-main font-bold mb-4">Community</p>
            <div className="flex flex-col">
              <Link href="/">Events</Link>
              <Link href="/">Blogs</Link>
              <Link href="/">Forum</Link>
              <Link href="/">Become vendor</Link>
            </div>
          </div> */}
          <div className="flex flex-col text-end">
            <p className="text-secondary-main font-bold mb-4">Top Services</p>
            <div className="flex flex-col">
              <Link href="/">Events Planners</Link>
              <Link href="/">Photographer</Link>
              <Link href="/">Dj</Link>
              <Link href="/">Catering</Link>
              <Link href="/">Make-up Artist</Link>
              <Link href="/">Event decorator</Link>
              <Link href="/">Security personnel</Link>
            </div>
          </div>
          <div className="flex flex-col text-end">
            <div className="flex mb-4">
              <Link
                href="https://www.facebook.com/easeplan.io/"
                target="_blank"
                className="text-2xl text-secondary-main mr-6"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/easeplan.io/"
                target="_blank"
                className="text-2xl text-secondary-main mr-6"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.linkedin.com/company/easeplan/"
                target="_blank"
                className="text-2xl text-secondary-main mr-6"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://twitter.com/easeplan_team"
                target="_blank"
                className="text-2xl text-secondary-main"
              >
                <FaTwitter />
              </Link>
            </div>
            <p>easeplan.team@gmail.com</p>
          </div>
        </div>
        <div className="text-center text-white py-12">
          &copy; {new Date().getFullYear()} EasePlan & Co. All rights reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
