import axios from "axios";

let apiUrl;

const apiUrls = {

  prodution: "https://nameless-sierra-38368-0a7a1bc0fdca.herokuapp.com/",
  development: "https://nameless-sierra-38368-0a7a1bc0fdca.herokuapp.com",
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