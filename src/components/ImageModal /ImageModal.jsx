import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { useEffect } from "react";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img
        src={image.fullUrl || image.url}
        alt={image.alt}
        className={css.image}
      />
      <p>Author: {image.author}</p>
      <p>Likes: {image.likes}</p>
      <p>{image.description}</p>
    </Modal>
  );
};

export default ImageModal;
