'use client';

import { TsParticles } from '@/components/molecules/TsParticles';
import { TopPage } from '@/components/organisms/top/TopPage';

const Top = (): JSX.Element => {
  return (
    <>
      <TsParticles />
      <TopPage />
    </>
  );
};

export default Top;
