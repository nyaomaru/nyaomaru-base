import Image from 'next/legacy/image';
import { useState } from 'react';

import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TwitterList } from '@/components/molecules/TwitterList';
import { useFadeIn } from '@/hooks/useFadeIn';

const worksImages = [
  '/images/works_logo01.png',
  '/images/works_logo02.png',
  '/images/works_logo03.png',
  '/images/works_logo04.png',
  '/images/works_logo05.png',
  '/images/works_logo06.png',
  '/images/works_logo07.png',
  '/images/works_logo08.png',
  '/images/works_logo09.png',
];

export const SectionWorks = () => {
  const [fadeIn, setFadeIn] = useState<string>('fadeIn-before');

  useFadeIn('aboutWorks', setFadeIn);

  return (
    <section className="works relative mb-[180px]">
      <div id="works-link" className="scroll-blank"></div>
      <div className="title-conatiner mb-4">
        <div id="aboutWorks" className={fadeIn}>
          <SectionTitle title="Production Achievements" englishTitle="Works"></SectionTitle>
          <p className="text-primary-light">
            We have created new features for many companies and creators.
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between after:block after:h-0 after:w-1/2 after:content-['']">
          {worksImages.map((src, index) => (
            <div key={index} className="works-image-container w-1/2 px-1 md:w-1/3">
              <Image
                loader={({ src }) => {
                  return src + '?w=374';
                }}
                src={src}
                width="374"
                height="264"
                className="image-with-alt rounded-md"
                alt={`works_logo${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="tweet-container mt-3">
          <div id="tweetSwipe" className={fadeIn}>
            <p className="text-center text-primary-light">👈 Swipe right or left 👉</p>
          </div>
          <TwitterList />
        </div>
      </div>
    </section>
  );
};
