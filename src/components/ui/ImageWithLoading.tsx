import { useState } from 'react';
import  Loading  from './Loading.tsx';

interface Props {
  src: string;
  alt: string;
  className?: string;
  showtext?: boolean;
}

export default function ImageWithLoading({ src, alt, className, showtext = true }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {!imageLoaded && <Loading
      showtext={showtext}
      />}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={handleImageLoad}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
    </>
  );
};
