import getImageMetaData from '@/utils/getImageMetaData';
import ClientFrame from './ClientFrame';

interface IImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageLoader = async ({ src, alt, className }: IImageLoaderProps) => {
  const imageMetaData = await getImageMetaData(src);

  return <ClientFrame src={src} metadata={imageMetaData} alt={alt} className={className} />;
};

export default ImageLoader;
