import React from 'react';
import Headerbg from '../images/header.png';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div
        className="relative h-screen bg-cover bg-center text-white flex items-center justify-start"
        style={{ backgroundImage: `url(${Headerbg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div
          className=" relative z-10 max-w-7xl px-8 xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto w-full"
          style={{ marginTop: '3.5rem' }}
        >
          <h1 className="text-[25px] sm:text-[28px] md:text-[45px] lg:text-[58px] xl:text-[60px] font-bold mb-8 leading-normal">
            شريكك القانوني الموثوق به في <br /> العراق، حيث نقدم لك الخبرة
            <br /> والاحترافية لحماية حقوقك <br />
            وتحقيق العدالة{' '}
          </h1>
          <p className="mb-8 sm:mb-8 md:mb-8">
            تتمتع سجال بأكثر من ثلاثة عقود من الخبرة كمحامية للمحاكمات.
          </p>
          <Link to="aboutus">
            <button
              className="flex items-center gap-2 bg-main sm:px-6 sm:py-3 rounded-[16px]"
              style={{
                fontWeight: '500',
                border: 'none',
                fontSize: '16px',
                padding: '16px 24px',
              }}
            >
              <span>تواصل معانا</span>
              <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
