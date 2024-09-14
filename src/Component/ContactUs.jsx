import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'; // Import close icon
import Contactbg from '../images/Contact.png';
import popimg from '../images/popup.png';
import personal from '../images/Component 6.png';
import { useInView } from 'react-intersection-observer';

// Define animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactUs = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Toggle popup visibility
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: backgroundRef, inView: backgroundInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <>
      {/* Main content */}
      <div className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl py-4 mt-20">
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="flex justify-between items-center"
        >
          {/* Second column - Text */}
          <div className="text-base">
            <h1 className="text-[32px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[96px] font-bold mb-8 leading-normal">
              تواصل معنا فنحن هنا لمساعدتك.
            </h1>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 p-4">
          {/* First column */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Input columns */}
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  ref={formRef}
                  initial="hidden"
                  animate={formInView ? 'visible' : 'hidden'}
                  variants={sectionVariants}
                  className="flex flex-col"
                >
                  <label
                    htmlFor={`input${index + 1}`}
                    className="mb-2 text-base"
                  >
                    {['الاسم', 'رقم الهاتف', 'البريد الإلكتروني'][index]}
                  </label>
                  <input
                    type="text"
                    id={`input${index + 1}`}
                    className="border-b-[1px] border-[#CACACA] focus:border-main outline-none py-1 bg-primary text-base"
                  />
                </motion.div>
              ))}

              {/* Textarea spanning all columns */}
              <motion.div
                ref={formRef}
                initial="hidden"
                animate={formInView ? 'visible' : 'hidden'}
                variants={sectionVariants}
                className="col-span-1 md:col-span-3 flex flex-col mt-4"
              >
                <label htmlFor="textarea" className="my-2 text-base">
                  الرسالة
                </label>
                <textarea
                  id="textarea"
                  className="border-b-[1px] border-[#CACACA] focus:border-main outline-none py-1 resize-none bg-primary text-base"
                  rows="4"
                ></textarea>
              </motion.div>
            </div>
            <button
              className="flex my-4 items-center gap-2 bg-main text-base sm:px-6 sm:py-3 rounded-[16px]"
              style={{
                fontWeight: '500',
                border: 'none',
                fontSize: '14px',
                padding: '16px 24px',
              }}
              onClick={togglePopup}
            >
              <span>ارسل </span>
              <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Second column (Google Maps) */}
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.751089481183!2d44.323002076303075!3d33.30152507947668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzA1LjUiTiA0NMKwMTknMzAuNyJF!5e0!3m2!1sen!2sus!4v1693494374967!5m2!1sen!2sus"
              style={{ border: 0, width: '100%', height: '350px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="object-cover rounded-lg"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>

        {/* Info Section */}
        <motion.div
          ref={infoRef}
          initial="hidden"
          animate={infoInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 p-4">
            <img
              src={personal}
              alt="Description"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex-1 p-4">
            <h2 className="text-[24px] text-base mb-2">
              مؤسس و الرئيس التنفيذي
            </h2>
            <p className="text-[27px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] font-bold text-base leading-normal">
              الدكتور معاذ هو مؤسس شركة السجال للمحاماة والاستشارات القانونية
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Section */}
      <div
        ref={backgroundRef}
        className="bg-cover bg-center relative py-20"
        style={{ backgroundImage: `url(${Contactbg})` }}
      >
        <motion.div
          initial="hidden"
          animate={backgroundInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="relative z-10 flex flex-col lg:flex-row h-full items-start lg:px-16 w-full max-w-7xl px-8 md:items-center xl:max-w-7xl xl:items-center 2xl:max-w-screen-2xl mx-auto"
        >
          {/* Fist Column: Row with 2 Columns */}
          <div className="lg:w-1/2 space-y-4 mt-8 lg:mt-0">
            {/* Headline */}
            <div className="mb-8">
              <h1 className="text-[20px] font-bold">معلومات التواصل</h1>
            </div>

            {/* Flex container for phone and email */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              {/* Phone Number */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 text-right font-semibold"
              >
                <h2 className="">رقم الهاتف</h2>
                <div className="w-[27px] h-[3px] bg-black my-5"></div>
                <p className="" style={{ direction: 'ltr' }}>
                  +9647740606806
                </p>
              </motion.div>

              {/* Email Address */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 text-right font-semibold"
              >
                <h2 className="">البريد الإلكتروني</h2>
                <div className="w-[27px] h-[3px] bg-black my-5"></div>
                <p className="" style={{ direction: 'ltr' }}>
                  info@al-sajal.com
                </p>
              </motion.div>
            </div>
          </div>

          {/* Popup Image */}
          <AnimatePresence>
            {isPopupVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <div className="relative p-6 bg-white rounded-lg">
                  <XMarkIcon
                    onClick={togglePopup}
                    className="w-6 h-6 absolute top-2 right-2 cursor-pointer"
                  />
                  <img
                    src={popimg}
                    alt="Popup "
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
