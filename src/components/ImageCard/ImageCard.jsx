import css from "./ImageCard.module.css";

const ImageCard = ({ src, alt }) => {
  return (
    <div className={css.imageWrapper}>
      <img src={src} alt={alt} loading="lazy" className={css.image} />
    </div>
  );
};

export default ImageCard;
