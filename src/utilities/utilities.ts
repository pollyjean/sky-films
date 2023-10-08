import { IMG_URL } from ".";

export const makeImagePath = (image: string) => {
  return `${IMG_URL}/w500${image}`;
};

export const makeBgPath = (image: string) => {
  return `${IMG_URL}/original${image}`;
};

export const getMovieId = (movieId: string) => {
  return movieId ? movieId.split(`movie=`)[1] : "";
};

export const getRandom = (length: number) => {
  return length > 0 ? Math.floor(Math.random() * length) : -1;
};
export const getVoteStar = (vote: number) => {
  const star = new Array(Math.floor((vote / 20) * 10)).fill("⭐");
  const half = (vote * 10) % 10 >= 5 ? true : false;
  return { star, half };
};
