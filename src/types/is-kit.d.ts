declare module 'is-kit' {
  export function isBrowser(): boolean;
  export function isElement(value: unknown): value is Element;
}
