import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ResetScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top-left corner
  }, [pathname]);

  return null;
}

export default ResetScroll