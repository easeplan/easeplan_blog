const Footer = () => {
  return (
    <section className="bg-primary py-12 text-">
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
              <a href="/">Events</a>
              <a href="/">Blogs</a>
              <a href="/">Forum</a>
              <a href="/">Become vendor</a>
            </div>
          </div> */}
          <div className="flex flex-col text-end">
            <p className="text-secondary-main font-bold mb-4">Top Services</p>
            <div className="flex flex-col">
              <a href="/">Events Planners</a>
              <a href="/">Photographer</a>
              <a href="/">Dj</a>
              <a href="/">Catering</a>
              <a href="/">Make-up Artist</a>
              <a href="/">Event decorator</a>
              <a href="/">Security personnel</a>
            </div>
          </div>
          <div className="flex flex-col text-end">
            <div className="flex mb-4">
              <a
                href="https://www.facebook.com/easeplan.io/"
                target="_blank"
                className="text-2xl text-secondary-main mr-6"
              >
                
              </a>
              <a
                href="https://www.instagram.com/easeplan.io/"
                target="_blank"
                className="text-2xl text-secondary-main mr-6"
              >
                
              </a>
              <a
                href="https://www.aedin.com/company/easeplan/"
                target="_blank"
                className="text-2xl text-secondary-main mr-6"
              >
                
              </a>
              <a
                href="https://twitter.com/easeplan_team"
                target="_blank"
                className="text-2xl text-secondary-main"
              >
                
              </a>
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
