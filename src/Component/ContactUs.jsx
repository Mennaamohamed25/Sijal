import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'; // Import close icon
import Contactbg from '../images/Contact.png';
import popimg from '../images/popup.png';

const ContactUs = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Toggle popup visibility
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      {/* Main content */}
      <div className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl py-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center"
        >
          {/* First column - Text */}
          <div className="text-base">
            <h1 className="text-[32px] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[96px] font-bold mb-8 leading-normal">
              تواصل معنا فنحن هنا لمساعدتك.
            </h1>
          </div>

          {/* Second column - Social Media Icons */}
          <div className="hidden md:flex w-full md:w-1/2 p-4 text-center md:text-left flex-col items-end justify-center md:justify-end gap-4 sm:gap-8">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
              (Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-base p-3"
                >
                  <Link to="#" className="text-main text-xl">
                    <Icon />
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* First column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <label htmlFor="input1" className="mb-2 text-base">
              الاسم
            </label>
            <input
              type="text"
              id="input1"
              className="border-b-[1px] border-[#CACACA] focus:border-main outline-none py-1 bg-primary text-base"
            />
          </motion.div>

          {/* Second column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <label htmlFor="input2" className="mb-2 text-base">
              رقم الهاتف
            </label>
            <input
              type="text"
              id="input2"
              className="border-b-[1px] border-[#CACACA] focus:border-main outline-none py-1 bg-primary text-base"
            />
          </motion.div>

          {/* Third column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <label htmlFor="input3" className="mb-2 text-base">
              البريد الإلكتروني
            </label>
            <input
              type="text"
              id="input3"
              className="border-b-[1px] border-[#CACACA] focus:border-main outline-none py-1 bg-primary text-base"
            />
          </motion.div>

          {/* Textarea spanning all columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4"
        >
          <button
            className="flex my-4 items-center gap-2 bg-main text-base sm:px-6 sm:py-3"
            style={{
              fontWeight: '500',
              border: 'none',
              fontSize: '14px',
              smFontSize: '16px',
              padding: '16px 24px',
            }}
            onClick={togglePopup}
          >
            <span>ارسل </span>
            <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </div>

      {/* Background Section */}
      <div
        className="bg-cover bg-center relative py-20"
        style={{ backgroundImage: `url(${Contactbg})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col lg:flex-row h-full items-center justify-center px-4 lg:px-16"
        >
          {/* First Column: Text */}
          <div className="lg:w-1/2 text-white space-y-4">
            <h1 className="text-[#000] text-[24px]">معلومات</h1>
            <p className="text-[32px] text-[#000] sm:text-[32px] md:text-[48px] lg:text-[64px] xl:text-[52px] font-bold mb-8 leading-normal">
              نحن سعداء دائما بمساعدتك
            </p>
          </div>

          {/* Second Column: Row with 2 Columns */}
          <div className="lg:w-1/2 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-8 lg:mt-0">
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 font-semibold"
            >
              <h2 className="">البريد الإلكتروني</h2>
              <div className="w-[27px] h-[3px] bg-black my-5"></div>
              <p className="">info@sijal.net</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {isPopupVisible && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative bg-white p-8 rounded-md max-w-[90%] md:max-w-[600px] text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close icon */}
              <button
                onClick={togglePopup}
                className="absolute top-2 left-2 text-main"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <img
                src={popimg}
                alt="Popup"
                className="mb-4 w-full h-auto object-contain"
              />

              <p className="text-[32px] font-bold mb-4">شكرًا لك!</p>
              <p className="mb-4">لقد تم ارسال رسالتك</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactUs;
