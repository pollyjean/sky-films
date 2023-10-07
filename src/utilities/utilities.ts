import { IMG_URL } from "./commonConfig";

export const makeImagePath = (image: string) => {
  return `${IMG_URL}/w500${image}`;
};

export const makeBgPath = (image: string) => {
  return `${IMG_URL}/original${image}`;
};

export const getMovieId = (movieId: string) => {
  if (movieId) {
    return movieId.split(`movie=`)[1];
  } else {
    return "";
  }
};
