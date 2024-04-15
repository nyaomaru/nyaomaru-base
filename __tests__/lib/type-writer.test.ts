import { typeWriter } from '@/lib/type-writer';

describe('typeWriter', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should update the text content of the element over time', () => {
    const element = document.createElement('div');
    element.id = 'testElement';
    document.body.appendChild(element);

    const param = {
      element: '#testElement',
      speed: 100,
      string: 'Hello, world!',
    };

    typeWriter(param);

    jest.runAllTimers();

    expect(document.getElementById('testElement')!.textContent).toBe(param.string);
  });

  it('should handle missing element gracefully', () => {
    const param = {
      element: '#nonExistentElement',
      speed: 100,
      string: 'Hello, world!',
    };

    typeWriter(param);

    jest.runAllTimers();

    expect(document.getElementById('nonExistentElement')).toBeNull();
  });

  it('should handle empty string gracefully', () => {
    const element = document.createElement('div');
    element.id = 'testElement';
    document.body.appendChild(element);

    const param = {
      element: '#testElement',
      speed: 100,
      string: '',
    };

    typeWriter(param);

    jest.runAllTimers();

    expect(document.getElementById('testElement')!.textContent).toBe('');
  });

  it('should handle zero speed gracefully', () => {
    const element = document.createElement('div');
    element.id = 'testElement';
    document.body.appendChild(element);

    const param = {
      element: '#testElement',
      speed: 0,
      string: 'Hello, world!',
    };

    typeWriter(param);

    jest.runAllTimers();

    expect(document.getElementById('testElement')!.textContent).toBe(param.string);
  });
});
