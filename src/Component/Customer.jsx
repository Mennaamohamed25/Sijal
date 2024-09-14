import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Swiper navigation styles
import 'swiper/css/pagination'; // Swiper pagination styles
import { Autoplay } from 'swiper/modules'; // Import Autoplay module from swiper/modules

// Import SVGs as React components
import { ReactComponent as CustomerOne } from '../images/c1.svg';
import { ReactComponent as CustomerTwo } from '../images/c2.svg';
import { ReactComponent as CustomerThree } from '../images/c3.svg';
import { ReactComponent as CustomerFour } from '../images/c4.svg';
import { ReactComponent as CustomerFive } from '../images/c5.svg';
import { ReactComponent as CustomerSix } from '../images/c6.svg';
import { ReactComponent as CustomerSeven } from '../images/c7.svg';
import { ReactComponent as CustomerEi } from '../images/c8.svg';
import { ReactComponent as CustomerNi } from '../images/c9.svg';

const columnContent = [
  { id: 1, Component: CustomerOne },
  { id: 2, Component: CustomerTwo },
  { id: 3, Component: CustomerThree },
  { id: 4, Component: CustomerFour },
  { id: 5, Component: CustomerFive },
  { id: 6, Component: CustomerSix },
  { id: 7, Component: CustomerSeven },
  { id: 8, Component: CustomerEi },
  { id: 9, Component: CustomerNi },
];

const Customer = () => {
  return (
    <div className="my-8 py-8">
      <div className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl">
        <div className="text-center my-8">
          <h1 className="text-main text-[32px] sm:text-[40px] font-semibold">
            العملاء
          </h1>
        </div>

        {/* Swiper Carousel for all screen sizes */}
        <Swiper
          spaceBetween={8} // Reduced gap between slides
          slidesPerView={2} // Default to 2 slides per view for small screens
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 4 }, // Show 2 slides on extra small screens
            640: { slidesPerView: 2, spaceBetween: 8 }, // Show 2 slides on small screens
            768: { slidesPerView: 3, spaceBetween: 12 }, // Show 3 slides on medium screens with reduced gap
            1024: { slidesPerView: 4, spaceBetween: 16 }, // Show 4 slides on large screens with moderate gap
            1280: { slidesPerView: 5, spaceBetween: 20 }, // Show 5 slides on extra large screens with larger gap
          }}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Auto-play settings
          modules={[Autoplay]} // Register the Autoplay module
        >
          {columnContent.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center items-center">
                <item.Component className=" h-32 fill-white opacity-40" />{' '}
                {/* Adjusted dimensions */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Customer;
