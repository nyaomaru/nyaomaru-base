import { isBrowser, isElement } from 'is-kit';
import { Dispatch, SetStateAction } from 'react';

export const fadeInSetting = (
  targetId: string,
  setter: Dispatch<SetStateAction<string>>,
): (() => void) | undefined => {
  if (!isBrowser()) {
    return undefined;
  }

  const listenScrollEvent = () => {
    const element = document.getElementById(targetId);

    if (!isElement(element)) {
      return;
    }

    const featureTitleScrollPosition = element.getBoundingClientRect().top + window.scrollY;

    if (window.scrollY > featureTitleScrollPosition - 1400) {
      setter('fadein-after');
    }
  };

  return listenScrollEvent;
};
