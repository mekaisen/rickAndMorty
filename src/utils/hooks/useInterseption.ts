import { useCallback, useRef } from 'react';

export const useInterseption = (onIntersect: () => void) => {
  const unsubscribe = useRef(() => {});
  return useCallback((el: HTMLDivElement | null) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          onIntersect();
        }
      });
    }, { rootMargin: '0px 0px 400px 0px' });
    if (el) {
      observer.observe(el);
      unsubscribe.current = () => observer.disconnect();
    } else {
      unsubscribe.current();
    }
  }, []);
};
