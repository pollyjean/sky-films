import { MovieList } from "@/components";
import { MovieCategory } from "@/utilities";

const NowPlaying = () => {
  return <MovieList category={MovieCategory.nowPlaying} />;
};

export default NowPlaying;
