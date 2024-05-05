import { useState } from 'react';

import { SectionTitle } from '@/components/atoms/SectionTitle';
import { FeaturesArea } from '@/components/molecules/FeaturesArea';
import { siteFeaturesList } from '@/domain/top/point';
import { useFadeIn } from '@/hooks/useFadeIn';

export const SectionPoint = () => {
  const [fadeIn, setFadeIn] = useState<string>('fadeIn-before');

  useFadeIn('siteFeature', setFadeIn);

  const featuresAreaComponent = siteFeaturesList.map(feature => (
    <FeaturesArea
      key={feature.imageSrc}
      sectionType={feature.sectionType}
      imageSrc={feature.imageSrc}
      sectionTitle={feature.sectionTitle}
      sectionText={feature.sectionText}
    />
  ));

  return (
    <section className="point relative mb-[219px]">
      <div id="points" className="scroll-blank"></div>
      <div className="title-conatiner mb-4">
        <div id="siteFeature" className={fadeIn}>
          <SectionTitle title="Feature" englishTitle="Point" />
        </div>
      </div>
      <div className="container">
        <div className="num">{featuresAreaComponent}</div>
      </div>
    </section>
  );
};
