import axios from "axios";

const api = {
  getSearchResults: (searchTerm, page, limit = 20) => {
    const config = {
      url: "/events",
      params: {
        q: searchTerm,
        _page: page,
        _limit: limit
      }
    };

    return axios(config).then(({ data }) => data);
  }
};

export default api;
