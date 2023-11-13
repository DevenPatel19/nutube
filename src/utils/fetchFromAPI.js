import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const defaultOptions = {
    params: {
        maxResults: 50,
    },
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export const fetchFromAPI = async (url, customOptions = {}) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, {
            ...defaultOptions,
            ...customOptions,
        });

        return data;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        throw error;
    }
};
