import axios from "axios";

let apiUrl;
const apiUrls = {
  prodution: "www.products-react.heroku.com/api",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.prodution;
}
export default apiConfig;