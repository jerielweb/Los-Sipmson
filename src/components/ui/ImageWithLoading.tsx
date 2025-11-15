import { useState } from 'react';
import  Loading  from '../icons/Loading.tsx';
import type { ImageProps } from '../../types.d.ts';

export default function ImageWithLoading({ src, alt, className, showtext = true }: ImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {
        !imageLoaded && 
        <Loading
        showtext={showtext}
      />
      }

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
