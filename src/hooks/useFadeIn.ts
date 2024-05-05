import { useEffect } from 'react';

import { fadeInSetting } from '@/lib/fade-in';

import type { Dispatch, SetStateAction } from 'react';

export const useFadeIn = (targetId: string, setter: Dispatch<SetStateAction<string>>) => {
  useEffect(() => {
    const listenEvent = fadeInSetting(targetId, setter);

    window.addEventListener('scroll', listenEvent);
    return () => {
      window.removeEventListener('scroll', listenEvent);
    };
  }, [setter, targetId]);
};
