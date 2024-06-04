import { useEffect } from 'react';

export function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  handler: () => void,
) {
  useEffect(() => {
    const listener = ({ target }: MouseEvent) => {
      const targetElement: HTMLElement = target as HTMLElement;
      if (!ref.current || ref.current.contains(targetElement)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}
