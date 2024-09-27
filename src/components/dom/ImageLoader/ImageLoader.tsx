import getImageMetaData from '@/utils/getImageMetaData';
import Image from 'next/image';

interface IImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageLoader = async ({ src, alt, className }: IImageLoaderProps) => {
  const imageMetaData = await getImageMetaData(src);

  return (
    <div style={{ width: '100%', aspectRatio: imageMetaData.aspectRatio }} className={className}>
      <Image src={src} alt={alt} layout='fill' />
    </div>
  );
};

export default ImageLoader;
