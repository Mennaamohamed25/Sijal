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
            spaceBetween={10}
            slidesPerView={1.5}
            breakpoints={{
              640: { slidesPerView: 3.5 },
              768: { slidesPerView: 3.5 },
              1024: { slidesPerView: 4.5 },
            }}
            loop={true}
            centeredSlides={true}
          >
            {columnContent.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="customer" className="opacity-40" />
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
