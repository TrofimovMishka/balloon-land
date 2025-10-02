import React from 'react';
import './CustomImageGallery.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface ImageGalleryProps {
  imagePath?: string;
  containerHeight?: string;
  maxImageSize?: number;
  minImageSize?: number;
  rotationRange?: number;
  imagePattern?: string;
  backgroundColor?: string;
  verticalPosition?: string;
  spacing?: 'even' | 'random';
}

interface ImageGalleryState {
  images: string[];
}

class CustomImageGallery extends React.Component<ImageGalleryProps, ImageGalleryState> {
  static defaultProps = {
    imagePath: '/public/adv-images',
    containerHeight: '600px',
    maxImageSize: 300,
    minImageSize: 250,
    rotationRange: 8,
    imagePattern: '*.{png,jpg,jpeg,svg}',
    backgroundColor: '#f5f5f5',
    verticalPosition: 'center',
    spacing: 'even'
  };

  constructor(props: ImageGalleryProps) {
    super(props);
    this.state = {
      images: []
    };
  }

  async componentDidMount() {
    await this.loadImages();
  }

  loadImages = async () => {
    try {
      const imageModules = import.meta.glob('/public/adv-images/*.{png,jpg,jpeg,svg}', {
        eager: true,
        query: '?url'
      });

      const imageUrls = Object.values(imageModules).map((module: any) => module.default);
      const shuffledUrls = imageUrls.sort(() => Math.random() - 0.5);
      this.setState({ images: shuffledUrls });
    } catch (error) {
      console.error('Error loading images:', error);
    }
  };


  render() {
    const { images } = this.state;
    const { containerHeight, backgroundColor } = this.props;

    return (
      <div style={{ width: '100%', height: '100%' }}>
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
  }
}

export default CustomImageGallery;