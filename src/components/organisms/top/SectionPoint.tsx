import { useEffect, useState } from 'react';

import { SectionTitle } from '@/components/atoms/SectionTitle';
import { FeaturesArea } from '@/components/molecules/FeaturesArea';
import { siteFeaturesList } from '@/domain/top/point';
import { fadeInSetting } from '@/lib/fade-in';

export const SectionPoint = () => {
  const [fadein, setFadein] = useState<string>('fadein-before');

  useEffect(() => {
    const listenEvent = fadeInSetting('siteFeature', setFadein);

    window.addEventListener('scroll', listenEvent);
    return () => {
      window.removeEventListener('scroll', listenEvent);
    };
  }, []);

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
        <div id="siteFeature" className={fadein}>
          <SectionTitle title="Feature" englishTitle="Point" />
        </div>
      </div>
      <div className="container">
        <div className="num">{featuresAreaComponent}</div>
      </div>
    </section>
  );
};
