import React from 'react';

import { CommentArea } from '@/components/atoms/CommentArea';
import { ImageWithAlt } from '@/components/atoms/ImageWithAlt';
import { RoundTag } from '@/components/atoms/RoundTag';
import { ReviewInfo } from '@/components/organisms/top/SectionReview';

type ReviewCardProps = Pick<
  ReviewInfo,
  'title' | 'message' | 'main' | 'sub' | 'clientImage' | 'tag'
>;

export const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  message,
  main,
  sub,
  clientImage,
  tag,
}: ReviewCardProps) => {
  return (
    <div className="card-inner mb-4 ml-auto w-[275px] rounded-xl bg-white px-4 py-[20px]">
      <div className="tag-container mb-[24px]">
        <RoundTag tagName={tag} />
      </div>
      <div className="logo-container mb-[22px] flex items-center justify-between">
        <ImageWithAlt src={main} width={100} height={60} alt="site-image-main" />
        <ImageWithAlt src={sub} width={120} height={70} alt="site-image-sub" />
      </div>
      <div className="filter-shadow client-image-container mb-[11vh] ml-auto size-[116px]">
        <ImageWithAlt
          src={clientImage}
          width={116}
          height={116}
          alt="site-image-client"
          className="rounded-full"
        />
      </div>
      <div className="text-container absolute left-0 top-[60%]">
        <div className="mb-3 inline-block">
          <CommentArea comment={title} />
        </div>
        <CommentArea comment={message} />
      </div>
    </div>
  );
};
