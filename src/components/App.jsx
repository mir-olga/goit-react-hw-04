import { useState, useEffect } from 'react';
import  { Toaster } from 'react-hot-toast';
import { SearchBar } from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from "./Loader/Loader";
import  ErrorMessage  from "./ErrorMessage/ErrorMessage";
import { fetchImages } from '../api';


export const App = () => {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

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
       //setShowBtn(data.total_pages && data.total_pages !== page);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData(query, page);
  }, [page, query]);
  

  return (
    <>
      <SearchBar  onSearch={searchImages} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images}/>}
      {loading && <Loader />}
      <Toaster position="top-left"/>
    </>
  );
}