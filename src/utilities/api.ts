import { BASE_URL, MovieCategory } from ".";

export const getMovieList = async (category: MovieCategory) => {
  return await fetch(`${BASE_URL}/${category}`).then((responsive) => responsive.json());
};

export const getMovie = async (id: string) => {
  return await fetch(`${BASE_URL}/movie?id=${id}`).then((responsive) => responsive.json());
};
