import Image from 'next/legacy/image';
import React from 'react';

type ImageWithAltProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export const ImageWithAlt: React.FC<ImageWithAltProps> = ({
  src,
  alt,
  width = 0,
  height = 0,
  className,
}) => (
  <div className={className}>
    {width === 0 && height === 0 ? (
      <Image
        loader={({ src }) => {
          return src + '?w=' + width;
        }}
        className="image-with-alt"
        src={src}
        alt={alt}
        layout="fill"
      />
    ) : (
      <Image
        loader={({ src }) => {
          return src + '?w=' + width;
        }}
        className="image-with-alt"
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    )}
  </div>
);
