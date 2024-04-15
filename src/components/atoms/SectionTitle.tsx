import React from 'react';

// prop types
type SectionTitleProps = {
  title: string;
  englishTitle: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  englishTitle,
}: SectionTitleProps) => {
  return (
    <h2
      className="text-[2rem] font-semibold text-primary-light after:block after:font-en after:text-sm after:font-normal after:tracking-[.5345em] after:text-accent-light after:content-[attr(data-jp)]"
      data-jp={title}
    >
      <span className="relative before:absolute before:top-[5px] before:inline-block before:size-full before:content-heading-stroke">
        {englishTitle}
      </span>
    </h2>
  );
};
