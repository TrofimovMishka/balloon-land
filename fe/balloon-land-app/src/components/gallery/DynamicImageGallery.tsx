import React, { useState, useEffect } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "react-photo-album/rows.css";
import './DynamicImageGallery.css';

interface DynamicImageGalleryProps {
    photoLocation: string,
    customLayout: string
}

interface Photo {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const DynamicImageGallery: React.FC<DynamicImageGalleryProps> = ({ photoLocation, customLayout }) => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [index, setIndex] = useState(-1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            try {
                let imageModules;

                switch (photoLocation) {
                    case "ballon":
                        imageModules = import.meta.glob('/src/assets/menu-images/ballon/*.{jpg,jpeg,png}', {
                            eager: true,
                            query: '?url',
                            import: 'default'
                        });
                        break;
                    case "cuk":
                        imageModules = import.meta.glob('/src/assets/menu-images/cuk/*.{jpg,jpeg,png}', {
                            eager: true,
                            query: '?url',
                            import: 'default'
                        });
                        break;
                    case "zone":
                        imageModules = import.meta.glob('/src/assets/menu-images/zone/*.{jpg,jpeg,png}', {
                            eager: true,
                            query: '?url',
                            import: 'default'
                        });
                        break;
                    default:
                        imageModules = import.meta.glob('/src/assets/adv-images/*.{jpg,jpeg,png}', {
                            eager: true,
                            query: '?url',
                            import: 'default'
                        });
                        break;
                }

                const loadedPhotos: Photo[] = await Promise.all(
                    Object.entries(imageModules).map(async ([path, url]) => {
                        const fileName = path.split('/').pop() || '';
                        const alt = fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ');

                        return new Promise<Photo>((resolve) => {
                            const img = new Image();
                            img.onload = () => {
                                resolve({
                                    src: url as string,
                                    width: img.width,
                                    height: img.height,
                                    alt
                                });
                            };
                            img.onerror = () => {
                                resolve({
                                    src: url as string,
                                    width: 800,
                                    height: 600,
                                    alt
                                });
                            };
                            img.src = url as string;
                        });
                    })
                );

                setPhotos(loadedPhotos);
            } catch (error) {
                console.error('Error loading images:', error);
            } finally {
                setLoading(false);
            }
        };

        loadImages();
    }, []);

    if (loading) {//TODO: add spinner
        return <div>Loading images...</div>;
    }

    return (
        <div className='photo-album'>
            <PhotoAlbum
                photos={photos}
                layout={customLayout}
                targetRowHeight={200}
                spacing={10}
                padding={5}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={photos}
            />
        </div>
    );
};

export default DynamicImageGallery;