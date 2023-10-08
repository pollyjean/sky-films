import { useQuery } from "react-query";
import { ErrorPage, Loading } from "@/routers";
import {
  APIResponse,
  MovieDataDetail,
  getMovie,
  makeBgPath,
  getMovieId,
  getRandom,
  MovieCategory,
  getMovieList,
} from "@/utilities";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { backgroundState } from "@/utilities/atom";
import { MovieCard } from "@/components";
import { List, Overlay, MovieItem, DetailModal } from "@/styles";
import { SequentialList, SequentialItem } from "@/styles";
import Modal from "@/components/Modal";

const S = { List, Overlay, MovieItem, DetailModal };

const M = { SequentialList, SequentialItem };

interface MovieListProps {
  category: MovieCategory;
}

const MovieList = ({ category }: MovieListProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const setPageBackground = useSetRecoilState(backgroundState);
  const [isOpen, setIsOpen] = useState(false);
  const [movieId, setMovieId] = useState("");
  const { isLoading, isError, data } = useQuery<APIResponse>({
    queryKey: [category],
    queryFn: () => getMovieList(category),
  });
  const movie = useQuery<MovieDataDetail>({
    queryKey: ["movie"],
    queryFn: () => {
      setMovieId(getMovieId(location.search));
      setIsOpen(true);
      return getMovie(`${movieId}`);
    },
    enabled: isOpen,
  });
  const movieList = data?.results;
  useEffect(() => {
    setMovieId(getMovieId(location.search));
    setIsOpen(Boolean(movieId));
  }, [location.search, movieId]);
  useEffect(() => {
    if (movieList !== undefined) {
      const movieLength = movieList?.length as number;
      const randomIndex = getRandom(movieLength as number);
      const randomBackground = makeBgPath(movieList[randomIndex].backdrop_path as string);
      setPageBackground(randomBackground);
    }
  }, [movieList, setPageBackground]);
  const closeModal = () => {
    navigate(-1);
    setMovieId("");
    setIsOpen(false);
  };
  if (isError) return <ErrorPage />;
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <S.List as={motion.ul} variants={M.SequentialList} initial="hidden" animate="visible">
        {movieList?.map((item) => (
          <S.MovieItem
            key={item.id}
            as={motion.li}
            variants={M.SequentialItem}
            layoutId={`layout-${item.id}`}
            whileHover={{ scale: 1.2, top: -5 }}
          >
            <MovieCard item={item} />
          </S.MovieItem>
        ))}
      </S.List>
      <AnimatePresence>
        {isOpen &&
          (isLoading ? (
            <Loading />
          ) : (
            <S.Overlay onClick={closeModal}>
              <S.DetailModal
                as={motion.section}
                layoutId={`layout-${movieId}`}
                style={{
                  backgroundImage: movie?.data?.backdrop_path
                    ? `url(${makeBgPath(movie?.data?.backdrop_path as string)})`
                    : "transparent",
                }}
              >
                <Modal data={movie?.data} />
              </S.DetailModal>
            </S.Overlay>
          ))}
      </AnimatePresence>
    </>
  );
};

export default MovieList;
