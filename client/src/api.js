import axios from "axios";

const api = {
  getSearchResults: async (searchTerm, page = 1, limit = 20) => {
    const config = {
      url: "/events",
      params: {
        q: searchTerm,
        _page: page,
        _limit: limit
      }
    };

    const resp = await axios(config);

    return resp.data;
  }
};

export default api;
