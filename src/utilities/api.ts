import { BASE_URL, MovieCategory } from ".";

export const getMovieList = (category: MovieCategory) => {
  return fetch(`${BASE_URL}/${category}`).then((responsive) => responsive.json());
};

export const getMovie = (id: string) => {
  return fetch(`${BASE_URL}/movie?id=${id}`).then((responsive) => responsive.json());
};
