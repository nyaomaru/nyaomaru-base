export type PrivacyPolicy = {
  title: string;
  content: string;
};

export type siteFeatures = {
  sectionType: 'right' | 'left';
  imageSrc: string;
  sectionTitle: string;
  sectionText: string;
};

export type Features = {
  imageSrc: string;
  featureTitle: string;
  featureText: string;
};

export type TwitterList = {
  no: number;
  url: string;
  logo: string;
  userIcon: string;
  tweet: string;
  tweetImages: string[];
};
