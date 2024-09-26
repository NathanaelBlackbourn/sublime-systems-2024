import getImageMetaData from '@/utils/getImageMetaData';
import ClientFrame from './ClientFrame';

interface IImageLoaderProps {
  src: string;
  alt: string;
}

const ImageLoader = async ({ src, alt }: IImageLoaderProps) => {
  const imageMetaData = await getImageMetaData(src);

  return <ClientFrame src={src} metadata={imageMetaData} alt={alt} />;
};

export default ImageLoader;
