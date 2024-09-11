import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import the autoplay CSS
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import serviceOne from '../images/s1.png';
import serviceTwo from '../images/s2.png';
import serviceThree from '../images/s3.png';
import serviceFour from '../images/s4.png';
import serviceFive from '../images/s5.png';
import serviceSix from '../images/s6.png';
import serviceSeven from '../images/s7.png';
import serviceEight from '../images/s8.png';

const Services = () => {
  const services = [
    {
      id: 1,
      image: serviceOne,
      title: 'القانون المدني',
      desc: 'قضايا العقود: نساعد في صياغة العقود وتقديم الاستشارات القانونية فيما يتعلق بالنزاعات العقدية، سواء كانت عقود بيع أو إيجار أو عقود عمل. التعويضات: نقدم الدعم في القضايا المتعلقة بالتعويضات عن الأضرار المادية والمعنوية، سواء كانت بسبب الحوادث أو الإهمال.',
      descr:
        'قضايا العقود: نساعد في صياغة العقود وتقديم الاستشارات القانونية فيما يتعلق بالنزاعات العقدية، سواء كانت عقود بيع أو إيجار أو عقود عمل. التعويضات: نقدم الدعم في القضايا المتعلقة بالتعويضات عن الأضرار المادية والمعنوية، سواء كانت بسبب الحوادث أو الإهمال.',
    },
    {
      id: 2,
      image: serviceTwo,
      title: 'قانون الاحوال الشخصية',
      desc: 'قضايا الطلاق: نوفر التوجيه القانوني والدعم في إجراءات الطلاق والحقوق المتعلقة بالزواج. الحضانة والنفقة: نعمل على ضمان حقوق الأطفال من خلال تقديم الاستشارات القانونية في قضايا الحضانة والنفقة بما يتماشى مع القوانين العراقية. العقود الزوجية: نصيغ العقود الزوجية مثل عقد الزواج والاتفاقيات المالية بين الزوجين، لضمان حماية حقوق الأطراف.',
      descr:
        'قضايا الطلاق: نوفر التوجيه القانوني والدعم في إجراءات الطلاق والحقوق المتعلقة بالزواج. الحضانة والنفقة: نعمل على ضمان حقوق الأطفال من خلال تقديم الاستشارات القانونية في قضايا الحضانة والنفقة.',
    },
    {
      id: 3,
      image: serviceThree,
      title: 'القانون الجنائي',
      desc: 'الدفاع الجنائي: نقدم خدمات الدفاع عن المتهمين في كافة القضايا الجنائية والارهابية وجرائم غسيل الاموال وجرائم الفساد الاداري والمالي وغيرها .',
    },
    {
      id: 4,
      image: serviceFour,
      title: 'القانون التجاري',
      desc: 'تأسيس الشركات: نساعد في إجراءات تأسيس الشركات وفقًا للقوانين العراقية، سواء كانت شركات محلية أو استثمارات أجنبية. العقود التجارية: نوفر استشارات قانونية في صياغة ومراجعة العقود التجارية لضمان حماية مصالح العملاء. التقاضي التجاري: نمثل الشركات في النزاعات التجارية سواء في المحاكم العراقية أو من خلال الوساطة والتحكيم.',
      descr:
        'تأسيس الشركات: نساعد في إجراءات تأسيس الشركات وفقًا للقوانين العراقية، سواء كانت شركات محلية أو استثمارات أجنبية. العقود التجارية: نوفر استشارات قانونية في صياغة ومراجعة العقود التجارية .',
    },
    {
      id: 5,
      image: serviceFive,
      title: 'قانون العقارات',
      desc: 'إجراءات شراء وبيع العقارات: نقدم الدعم القانوني الكامل في إجراءات شراء وبيع العقارات، بما في ذلك صياغة العقود والتفاوض نيابة عن العميل. النزاعات العقارية: نساعد في حل النزاعات المتعلقة بملكية العقارات أو مشاكل الإيجار. الاستشارات العقارية: نوفر استشارات قانونية لضمان الامتثال لجميع اللوائح المتعلقة بالاستثمارات العقارية.',
    },
    {
      id: 6,
      image: serviceSix,
      title: 'قانون العمل',
      desc: 'قضايا العمالة: نقدم الدعم القانوني لأصحاب العمل والموظفين في النزاعات المتعلقة بالعقود العمالية، والفصل التعسفي، وحقوق الموظفين. الاستشارات القانونية لأصحاب العمل: نوفر استشارات قانونية لأصحاب الشركات حول كيفية الامتثال لقوانين العمل العراقية وتجنب النزاعات.وكذلك توفير الايدي العاملة المناسبة للشركات .',
    },
    {
      id: 7,
      image: serviceSeven,
      title: 'القانون الإداري',
      desc: 'الاستشارات القانونية الحكومية: نقدم خدمات قانونية متخصصة في القضايا المتعلقة بالمؤسسات الحكومية والإدارية. الطعون الإدارية: نوفر الدعم في الطعون المقدمة ضد القرارات الإدارية، سواء كانت تتعلق بالتوظيف أو التراخيص أو الإجراءات الحكومية.',
    },
    {
      id: 8,
      image: serviceEight,
      title: 'قانون الاقامة والجوازات',
      desc: 'نقوم باجراءات اصدار التأشيرات لكافة الاجانب الذين يرغبون في العمل لدى الشركات في جمهورية العراق واصدار الإقامة الدائمة.',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl">
      <div className="my-8">
        <h1 className="text-main text-[40px] font-semibold ">الخدمات</h1>
        <p className="text-base opacity-40 mt-4">
          نتمتع بأكثر من ثلاثة عقود من الخبرة كمحامي للمحاكمات.
        </p>
      </div>
      <Swiper
        modules={[Autoplay]} // Use Autoplay as a module here
        spaceBetween={16} // Spacing between slides
        slidesPerView={4.5} // Show 4 full columns and half of a fifth column
        loop={true} // Enable continuous loop
        speed={1000} // Set smooth transition speed (1000ms)
        breakpoints={{
          320: {
            // Extra small screens
            slidesPerView: 1.5, // Show 1.5 slides
            spaceBetween: 8,
          },
          640: {
            // Small screens
            slidesPerView: 1.5, // Show 1.5 slides
            spaceBetween: 10,
          },
          768: {
            // Medium screens
            slidesPerView: 2.5, // Show 2.5 slides
            spaceBetween: 15,
          },
          1024: {
            // Large screens and above
            slidesPerView: 4.5, // Show 4.5 slides
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3000, // Set autoplay delay to 3 seconds
          disableOnInteraction: false, // Auto-slide even after user interaction
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="relative group text-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto"
              />
              {/* Smooth hover overlay with bottom-to-top animation */}
              <div className="absolute text-start inset-0 bg-black bg-opacity-60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <p className="text-base  font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  {service.title}
                </p>
                <p className="text-base my-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  {service.desc}
                </p>
                <p className="text-base  text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  {service.descr}
                </p>
              
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
