import { useState, useCallback } from 'react';

interface ScrollReturn {
  showScroll: boolean;
  scrollTop: () => void;
}

interface ScrollInput {
  pageYOffset?: number;
}

export default function useScrollToTop(params?: ScrollInput): ScrollReturn {
  const pageYOffset = params?.pageYOffset || 400;

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > pageYOffset) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= pageYOffset) {
      setShowScroll(false);
    }
  };

  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  window.addEventListener('scroll', checkScrollTop);

  return {
    showScroll,
    scrollTop,
  };
}
