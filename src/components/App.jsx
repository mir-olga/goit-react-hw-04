import { useState, useEffect } from 'react';
import  { Toaster } from 'react-hot-toast';
import { SearchBar } from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from "./Loader/Loader";
import  ErrorMessage  from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { fetchImages } from '../api';

export const App = () => {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectImage, setSelectImage] = useState({ src: "", alt: "" });

  const searchImages = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchData = async (query, page = 1) => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData(query, page);
  }, [page, query]);
  
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function openModal(img) {
    setSelectImage(img);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar  onSearch={searchImages} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} openModal={openModal}/>}
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn handleLoadMore={handleLoadMore}/>}
      <Toaster position="top-left"/>
      <ImageModal 
          isOpen={modalIsOpen} 
          closeModal={closeModal} 
          src={selectImage.src}
          alt={selectImage.alt_description}
      />
    </>
  );
}