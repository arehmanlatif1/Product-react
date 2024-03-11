import axios from "axios";

let apiUrl;

const apiUrls = {

  prodution: "www.products-react.com/api",
  development: "http://localhost:3000",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.prodution;
};

const api = axios.create({
  baseURL: apiUrl,
});

export default api;