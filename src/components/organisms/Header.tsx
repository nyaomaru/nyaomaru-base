import Image from 'next/legacy/image';
import Link from 'next/link';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';

import { PrimaryScrollButton } from '@/components/atoms/PrimaryScrollButton';
import Container from '@/components/layout/Container';

type HeaderLinkList = {
  title: string;
  link: string;
  english: string;
};

const headerLinkList: HeaderLinkList[] = [
  { title: 'Customer', link: '/#review-link', english: 'Voice' },
  { title: 'Features', link: '/#points', english: 'Point' },
  { title: 'Production', link: '/#works-link', english: 'Works' },
  { title: 'Business', link: '/#flow', english: 'Flow' },
  { title: 'Production', link: '/#plan-link', english: 'Plans' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpen(prevState => !prevState);
  };

  const renderHeaderLinks = () => {
    return headerLinkList.map(({ title, link, english }, index) => (
      <li key={'title' + index} className={'header-link group overflow-hidden'}>
        <Link href={link} passHref legacyBehavior>
          <Scroll
            to={link}
            smooth={true}
            className="text-[14px] font-normal text-primary-light"
            activeClass="active"
            spy={true}
            aria-label={title}
          >
            {title}
            <span
              className="block text-center text-[8px] font-normal text-primary-light"
              aria-label={english}
            >
              {english}
            </span>
          </Scroll>
        </Link>
      </li>
    ));
  };

  return (
    <header className="header-gradient fixed z-[9999] w-full py-3">
      <div className="header-inner relative">
        <Container className="flex items-center justify-between">
          <Link href="/top" passHref>
            <Image
              loader={({ src }) => {
                return src + '?w=120';
              }}
              className="image-with-alt"
              src="/images/demo-logo.png"
              width={120}
              height={60}
              alt="vercel"
            />
          </Link>

          {/* PC Navigation */}
          <nav className="hidden md:block" aria-label="pc-header">
            <ol className="flex items-center gap-16 font-bold">
              {renderHeaderLinks()}
              <li>
                <PrimaryScrollButton buttonName="Consult" scrollTo="plan-link" />
              </li>
            </ol>
          </nav>

          {/* Hamburger Button */}
          <button
            className="relative z-50 block size-12 rounded-full border md:hidden"
            onClick={handleMenuClick}
            aria-label="Hamburger Button"
          >
            <span
              className={`absolute inline-block  h-1 rounded-full bg-primary-light duration-300 ${
                isOpen ? 'left-4 top-4 w-[35%] translate-y-[6px] -rotate-45' : 'left-3 top-4 w-1/2'
              }`}
            />
            <span
              className={`absolute inline-block  h-1 rounded-full bg-primary-light duration-300 ${
                isOpen ? 'left-4 top-7 w-[35%] translate-y-[-6px] rotate-45' : 'left-3 top-7 w-1/3'
              }`}
            />
          </button>

          {/* Drawer Menu and Overlay */}
          <div
            className={`fixed left-0 top-0 transition-opacity duration-300 md:hidden ${
              isOpen ? 'z-10 h-screen w-full bg-theme opacity-25' : 'opacity-0'
            }`}
            onClick={handleMenuClick}
          />
          <nav
            className={`fixed right-0 top-0 z-20  mr-4 mt-20 rounded-lg  bg-theme-light p-6 duration-300 md:hidden ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="drawer-menu"
          >
            <ol className="flex flex-col space-y-5">
              {headerLinkList.map(({ title, link }, index) => (
                <li key={'drawer' + index} className="drawer-link">
                  <Link href={link}>
                    <span className="py-1 font-normal text-accent" onClick={handleMenuClick}>
                      {title}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="cursor-pointer">
                <PrimaryScrollButton
                  buttonName="Consult"
                  scrollTo="plan-link"
                ></PrimaryScrollButton>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
    </header>
  );
};
