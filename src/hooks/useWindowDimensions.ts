import { useEffect, useState } from 'react';

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(null);

  // eslint-disable-next-line no-console
  console.log('Running useWindowDimensions');

  useEffect(() => {
    const handleResize = () =>
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        aspectRatio: window.innerWidth / window.innerHeight,
      });

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
