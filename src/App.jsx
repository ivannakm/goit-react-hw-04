import { useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal /ImageModal";
import { getImages } from "./apiService/unsplash";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  //  Функція для пошуку зображень
  const handleSearch = async (query) => {
    setLoading(true);
    setError(false);

    try {
      const data = await getImages(query);
      const formattedImages = data.results.map((img) => ({
        id: img.id,
        url: img.urls.small,
        alt: img.alt_description || "Image",
        fullUrl: img.urls.regular,
        author: img.user.name,
        likes: img.likes,
        description: img.description || img.alt_description,
      }));
      setImages(formattedImages);
    } catch (err) {
      console.error(err);
      setError("Failed to load images.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (imageData) => {
    setSelectedImage(imageData);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery imageList={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {isModalOpen && selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={{ url: selectedImage.fullUrl, alt: selectedImage.alt }}
        />
      )}
    </>
  );
}

export default App;
