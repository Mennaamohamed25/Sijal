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
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col  ">
        <img
          src={imageTwo}
          alt="about us"
          className="w-full h-auto object-cover mb-4"
        />
        <h1 className="text-[36px] sm:text-[36px] md:text-[60px] font-bold leading-normal text-base">
          من انا
        </h1>

        <p className="text-base mt-4 ">
          يُعد نص Lorem Ipsum ببساطة نصًا شكليًا (بعبارة أخرى، نصًا شكليًا)
          لصناعة الطباعة والتنضيد. كان نص Lorem Ipsum هو النص الشكلي القياسي
          للصناعة منذ القرن السادس عشر، عندما أخذ طابع غير معروف معرضًا من
          الحروف وقام بخلطها لعمل كتاب عينات الحروف. لقد نجا ليس فقط من خمسة
          قرون، بل وأيضًا من القفزة إلى التنضيد الإلكتروني، وظل دون تغيير بشكل
          أساسي.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
