import React from 'react';

// prop types
type RoundTagProps = {
  tagName: string;
};

export const RoundTag: React.FC<RoundTagProps> = ({ tagName }: RoundTagProps) => {
  return (
    <span className="rounded-full bg-accent-medium p-3 text-sm font-normal text-primary-light">
      {tagName}
    </span>
  );
};
