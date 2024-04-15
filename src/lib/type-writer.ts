type TypeWriter = {
  element: string;
  speed: number;
  string: string;
};

export const typeWriter = (param: TypeWriter) => {
  if (typeof window === 'object') {
    const element = document?.querySelector(param.element);
    const { speed, string } = param;

    if (element) {
      string.split('').forEach((char, index) => {
        setTimeout(() => {
          element.textContent += char;
        }, speed * index);
      });
    }
  }
};
