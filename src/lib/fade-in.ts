import { Dispatch, SetStateAction } from 'react';

export const fadeInSetting = (targetId: string, setter: Dispatch<SetStateAction<string>>) => {
  const element = typeof window === 'object' ? document.getElementById(targetId) : null;

  const listenScrollEvent = () => {
    const featureTitleScrollPosition = element
      ? element.getBoundingClientRect().top + window.scrollY
      : 0;

    if (window.scrollY > featureTitleScrollPosition - 1400) {
      setter('fadein-after');
    }
  };

  return listenScrollEvent;
};
