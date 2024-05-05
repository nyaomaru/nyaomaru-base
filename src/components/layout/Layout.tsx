import NextHeadSeo from 'next-head-seo';

import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';

////////////////////////////////////////////////////////////////////////////////////////////////////
// Site settings
const APP_NAME = 'nyaomaru_base';
const APP_ROOT_URL = 'https://nyaomaru_base.com/';
const APP_DEFAULT_DESCRIPTION = 'description setting';
const APP_DEFAULT_OG_IMAGE_PATH = '/default-unreact.png';
////////////////////////////////////////////////////////////////////////////////////////////////////

type LayoutProps = {
  path: string;
  title: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
  isTopPage?: boolean;
  children: React.ReactNode;
};

const Layout = ({
  path,
  title,
  description = APP_DEFAULT_DESCRIPTION,
  ogImagePath = APP_DEFAULT_OG_IMAGE_PATH,
  noindex,
  noTitleTemplate,
  isTopPage,
  children,
}: LayoutProps) => {
  // Absolute page url
  const pageUrl = APP_ROOT_URL + path;

  // Absolute og image url
  const ogImageUrl = APP_ROOT_URL + ogImagePath;

  return (
    <>
      <NextHeadSeo
        title={noTitleTemplate ? title : `${title} - ${APP_NAME}`}
        canonical={pageUrl}
        description={description}
        robots={noindex ? 'noindex, nofollow' : undefined}
        og={{
          title,
          description,
          url: pageUrl,
          image: ogImageUrl,
          type: isTopPage ? 'website' : 'article',
          siteName: APP_NAME,
        }}
        twitter={{
          card: 'summary_large_image',
        }}
      />

      <div className="flex min-h-screen flex-col overflow-hidden bg-primary bg-stars-pattern bg-repeat">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
