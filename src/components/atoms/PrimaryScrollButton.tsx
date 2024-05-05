import React from 'react';
import { Link } from 'react-scroll';

type PrimaryScrollButtonProps = {
  buttonName: string;
  scrollTo: string;
};

export const PrimaryScrollButton: React.FC<PrimaryScrollButtonProps> = ({
  buttonName,
  scrollTo,
}: PrimaryScrollButtonProps) => {
  return (
    <div className="primary-scroll-button rounded-md bg-gradient-to-r from-[#60C1C9] to-[#2A62C7]">
      <Link to={scrollTo} smooth={true} className="p-3 ">
        <span className="p-3">{buttonName}</span>
      </Link>
    </div>
  );
};
