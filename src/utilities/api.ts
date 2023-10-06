import { BASE_URL } from "./commonConfig";

export const getPopular = async () => {
  return await fetch(`${BASE_URL}/popular`).then((responsive) => responsive.json());
};

export const getNowPlaying = async () => {
  return fetch(`${BASE_URL}/now-playing`).then((responsive) => responsive.json());
};

export const getComingSoon = async () => {
  return fetch(`${BASE_URL}/coming-soon`).then((responsive) => responsive.json());
};

export const getMovie = async (id: string) => {
  return fetch(`${BASE_URL}/movie?id=${id}`).then((responsive) => responsive.json());
};
