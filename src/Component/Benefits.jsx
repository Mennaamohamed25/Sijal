import React from 'react';
import iconeOne from '../images/law.png';
import iconeTwo from '../images/business-analysis.png';
import iconeThree from '../images/bar-chart.png';

const columnContent = [
  {
    id: 1,
    image: iconeOne,
    title: 'نعمل على أساس رسوم الطوارئ ',
    text: 'أنت بحاجة إلى الأرض الآن، والآن أنت بحاجة إلى الأرض لتطوير البحيرة. الانتقام',
  },
  {
    id: 2,
    image: iconeTwo,
    title: 'الأحكام والأحكام عالية الدولار',
    text: 'أنت بحاجة إلى الأرض الآن، والآن أنت بحاجة إلى الأرض لتطوير البحيرة. الانتقام',
  },
  {
    id: 3,
    image: iconeThree,
    title: 'أكثر من 30 عاما من الخبرة',
    text: 'أنت بحاجة إلى الأرض الآن، والآن أنت بحاجة إلى الأرض لتطوير البحيرة. الانتقام',
  },
];

const Benefits = () => {
  return (
    <div className="bg-secondery my-8 py-8">
      <div className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl">
        <div className="text-center my-8">
          <h1 className="text-base font-semibold" style={{ fontSize: '40px' }}>
            الخدمات
          </h1>
          <p className="text-base opacity-40 mt-4">
            نتمتع بأكثر من ثلاثة عقود من الخبرة كمحامي للمحاكمات.
          </p>
        </div>
        <div className="menna grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {columnContent.map((item) => (
            <div key={item.id} className="bg-cards p-4 rounded-sm shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className=" mb-4"
              />
              <h2 className="text-lg font-semibold text-base">{item.title}</h2>
              <p className="mt-2 text-base opacity-40">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
