'use client';

import { ImageMetaData } from '@/index';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface IImageLoaderProps {
  src: string;
  alt: string;
  metadata: ImageMetaData;
  className?: string;
}

const ClientFrame = ({ src, alt, metadata, className }: IImageLoaderProps) => {
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
          className={className}
        />
      )}
    </div>
  );
};

export default ClientFrame;
