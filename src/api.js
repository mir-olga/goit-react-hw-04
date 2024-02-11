import axios from 'axios';

export const fetchImages = async (query, page) => {
    const accessKey = "7r0M0a5sXVyFgnUhVucSAnmpw4V-XJfzVlwomEzVbfs";
    //const accessKey = "AGNMiP3FVMhRRM0e6xxk52RIDOCH5aYr2KkPgy7w030";
    
    const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${accessKey}`, {
        params: {
            query,
            page,
            per_page: 12,
        },
    });

    return response.data;
}