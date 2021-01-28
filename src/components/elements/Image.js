import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
}

const defaultProps = {
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined
}

const Image = ({
  className,
  src,
  width,
  height,
  alt,
  ...props
}) => {

  const [loaded, setLoaded] = useState(false);

  const imageRef = useRef(null);

  useEffect(() => {
    const placeholder = document.createElement('img');
    if (!loaded) {
      imageRef.current.style.display = 'none';
      imageRef.current.before(placeholder);
      placeholder.src = placeholderSrc(
        imageRef.current.getAttribute('width') || 0,
        imageRef.current.getAttribute('height') || 0
      );
      placeholder.width = imageRef.current.getAttribute('width');
      placeholder.height = imageRef.current.getAttribute('height');
      placeholder.style.opacity = '0';
      imageRef.current.className && placeholder.classList.add(imageRef.current.className);
      placeholder.remove();
      imageRef.current.style.display = '';      
    }
  }, [imageRef, loaded]);
  
  const placeholderSrc = (w, h) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
  }

  const handlePlaceholder = (img) => {
    
  }

  function onLoad() {
    setLoaded(true);
  }  

  return (
    <img
      {...props}
      ref={imageRef}
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt}
      onLoad={onLoad} />
  );
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;