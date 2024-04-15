import Image from 'next/legacy/image';

import { PrimaryScrollButton } from '@/components/atoms/PrimaryScrollButton';

export const SectionFv = () => {
  return (
    <section className="fv nebura relative pt-10 md:pt-24">
      <div className="relative z-20 my-10 flex flex-wrap items-center">
        <div className="order-1 lg:w-1/2">
          <h1 className="text-[2rem] font-semibold text-primary-light">
            <span className="block text-sm font-normal">Nyaomaru business service</span>
            <span className="relative before:absolute before:top-[-20px] before:inline-block before:size-full before:content-story-stroke">
              We are just cat!
            </span>
            <br className="hidden md:inline-block" />
            <span className="relative before:absolute before:top-[-8px] before:inline-block before:size-full before:content-heading-stroke">
              human being!
            </span>
          </h1>
          <span className="block w-3/5 font-en text-base font-thin tracking-[.2145em] text-primary-light md:w-full">
            DESIGN THE STORY OF THE FUTURE.
          </span>
          <div className="mt-5 text-center md:text-left">
            <PrimaryScrollButton buttonName="Consult" scrollTo="plan-link" />
          </div>
        </div>
        <div className="w-full lg:order-1 lg:w-1/2">
          <Image
            loader={({ src }) => {
              return src + '?w=648';
            }}
            src="/images/fv.png"
            width={400}
            height={400}
            priority
            alt="site-image"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};
