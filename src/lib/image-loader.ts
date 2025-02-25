'use client';

export const imageLoader = ({ src, width = 120 }: { src: string; width?: number }) => {
  return `${src}?w=${width}`;
};
