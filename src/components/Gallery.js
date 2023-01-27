import styles from "@/styles/Gallery.module.css"
import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function Gallery(props) {
  
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
          gallery: '#' + props.galleryID,
          children: 'a',
          pswpModule: () => import('photoswipe'),
          imageClickAction: 'next',
        });
        lightbox.init();
    
        return () => {
          lightbox.destroy();
          lightbox = null;
        };
      }, []);
  return (
    <div className={styles.gallery} id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={props.galleryID + '-' + index}
            target="_blank"
            rel="noreferrer"
        >
          <div className={styles.galleryImage}>
          <img src={image.thumbnailURL} alt="" />
          </div>
        </a>
      ))}
    </div>
  )
}
