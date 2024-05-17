import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common = {
  "Accept-Version": "v1",
  "Content-Type": "application/json",
  Authorization: "Client-ID LwolaULfIAKrlEjA0c3Xo-CDqHeXVjeoy8DQVyBsb-c",
};

// axios.defaults.headers.common["Authorization"] =
//   "Client-ID LwolaULfIAKrlEjA0c3Xo-CDqHeXVjeoy8DQVyBsb-c";
// axios.defaults.headers.common["Accept-Version"] = "v1";

const onImgRequest = req => axios(`/search/photos?query=${req}`);

export default onImgRequest;
