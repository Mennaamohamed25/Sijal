import React from 'react';
import { ReactComponent as LogoSVG } from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#262626] my-8 py-8 text-center">
      <div className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl ">
        <Link to="/" className="flex justify-center items-center mb-4">
          <LogoSVG
            className="md:h-auto sm:h-8 xsmall:h-8 w-auto "
            alt="Your Company"
          />
        </Link>
        <p className="text-base leading-normal">
          نحن نفخر بتقديم خدمات قانونية متكاملة تلبي احتياجات الأفراد والشركات
          على حد سواء. بفضل فريقنا المتميز من المحامين ذوي الخبرة والكفاءة، نسعى
          لتحقيق أفضل النتائج لعملائنا، سواء كانوا بحاجة إلى استشارات قانونية،
          تمثيل قضائي، أو حل النزاعات. نحن ملتزمون بالشفافية والنزاهة في جميع
          تعاملاتنا، ونعمل جاهدين لضمان حماية حقوق عملائنا والدفاع عن مصالحهم
          بأعلى معايير المهنية.
        </p>

        <div className="flex flex-row items-center justify-center gap-4 p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full p-3 bg-main">
              {' '}
              <PhoneIcon className="h-6 w-6 text-base" />
            </div>
            <div className="text-right mr-4 text-base">
              <p className="opacity-40">رقم الهاتف</p>
              <p className="ml-2 text-lg" style={{ direction: 'ltr' }}>
                +9647740606806
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full p-3 bg-main">
              {' '}
              <EnvelopeIcon className="h-6 w-6 text-base" />
            </div>
            <div className="text-right mr-4 text-base">
              <p className="opacity-40">تواصل معنا</p>
              <p className="ml-2 text-lg">info@sijal.net</p>
            </div>
          </div>
        </div>
        <hr className="my-8 w-full border-gray-600 mx-auto max-w-7xl" />
        <div className="flex flex-row items-center justify-center gap-4 p-4 text-base">
          <div className="flex items-center">
            <Link to="/">تواصل معانا</Link>
          </div>
          <div className="flex items-center">
            <Link>الرائسية</Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full md:w-1/2 p-4 text-center md:text-right">
          <p className="text-sm text-base">ساجال © 2024. جميع الحقوق محفوظة.</p>
        </div>
        <div className="w-full md:w-1/2 p-4 text-center md:text-left flex justify-center md:justify-end gap-4 sm:gap-8">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
            (Icon, index) => (
              <Link
                key={index}
                to="#"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-base p-3"
              >
                <Icon className="text-main text-xl" />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;