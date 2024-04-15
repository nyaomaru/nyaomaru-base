'use client';

import Container from '@/components/layout/Container';
import Layout from '@/components/layout/Layout';
import { TsParticles } from '@/components/molecules/TsParticles';
import {
  SectionFv,
  SectionPlan,
  SectionPoint,
  SectionPoint7,
  SectionReview,
  SectionWorks,
} from '@/components/organisms/top';

const Home = (): JSX.Element => {
  return (
    <Layout path="/" title="Nyaomaru" noTitleTemplate={true} isTopPage={true}>
      <TsParticles />
      <Container>
        <SectionFv />
        <SectionReview />
        <SectionPoint />
        <SectionWorks />
        <SectionPoint7 />
        <SectionPlan />
      </Container>
    </Layout>
  );
};

export default Home;
