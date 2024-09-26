'use client';

import { ImageMetaData } from '@/index';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface IImageLoaderProps {
  src: string;
  alt: string;
  metadata: ImageMetaData;
}

const ClientFrame = ({ src, alt, metadata }: IImageLoaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  useEffect(() => {
    setIsDomLoaded(true);
  }, [src]);

  return (
    <div ref={ref}>
      {isDomLoaded && (
        <Image
          src={src}
          alt={alt}
          width={ref.current?.clientWidth}
          height={ref.current?.clientWidth / metadata.aspectRatio}
        />
      )}
    </div>
  );
};

export default ClientFrame;
