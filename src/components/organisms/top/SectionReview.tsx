import React from 'react';

import { SectionTitle } from '@/components/atoms/SectionTitle';
import { ReviewCard } from '@/components/molecules/ReviewCard';
import { ReviewModal } from '@/components/molecules/ReviewModal';
import { reviewsList } from '@/domain/top/review';

export type ReviewInfo = {
  title: string;
  message: string;
  main: string;
  sub: string;
  clientImage: string;
  tag: string;
  modalImageLogo: string;
  modalImageLogoText: string;
  modalImageSecond: string;
  modalImageSecondText: string;
};

export type ReviewState = {
  color: string;
  fadein: string;
};

export const SectionReview = () => {
  return (
    <section className="review nebura02 relative mb-[167px]">
      <div id="review-link" className="scroll-blank"></div>
      <div className="title-conatiner mb-4">
        <SectionTitle title="Voice" englishTitle="Review"></SectionTitle>
      </div>
      <div className="container flex flex-wrap justify-end md:justify-between">
        {reviewsList.map(
          ({
            title,
            message,
            main,
            sub,
            clientImage,
            tag,
            modalImageLogo,
            modalImageLogoText,
            modalImageSecond,
            modalImageSecondText,
          }) => (
            <div className="card relative mb-8 w-[380px] rounded-md md:w-[320px]" key={title}>
              <ReviewCard
                title={title}
                message={message}
                main={main}
                sub={sub}
                clientImage={clientImage}
                tag={tag}
              ></ReviewCard>
              <div className="w-full text-right">
                <ReviewModal
                  title={title}
                  message={message}
                  main={main}
                  sub={sub}
                  clientImage={clientImage}
                  tag={tag}
                  modalImageLogo={modalImageLogo}
                  modalImageLogoText={modalImageLogoText}
                  modalImageSecond={modalImageSecond}
                  modalImageSecondText={modalImageSecondText}
                ></ReviewModal>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
