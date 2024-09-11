import React from 'react';
import { Link } from 'react-router-dom';
// Logo SVG
import { ReactComponent as LogoSVG } from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl py-4 absolute top-0 left-0 right-0 text-white z-10 bg-primary md:bg-transparent sm:bg-primary lg:bg-transparent xl:bg-transparent">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold rtl:ml-4 ltr:mr-4">
          <Link to="/" className="flex items-center">
            <LogoSVG
              className="md:h-auto sm:h-8 xsmall:h-8 w-auto"
              alt="Your Company"
            />
          </Link>
        </div>

        {/* Button */}
        <div className="rtl:mr-4 ltr:ml-4">
          <button
            className="bg-main text-white xsmall:bg-red-600 xsmall:text-white sm:bg-main sm:text-white lg:bg-base lg:text-main xl:bg-base xl:text-main"
            style={{
              padding: '16px 24px',
              fontWeight: '500',
              border: 'none',
              fontSize: '16px',
            }}
          >
            تواصل معانا
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
