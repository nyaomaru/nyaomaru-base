/* eslint-disable @typescript-eslint/no-explicit-any */
import { fadeInSetting } from '@/lib/fade-in';

describe('fadeInSetting', () => {
  const mockSetter = jest.fn();

  const mockElement: HTMLElement = document.createElement('div');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  mockElement.getBoundingClientRect = jest.fn(() => ({ top: 100 })) as any;

  beforeEach(() => {
    jest.clearAllMocks();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    global.window = Object.create(window);
    Object.defineProperty(window, 'scrollY', { value: 0 });
    document.body.innerHTML = '<div id="targetId"></div>';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    document.getElementById = jest.fn().mockReturnValue(mockElement) as any;
  });

  it('should set the class to "fadein-after" when scrollY is greater than featureTitleScrollPosition - 1400', () => {
    const listener = fadeInSetting('targetId', mockSetter);

    global.window.scrollY = 1500;
    listener();

    expect(mockSetter).toHaveBeenCalledWith('fadein-after');
  });

  it('should not set the class to "fadein-after" when scrollY is less than featureTitleScrollPosition - 1400', () => {
    const listener = fadeInSetting('targetId', mockSetter);

    global.window.scrollY = 1300;
    listener();
  });

  it('should not set the class to "fadein-after" when element is null', () => {
    document.getElementById = jest.fn(() => null);

    const listener = fadeInSetting('targetId', mockSetter);

    global.window.scrollY = 1500;
    listener();
  });
});
