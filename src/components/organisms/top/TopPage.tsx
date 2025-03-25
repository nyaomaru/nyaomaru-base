import { useState, useEffect, useRef } from 'react';

import { PrimaryLinkButton } from '@/components/atoms/PrimaryLinkButton';
import { typeWriter } from '@/lib/type-writer';

export const TopPage = () => {
  const [fadeIn, setFadeIn] = useState<string>('fadeIn-before');
  const hasAnimated = useRef(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFadeIn('fadeIn-after');
    }, 4000);

    if (!hasAnimated.current) {
      typeWriter({
        element: '#topPageComment',
        speed: 100,
        string: 'Welcome to Nyaomaru site',
      });

      hasAnimated.current = true; // 2 回目以降は実行しない
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="top-page">
      <section className="relative text-center">
        <br />
        <div className="mt-8">
          <span className="my-2 text-primary-light" id="topPageComment"></span>

          <div className={fadeIn}>
            <p id="author">Nyaomaru &#x1f680;</p>
            <div className="btn-container">
              <div className="mt-5 w-40 text-center">
                <PrimaryLinkButton buttonName="Go to site" buttonLink="/"></PrimaryLinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
