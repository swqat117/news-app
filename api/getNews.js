import api from "./client";
const getNews = () => {
  return api.get(
    "/top-headlines?sources=bbc-news&apiKey=53235dbc86d64cc990d6d69374ffe905"
  );
};
const searchedNews = (str) => {
  return api.get(`everything?q=${str}&apiKey=53235dbc86d64cc990d6d69374ffe905`);
};
export default {
  getNews,
  searchedNews,
};
