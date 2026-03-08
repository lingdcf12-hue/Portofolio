
import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc = '/images/placeholder.svg', 
  className,
  ...props 
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const onError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={onError}
      className={className}
      {...props}
    />
  );
};
