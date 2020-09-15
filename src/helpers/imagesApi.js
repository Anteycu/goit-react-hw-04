import axios from "axios";

const apiKey = "17976962-b1f0a6808ca31d6d2a32d8551";
const apiKeyNew = "18309325-d7831a9dfba8f225a0a4fcbba";

export const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};
