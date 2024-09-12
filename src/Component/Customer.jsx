import React from 'react';
import customerOne from '../images/bmw.png';
import customerTwo from '../images/customer.png';
import customerThree from '../images/customer1.png';

const columnContent = [
  {
    id: 1,
    image: customerOne,
  },
  {
    id: 2,
    image: customerTwo,
  },
  {
    id: 3,
    image: customerThree,
  },
];

const Customer = () => {
  return (
    <div className="my-8 py-8">
      <div className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl">
        <div className="text-center my-8">
          <h1 className="text-base font-semibold text-4xl">العملاء</h1>
          <p className="text-base opacity-40 mt-4">
            نتمتع بأكثر من ثلاثة عقود من الخبرة كمحامي للمحاكمات.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-4 justify-center">
          {columnContent.map((item) => (
            <div
              key={item.id}
             
            >
              <img src={item.image} alt="customer" className="opacity-40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
