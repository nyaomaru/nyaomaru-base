import Image from 'next/legacy/image';
import React from 'react';

import { Features } from '@/types/custom';

type FeaturesCardProps = Features;

export const FeaturesCard: React.FC<FeaturesCardProps> = ({
  imageSrc,
  featureTitle,
  featureText,
}: FeaturesCardProps) => {
  return (
    <div className="features-card grid grid-cols-3 p-6">
      <div className="image-container col-span-1 mr-2">
        <Image
          loader={({ src }) => {
            return src + '?w=137';
          }}
          src={imageSrc}
          width={137}
          height={137}
          alt="site-image"
          className="image-with-alt rounded-full"
        />
      </div>
      <div className="features-text-container col-span-2">
        <h3 className="features-title font-semibold text-primary-light">{featureTitle}</h3>
        <p className="text-sm leading-[28px] text-primary-light">{featureText}</p>
      </div>
    </div>
  );
};
