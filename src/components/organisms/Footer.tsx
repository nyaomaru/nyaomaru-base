import Image from 'next/legacy/image';
import Link from 'next/link';

import Container from '@/components/layout/Container';

type FooterLink = {
  title: string;
  link: string;
};

const footerLinkList: FooterLink[] = [
  { title: 'Home', link: '/' },
  // { title: 'About This Site', link: '/' },
  // { title: 'Contact Us', link: '/' },
  { title: 'Privacy Policy', link: '/privacy-policy' },
];

export const Footer = () => {
  const renderFooterLinks = () => {
    return footerLinkList.map(({ title, link }) => (
      <li key={title}>
        <Link
          href={link}
          className="mb-1 block py-2 text-sm text-primary-light duration-300 hover:opacity-75 md:text-base"
        >
          {title}
        </Link>
      </li>
    ));
  };

  return (
    <footer className="footer-gradient py-10">
      <Container>
        <div className="flex flex-col items-start justify-between md:flex-row">
          {/* Logo */}
          <Link href="/" className="mx-auto" passHref>
            <Image
              loader={({ src }) => {
                return src + '?w=120';
              }}
              className="image-with-alt"
              src="/images/demo-logo.png"
              width={120}
              height={60}
              alt="nyaomaru_base"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="nav-container text-center">
          <nav>
            <ol>{renderFooterLinks()}</ol>
          </nav>
        </div>

        {/* Copyright */}
        <small className="mt-10 block text-center text-primary-light">&copy; 2024 Nyaomaru</small>
      </Container>
    </footer>
  );
};
