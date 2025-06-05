import axios from "axios";

const API_KEY = "wNo0jGutdELg527MuZB1xWr_keHlbUqqHygbGT-htEg";
const BASE_URL = "https://api.unsplash.com";

export const getImages = async (query, page = 1, perPage = 6) => {
  const { data } = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: API_KEY,
    },
  });
  return data;
};
