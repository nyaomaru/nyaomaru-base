import Image from 'next/legacy/image';
import React from 'react';

export type FeaturesAreaProps = {
  sectionType: 'right' | 'left';
  imageSrc: string;
  sectionTitle: string;
  sectionText: string;
};

export const FeaturesArea: React.FC<FeaturesAreaProps> = ({
  sectionType,
  imageSrc,
  sectionTitle,
  sectionText,
}: FeaturesAreaProps) => {
  const imageAreaClassName = `md:flex-1 ${sectionType === 'left' ? 'md:order-1' : 'md:order-2'}`;
  const sectionClassName = `md:flex-1 md:p-7 ${sectionType === 'left' ? '' : 'md:order-2'}`;

  return (
    <div className="mb-4 flex flex-wrap items-center">
      <div className={imageAreaClassName}>
        <div className="image-container">
          <Image
            loader={({ src }) => {
              return src + '?w=648';
            }}
            src={imageSrc}
            width={648}
            height={455}
            alt="section image"
            className="image-with-alt rounded-lg"
          />
        </div>
      </div>
      <div className={sectionClassName}>
        <h3 className="section-title relative mb-2 inline-block text-2xl font-semibold text-primary-light md:text-4xl">
          <span className="gradient-text">{sectionTitle}</span>
        </h3>
        <p className="text-sm leading-[31px] text-primary-light">{sectionText}</p>
      </div>
    </div>
  );
};
