import React from 'react';
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

      desc: (
        <>
          <p>
            قضايا العقود: نساعد في صياغة العقود وتقديم الاستشارات القانونية فيما
            يتعلق بالنزاعات العقدية، سواء كانت عقود بيع أو إيجار أو عقود عمل.
          </p>
          <br />
          <p>
            التعويضات: نقدم الدعم في القضايا المتعلقة بالتعويضات عن الأضرار
            المادية والمعنوية، سواء كانت بسبب الحوادث أو الإهمال.
          </p>
        </>
      ),
    },
    {
      id: 2,
      image: serviceTwo,
      title: 'قانون الاحوال الشخصية',
      desc: (
        <>
          <p>
            قضايا الطلاق: نوفر التوجيه القانوني والدعم في إجراءات الطلاق والحقوق
            المتعلقة بالزواج.
          </p>
          <br />
          <p>
            الحضانة والنفقة: نعمل على ضمان حقوق الأطفال من خلال تقديم الاستشارات
            القانونية في قضايا الحضانة والنفقة بما يتماشى مع القوانين العراقية.
          </p>
          <br />
          <p>
            العقود الزوجية: نصيغ العقود الزوجية مثل عقد الزواج والاتفاقيات
            المالية بين الزوجين، لضمان حماية حقوق الأطراف.
          </p>
        </>
      ),
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
      desc: (
        <>
          <p>
            تأسيس الشركات: نساعد في إجراءات تأسيس الشركات وفقًا للقوانين
            العراقية، سواء كانت شركات محلية أو استثمارات أجنبية.
          </p>
          <br />
          <p>
            العقود التجارية: نوفر استشارات قانونية في صياغة ومراجعة العقود
            التجارية لضمان حماية مصالح العملاء.
          </p>
          <br />
          <p>
            التقاضي التجاري: نمثل الشركات في النزاعات التجارية سواء في المحاكم
            العراقية أو من خلال الوساطة والتحكيم.
          </p>
        </>
      ),
    },
    {
      id: 5,
      image: serviceFive,
      title: 'قانون العقارات',
      desc: (
        <>
          <p>
            إجراءات شراء وبيع العقارات: نقدم الدعم القانوني الكامل في إجراءات
            شراء وبيع العقارات، بما في ذلك صياغة العقود والتفاوض نيابة عن
            العميل.
          </p>
          <br />
          <p>
            النزاعات العقارية: نساعد في حل النزاعات المتعلقة بملكية العقارات أو
            مشاكل الإيجار.
          </p>
          <br />
          <p>
            الاستشارات العقارية: نوفر استشارات قانونية لضمان الامتثال لجميع
            اللوائح المتعلقة بالاستثمارات العقارية.
          </p>
        </>
      ),
    },
    {
      id: 6,
      image: serviceSix,
      title: 'قانون العمل',
      desc: (
        <>
          <p>قضايا العمالة: نقدم الدعم القانوني لأصحاب العمل والموظفين في</p>
          <br />
          <p>
            {' '}
            النزاعات المتعلقة بالعقود العمالية، والفصل التعسفي، وحقوق الموظفين.
            الاستشارات القانونية لأصحاب العمل: نوفر استشارات قانونية لأصحاب
            الشركات حول كيفية الامتثال لقوانين العمل العراقية وتجنب
            النزاعات.وكذلك توفير الايدي العاملة المناسبة للشركات .
          </p>
        </>
      ),
    },
    {
      id: 7,
      image: serviceSeven,
      title: 'القانون الإداري',
      desc: (
        <>
          <p>
            الاستشارات القانونية الحكومية: نقدم خدمات قانونية متخصصة في القضايا
            المتعلقة بالمؤسسات الحكومية والإدارية.
          </p>
          <br />
          <p>
            {' '}
            الطعون الإدارية: نوفر الدعم في الطعون المقدمة ضد القرارات الإدارية،
            سواء كانت تتعلق بالتوظيف أو التراخيص أو الإجراءات الحكومية.
          </p>
        </>
      ),
    },
    {
      id: 8,
      image: serviceEight,
      title: 'قانون الاقامة والجوازات',
      desc: 'نقوم باجراءات اصدار التأشيرات لكافة الاجانب الذين يرغبون في العمل لدى الشركات في جمهورية العراق واصدار الإقامة الدائمة.',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="my-4 text-start">
        <h1 className="text-main text-[32px] sm:text-[40px] font-semibold">
          الخدمات
        </h1>
        <p className="text-base text-gray-600 opacity-70 mt-4">
          نتمتع بأكثر من ثلاثة عقود من الخبرة كمحامي للمحاكمات.
        </p>
      </div>

      {/* Responsive Grid for Services */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div className="relative group overflow-hidden rounded-[16px]">
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto object-cover rounded-[16px]"
            />

            {/* Description (appears fully on hover) */}
            <p className="text-[12px] absolute inset-0 bg-black bg-opacity-70 text-base text-white p-4 flex flex-col justify-center hidden sm:flex opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out leading-relaxed">
              {service.desc}
            </p>

            {/* Title fixed at the bottom initially and moves to the top on hover */}
            <h2 className="p-4 text-center absolute bottom-0 left-0 right-0 text-base text-lg sm:text-xl font-bold py-2 transition-transform duration-500 ease-in-out transform group-hover:translate-y-0 group-hover:top-0 group-hover:bottom-auto hidden sm:block md:group-hover:translate-y-0 md:group-hover:top-0 sm:group-hover:bottom-auto">
              {service.title}
            </h2>
            <h2 className="p-4 text-center block absolute bottom-0 left-0 right-0 text-base text-lg sm:text-xl font-bold py-2 md:hidden lg:hidden">
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
