import { useState } from 'react';

import { FeaturesCard } from '@/components/molecules/FeaturesCard';
import { featuresList } from '@/domain/top/point7';
import { useFadeIn } from '@/hooks/useFadeIn';

export const SectionPoint7 = () => {
  const [fadeIn, setFadeIn] = useState<string>('fadeIn-before');

  useFadeIn('setFadeIn', setFadeIn);

  const featuresCardComponent = featuresList.map(feature => (
    <div className="mb-8 w-full rounded-lg bg-primary-medium lg:w-[48%]" key={feature.imageSrc}>
      <FeaturesCard
        imageSrc={feature.imageSrc}
        featureTitle={feature.featureTitle}
        featureText={feature.featureText}
      />
    </div>
  ));

  return (
    <section className="point7 relative">
      <div id="flow" className="scroll-blank"></div>
      <div className="title-conatiner mb-4 text-center">
        <div id="siteFeatures" className={fadeIn}>
          <h2 className="blah-light text-[28px] font-semibold text-primary-light">
            <span className=" relative">
              Nyaomaru can help you with scratching.
              <br />
              Scratch development.
            </span>
            <span className="gradient-text relative mb-2 inline-block text-2xl font-semibold text-primary-light md:text-4xl">
              Seven Features
            </span>
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="num">
          <div className="mb-4 flex flex-wrap items-start justify-between">
            {featuresCardComponent}
          </div>
        </div>
      </div>
    </section>
  );
};
