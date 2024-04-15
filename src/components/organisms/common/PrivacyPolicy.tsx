import React from 'react';

import { PrimaryLinkButton } from '@/components/atoms/PrimaryLinkButton';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { privacyPolicyList } from '@/domain/common/privacy-policy';

export const PrivacyPolicy = () => {
  const renderContent = (content: string) => {
    return content
      .split(/(\n)/)
      .map((item, index) => (
        <React.Fragment key={index}>{item.match(/\n/) ? <br /> : item}</React.Fragment>
      ));
  };

  const renderPolicyItems = () => {
    return privacyPolicyList.map(policy => (
      <div key={policy.title}>
        <div className="scroll-blank" />
        <p className="font-bold text-white">{policy.title}</p>
        <label className="text-white">{renderContent(policy.content)}</label>
      </div>
    ));
  };

  return (
    <section className="fv nebura relative pt-10 md:pt-24">
      <div className="relative z-20 my-10 flex flex-wrap items-center">
        <SectionTitle title="Privacy Policy" englishTitle="Privacy policy" />
        <div className="block">
          {renderPolicyItems()}
          <div className="privacy-mail-link mt-5 text-center">
            <PrimaryLinkButton
              buttonName="Ask with FORM"
              buttonLink="https://forms.gle/3Fyi4rh595kqGvw37"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
