import { BASE_URL } from "./commonConfig";

export const getPopular = () => {
  return fetch(`${BASE_URL}/popular`).then((responsive) => responsive.json());
};

export const getNowPlaying = () => {
  return fetch(`${BASE_URL}/now-playing`).then((responsive) => responsive.json());
};

export const getComingSoon = () => {
  return fetch(`${BASE_URL}/coming-soon`).then((responsive) => responsive.json());
};

export const getMovie = (id: string) => {
  return fetch(`${BASE_URL}/movie?id=${id}`).then((responsive) => responsive.json());
};
