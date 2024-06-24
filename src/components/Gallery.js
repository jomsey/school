import styles from "@/styles/Gallery.module.css"
import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import {FaPlay} from "react-icons/fa6"
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
      <div className={styles.overlay}>
        <h3>View Our Photo Album</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, facere consequuntur voluptatum, quibusdam adipisci sunt illum obcaecati deserunt rerum non veniam repudiandae, tempore exercitationem!</p>
        <button><FaPlay/> Play Slide</button>
      </div>
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
