import React from 'react';
import Headerbg from '../images/header.png';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import customer1 from '../images/Ellipse 5.png';
import customer2 from '../images/Ellipse 6.png';
import customer3 from '../images/Ellipse 7.png';

const Header = () => {
  return (
    <header>
      <div
        className="relative h-screen bg-cover bg-center text-white flex items-center justify-center p-5 md:p-10"
        style={{ backgroundImage: `url(${Headerbg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content on top of the dark overlay */}
        <div className="relative z-10 ml-auto max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-screen-2xl">
          <h1 className="text-[32px] sm:text-[32px]  md:text-[48px] lg:text-[64px] xl:text-[96px] font-bold mb-8 xsmall:mb-8 sm:mb-8 md:mb-8 leading-normal">
            المحامي المناسب <br /> هو الذي يصنع الفارق
          </h1>
          <p className="mb-8 sm:mb-8 md:mb-8">
            تتمتع سجال بأكثر من ثلاثة عقود من الخبرة كمحامية للمحاكمات.
          </p>
          <button
            className="flex items-center gap-2 bg-main  sm:px-6 sm:py-3"
            style={{
              fontWeight: '500',
              border: 'none',
              fontSize: '14px',
              smFontSize: '16px',
              padding: '16px 24px',
            }}
          >
            <span>تواصل معانا</span>
            <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Customer Review Section */}
          <div className="flex items-center mt-8 ">
            {/* Customer Images */}
            <div className="relative flex mb-4 sm:mb-0">
              <img src={customer1} alt="Customer 1" className="relative z-30" />
              <img
                src={customer2}
                alt="Customer 2"
                className="relative z-20 -mr-3"
              />
              <img
                src={customer3}
                alt="Customer 3"
                className="relative z-10 -mr-3"
              />
            </div>

            {/* Customer Review Text */}
            <div className="mr-8 sm:mr-8 md:mr-4 ">
              <p>العملاء الراضون هم حجر الاساس في نجاحنا</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
