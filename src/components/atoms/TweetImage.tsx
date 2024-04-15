import Image from 'next/legacy/image';
import React from 'react';

// prop types
type TweetImageProps = {
  url: string;
  src: string;
  alt: string;
};

export const TweetImage: React.FC<TweetImageProps> = ({ url, src, alt }) => (
  <a href={url} className="tweet-image flex w-3/6 flex-wrap items-center rounded-md">
    <Image
      loader={({ src }) => {
        return src + '?w=176';
      }}
      className="image-with-alt"
      src={src}
      width={176}
      height={102}
      alt={alt}
    />
  </a>
);
