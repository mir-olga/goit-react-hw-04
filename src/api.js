import axios from 'axios';

export const fetchImages = async (query, page) => {
  const response = await axios.get(`http://hn.algolia.com/api/v1/search`, {
  //  const response = await axios.get(`https://api.unsplash.com/photos/?client_id=7r0M0a5sXVyFgnUhVucSAnmpw4V-XJfzVlwomEzVbfs`, {
    params: { query, page, hitsPerPage: 10 },
  });

  return response.data.hits;
};