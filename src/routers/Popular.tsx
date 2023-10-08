import { MovieList } from "@/components";
import { MovieCategory } from "@/utilities";

const Popular = () => {
  return <MovieList category={MovieCategory.popular} />;
};

export default Popular;
