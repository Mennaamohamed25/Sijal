import React from 'react';
import imageOne from '../images/us1.png';
import imageTwo from '../images/us2.png';

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl my-8">
      <div className="flex justify-center">
        <img
          src={imageOne}
          alt="about us"
          className="w-full h-auto object-cover  rounded-[16px]"
        />
      </div>
      <div className="flex flex-col  ">
        <img
          src={imageTwo}
          alt="about us"
          className="w-full h-auto object-cover mb-4 rounded-[16px]"
        />
        <h1 className="text-[36px] sm:text-[36px] md:text-[60px] font-bold leading-normal text-base">
          من انا
        </h1>

        <p className="text-base mt-2 text[16px] ">
          الدكتور معاذ السعدون، حاصل على درجة الدكتوراه في القانون الدولي، محامٍ
          ورجل أعمال عراقي بارز. يعد عضوًا في اتحاد المحامين العرب، ويشغل منصب
          الممثل القانوني للشركات السعودية في العراق، بالإضافة إلى كونه المستشار
          القانوني لهيئة الاستثمار السعودية في العراق. كما يتولى مهام محامي
          السفارة الكويتية في بغداد.
        </p>
        <p className="text-base mt-2">
          {' '}
          الدكتور معاذ هو مؤسس شركة السجال للمحاماة والاستشارات القانونية، وشريك
          مساهم في شركة البناء المستمر للتجارة العامة والمقاولات والوكالات
          التجارية وتنظيم المعارض والمؤتمرات. كما يمثل قانونيًا عددًا من الشركات
          القابضة الخليجية والعالمية المتخصصة في مجالات النفط والغاز والطاقة
          المتجددة، ويشرف على إنشاء الصناديق السيادية والمحافظ الاستثمارية.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
