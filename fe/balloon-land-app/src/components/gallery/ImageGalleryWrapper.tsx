import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageGalleryWrapper: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      // Vite's glob import
      const imageModules = import.meta.glob(
        '/public/adv-images/*.{png,jpg,jpeg,svg,webp,gif}',
        { eager: true, query: '?url' }
      );

      const imageList = Object.entries(imageModules).map(([path, module]: [string, any]) => {
        return {
          original: module.default,
          thumbnail: module.default,
          originalAlt: `Image from ${path}`,
          thumbnailAlt: `Thumbnail from ${path}`,
        };
      });

      setImages(imageList);
    };

    loadImages();
  }, []);

  return (
    <div>
      {images.length > 0 ? (
        <ImageGallery
          items={images}
          showPlayButton={true}
          showFullscreenButton={true}
          showThumbnails={true}
          thumbnailPosition="bottom"
        />
      ) : (
        <div>No images found</div>
      )}
    </div>
  );
};

export default ImageGalleryWrapper;