export const BASE_URL = "https://movies-api.nomadcoders.workers.dev";
export const IMG_URL = "https://image.tmdb.org/t/p";

enum MovieEnum {
  nowPlaying = "now-playing",
  comingSoon = "coming-soon",
}

export enum MovieCategory {
  popular = "popular",
  nowPlaying = MovieEnum.nowPlaying,
  comingSoon = MovieEnum.comingSoon,
}

export enum MoviePaths {
  popular = "/",
  nowPlaying = MovieEnum.nowPlaying,
  comingSoon = MovieEnum.comingSoon,
}

export interface MovieInfo {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface MovieDataDetail extends MovieInfo {
  belongs_to_collection?: BelongsToCollection;
  budget?: number;
  homepage?: string;
  genres?: Genre[];
  imdb_id?: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
}

interface BelongsToCollection {
  id?: number;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
}

interface Genre {
  id?: number;
  name?: string;
}

interface ProductionCompany {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
}

interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

interface SpokenLanguage {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
}

export interface APIResponse {
  page?: number;
  results?: MovieInfo[];
}
