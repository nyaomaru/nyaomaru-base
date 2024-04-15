import Link from 'next/link';
import React from 'react';

// prop types
type SecondaryLinkButtonProps = {
  buttonName: string;
  buttonLink: string;
};

export const SecondaryLinkButton: React.FC<SecondaryLinkButtonProps> = ({
  buttonName,
  buttonLink,
}: SecondaryLinkButtonProps) => {
  return (
    <div className="secondary-link-button block rounded-md bg-[#2EE14B]">
      <Link href={buttonLink} passHref>
        <span className="p-3">{buttonName}</span>
      </Link>
    </div>
  );
};
