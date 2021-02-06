import axios from "axios";
// Put URLs .env
export const fetchURLs = {
  dev: process.env.REACT_APP_BASE_URL
};

const ENV = "dev";
const baseURL = fetchURLs[ENV];

const fetchInstance = axios.create({
  baseURL,
});

export { fetchInstance };

