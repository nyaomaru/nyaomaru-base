import { isBrowser, isElement } from 'is-kit';

type TypeWriter = {
  element: string;
  speed: number;
  string: string;
};

export const typeWriter = (param: TypeWriter) => {
  if (!isBrowser()) return;

  const element = document.querySelector(param.element);
  const { speed, string } = param;

  if (!isElement(element)) return;

  string.split('').forEach((char, index) => {
    setTimeout(() => {
      element.textContent += char;
    }, speed * index);
  });
};
