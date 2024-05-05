import Image from 'next/legacy/image';
import Link from 'next/link';
import { useState } from 'react';

import { PrimaryLinkButton } from '@/components/atoms/PrimaryLinkButton';
import { SecondaryLinkButton } from '@/components/atoms/SecondaryLinkButton';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { useFadeIn } from '@/hooks/useFadeIn';

export const SectionPlan = () => {
  const [fadeIn, setFadeIn] = useState<string>('fadeIn-before');

  useFadeIn('sitePlan', setFadeIn);

  return (
    <section className="relative mb-[80px]">
      <div id="plan-link" className="scroll-blank"></div>
      <div className="title-conatiner container mb-4">
        <div id="sitePlan" className={fadeIn}>
          <SectionTitle title="Production Plans" englishTitle="Plan" />
        </div>
      </div>
      <div className="container flex flex-wrap justify-between">
        <div className="plan-card gradient-border mb-5 rounded-lg p-3 md:w-[48%]">
          <div className="plan-card-inner rounded-lg bg-primary-light p-3">
            <div className="title-container">
              <h3 className="gradient-text text-xl font-semibold">Branding plan</h3>
            </div>
            <div className="image-container">
              <Image
                loader={({ src }) => {
                  return src + '?w=980';
                }}
                src="/images/branding-image.png"
                width={980}
                height={420}
                alt="branding-image"
                className="rounded-lg"
                layout="responsive"
              />
            </div>
            <div className="text-container">
              <h4>
                <span className="gradient-text block font-en text-xs font-semibold">Price</span>
                <span className="gradient-text mr-4 font-en text-[26px] font-bold">Ask</span>
                <span className="gradient-text font-bold">Estimate required</span>
              </h4>
              <p className="text-sm leading-[28px] text-primary-medium">
                We will propose a VI that will lead to branding by verbalizing the mission, vision,
                and values that form the core of your company CI.
              </p>
              <p className="text-sm leading-[28px] text-primary-medium">
                【Examples】
                <br />
                Cat food
                <br />
                Cat tower
                <br />
                Cat dresser
                <br />
                Cat tents...etc
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[48%]">
          <div className="option-card mb-5 rounded-lg bg-primary-medium p-4">
            <div className="title-container text-center">
              <h3 className="gradient-text font-en text-[26px] font-bold">+Option</h3>
            </div>
            <p className="text-primary-light">Nyaomaru is the most comfortable cat.</p>
          </div>
          <div className="option-card mb-12 rounded-lg bg-primary-medium p-4">
            <div className="title-container">
              <h3 className="gradient-text text-[21px] font-bold">Ask me</h3>
              <p className="text-primary-light">
                You could ask me only image in your brain. If you want to ask something to me, you
                will sleep with imagination!
              </p>
            </div>
            <div>
              <div className="mt-5 w-full text-center">
                <SecondaryLinkButton
                  buttonName="Ask with LINE"
                  buttonLink="https://lin.ee/nyaomaru"
                />
              </div>
              <div className="mt-5 w-full text-center">
                <PrimaryLinkButton
                  buttonName="Ask with FORM"
                  buttonLink="https://forms.gle/nyaomaru"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sns-share mt-8 flex items-center justify-center">
        <Link href="https://twitter.com/nyaomaru/" passHref>
          <div className="twitter mr-8 size-[50px]">
            <Image
              loader={({ src }) => {
                return src + '?w=500';
              }}
              src="/images/w-twitter.svg"
              width={500}
              height={500}
              alt="twitter-image"
              className="rounded-lg"
              layout="responsive"
            />
          </div>
        </Link>
        <Link href="https://note.com/nyaomaru/" passHref>
          <div className="note size-[100px]">
            <Image
              loader={({ src }) => {
                return src + '?w=500';
              }}
              src="/images/w-note.svg"
              width={500}
              height={500}
              alt="note-image"
              className="rounded-lg"
              layout="responsive"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};
