import React from 'react';
import iconeOne from '../images/law.png';
import iconeTwo from '../images/business-analysis.png';
import iconeThree from '../images/bar-chart.png';


const columnContent = [
  {
    id: 1,
    image: iconeOne,
    title: 'نتائج قانونية قوية مع أحكام عالية الجودة',
    text: 'من خلال استراتيجيات قانونية متقدمة وخبرتنا في المحاكم، نحقق نتائج متميزة لعملائنا، مع الحصول على أحكام لصالحهم في قضايا هامة وقضايا ذات القيمة المالية العالية.',
  },
  {
    id: 2,
    image: iconeTwo,
    title: 'نظام رسوم مرن ومستند إلى الأداء',
    text: 'نحن نعمل على أساس رسوم مرنة تأخذ بعين الاعتبار النتائج التي نحققها، مما يعني أنك تدفع بناءً على الأداء والنتائج التي نضمن تحقيقها لصالحك. الانتقام',
  },
  {
    id: 3,
    image: iconeThree,
    title: 'أخبرة قانونية تتجاوز العقدين ',
    text: 'نتمتع بأكثر من ٢٠ عامًا من الخبرة في مختلف المجالات القانونية، مما يضمن لك أعلى مستويات الاحترافية والمعرفة المتعمقة في التعامل مع القضايا المعقدة.',
  },
];

const Benefits = () => {
  return (
    <div className="bg-secondery my-8 py-8">
      <div className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl">
        <div className="text-center my-8">
          <h1 className="text-main text-[32px] sm:text-[40px] font-semibold">
            ميزات التعامل مع شركتنا{' '}
          </h1>
         
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {columnContent.map((item) => (
            <div key={item.id} className="bg-cards p-4 rounded-sm shadow-md">
              <img src={item.image} alt={item.title} className=" mb-4" />
              <h2 className="text-[24px] font-semibold text-base">{item.title}</h2>
              <p className="mt-2 text-base opacity-40 text-[14px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
