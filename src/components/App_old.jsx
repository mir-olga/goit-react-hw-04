import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { fetch } from '../api';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(false);
  
  const searchImages = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
       // setLoading(true);
        //setError(false);
        const fetchedData = await fetch(query.split('-')[1], page);
        setImages(prevImages => [...prevImages, ...fetchedData.results]);
      } catch {
        //setError(true);
      } finally {
       // setLoading(false);
      }
    }

    fetchData();
  }, [query, page]);

return (
    <>
      <div>
      <SearchBar onSearch={searchImages}/>
      {/*error && <b>Oops, there was an error, please try reloading 😭</b>*/}
      {images.length > 0 && <ImageGallery  items={images} />}
      {/*loading && <b>Loading articles, please wait...</b>*/}
      {images.length > 0 && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
      <Toaster position="top-left" />
        
      </div>
    </>
  );
};