import axios from 'axios';

export const fetchImages = async (query, page) => {
    const accessKey = "7r0M0a5sXVyFgnUhVucSAnmpw4V-XJfzVlwomEzVbfs";
    
    const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${accessKey}`, {
        params: {
            query,
            page,
            per_page: 12,
            orientation:"landscape",
        },
    });

    return response.data;
}