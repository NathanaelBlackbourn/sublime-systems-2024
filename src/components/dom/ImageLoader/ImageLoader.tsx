import getImageMetaData from '@/utils/getImageMetaData';
import Image from 'next/image';

interface IImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

const ImageLoader = async ({ src, alt, className, sizes = '800px' }: IImageLoaderProps) => {
  const imageMetaData = await getImageMetaData(src);

  return (
    <div style={{ width: '100%', aspectRatio: imageMetaData.aspectRatio, position: 'relative' }} className={className}>
      <Image src={src} alt={alt} layout='fill' sizes={sizes} />
    </div>
  );
};

export default ImageLoader;
