import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ imageList, onImageClick }) => {
  if (!imageList || imageList.length === 0) {
    return null;
  }
  return (
    <ul className={css.gallery}>
      {imageList.map(({ id, url, alt }) => (
        <li key={id} className={css.galleryItem}>
          <div onClick={() => onImageClick({ url, alt })}>
            <ImageCard src={url} alt={alt} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
