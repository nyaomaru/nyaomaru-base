'use client';

import Container from '@/components/layout/Container';
import Layout from '@/components/layout/Layout';
import { PrivacyPolicy } from '@/components/organisms/common/PrivacyPolicy';

const Privacy = (): JSX.Element => {
  return (
    <Layout path="/privacy-policy" title="Nyaomaru" noTitleTemplate={true} isTopPage={true}>
      <Container>
        <PrivacyPolicy />
      </Container>
    </Layout>
  );
};

export default Privacy;
