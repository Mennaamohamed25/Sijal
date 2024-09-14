import React from 'react';
import customerOne from '../images/c1.png';
import customerTwo from '../images/c2.png';
import customerThree from '../images/c3.png';
import customerFour from '../images/c4.png';
import customerFive from '../images/c5.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Swiper navigation styles
import 'swiper/css/pagination'; // Swiper pagination styles
import { Autoplay } from 'swiper/modules'; // Import Autoplay module from swiper/modules

const columnContent = [
  { id: 1, image: customerOne },
  { id: 2, image: customerTwo },
  { id: 3, image: customerThree },
  { id: 4, image: customerFour },
  { id: 5, image: customerFive },
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
        {/* Swiper Carousel for small screens */}
        <div className="block lg:hidden">
          <Swiper
            spaceBetween={6} // Reduced gap for small screens
            slidesPerView={2.5} // Show 2.5 columns on small screens
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 8 },
              768: { slidesPerView: 3.5, spaceBetween: 10 },
              1024: { slidesPerView: 4.5, spaceBetween: 12 },
            }}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }} // Auto-play settings
            modules={[Autoplay]} // Register the Autoplay module
          >
            {columnContent.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex justify-center items-center">
                  <img
                    src={item.image}
                    alt="customer"
                    className="h-40 object-contain opacity-40"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for large screens */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-6 lg:items-center lg:justify-center">
          {columnContent.map((item) => (
            <div key={item.id} className="flex justify-center">
              <img src={item.image} alt="customer" className="opacity-40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
