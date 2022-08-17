import { useState, useCallback, useEffect } from 'react';

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

  const checkScrollTop = useCallback(() => {
    () => {
      if (!showScroll && window.pageYOffset > pageYOffset) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= pageYOffset) {
        setShowScroll(false);
      }
    };
  }, [pageYOffset, showScroll]);

  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [checkScrollTop]);

  return {
    showScroll,
    scrollTop,
  };
}
