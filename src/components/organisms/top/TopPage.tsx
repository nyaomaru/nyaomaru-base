import { useState, useEffect } from 'react';

import { PrimaryLinkButton } from '@/components/atoms/PrimaryLinkButton';
import { typeWriter } from '@/lib/type-writer';

let semaphore = false;

export const TopPage = () => {
  const [fadeIn, setFadeIn] = useState<string>('fadeIn-before');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFadeIn('fadeIn-after');
    }, 4000);

    if (!semaphore) {
      typeWriter({
        element: '#topPageComment',
        speed: 100,
        string: 'Welcome to Nyaomaru site',
      });

      semaphore = true;
    }

    return () => clearTimeout(timeoutId);
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
