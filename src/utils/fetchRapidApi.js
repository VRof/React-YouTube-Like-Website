import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/captions",
  params: {
    maxResults: "50",
  },
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchRapidApi = async (url) => {
  const { data } = await axios.request(`${BASE_URL}/${url}`, options);
  return data;
};

export default fetchRapidApi;
