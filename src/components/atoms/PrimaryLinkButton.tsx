import Link from 'next/link';
import React from 'react';

// prop types
type PrimaryLinkButtonProps = {
  buttonName: string;
  buttonLink: string;
};

export const PrimaryLinkButton: React.FC<PrimaryLinkButtonProps> = ({
  buttonName,
  buttonLink,
}: PrimaryLinkButtonProps) => {
  return (
    <div className="primary-link-button block rounded-md bg-gradient-to-r from-[#60C1C9] to-[#2A62C7]">
      <Link href={buttonLink} passHref>
        <span className="p-3">{buttonName}</span>
      </Link>
    </div>
  );
};
