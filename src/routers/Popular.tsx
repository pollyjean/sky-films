import { useQuery } from "react-query";
import { ErrorPage, Loading } from ".";
import { getPopular, APIResponse, makeImagePath, MovieDataDetail, getMovie, makeBgPath, getMovieId } from "@/utilities";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemLink = styled(Link)`
  display: block;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem 2rem;
  flex-wrap: wrap;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 10rem;
  img {
    border-radius: 1rem;
  }
`;

const DetailModal = styled.section`
  position: absolute;
  width: 8vw;
  height: 5vw;
  background-color: #141414;
  color: #fefefe;
`;

const Overlay = styled.section`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const S = { Figure, List, DetailModal, ItemLink, Overlay };

const Popular = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [movieId, setMovieId] = useState("");
  useEffect(() => {
    setMovieId(getMovieId(location.search));
    setIsOpen(Boolean(movieId));
  }, [location.search, movieId]);
  const { isLoading, isError, data } = useQuery<APIResponse>({ queryKey: ["popular"], queryFn: getPopular });
  const movie = useQuery<MovieDataDetail>({
    queryKey: ["movie"],
    queryFn: () => {
      setMovieId(getMovieId(location.search));
      setIsOpen(true);
      return getMovie(`${movieId}`);
    },
    enabled: isOpen,
  });
  const closeModal = () => {
    location.search = "";
    setMovieId("");
    setIsOpen(false);
  };
  const page = data?.page;
  const movieList = data?.results;

  if (isError) return <ErrorPage />;
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <S.List>
        {movieList?.map((item) => (
          <li key={item.id}>
            <S.ItemLink to={`?movie=${item.id}`}>
              <S.Figure as={motion.figure} layoutId={`layout-${item.id}`} initial>
                <img src={`${makeImagePath(item.poster_path)}`} alt="" />
                <figcaption>{item.title}</figcaption>
              </S.Figure>
            </S.ItemLink>
          </li>
        ))}
      </S.List>
      <div>{page}</div>
      <AnimatePresence>
        {isOpen &&
          (isLoading ? (
            <Loading />
          ) : (
            <S.Overlay onClick={closeModal}>
              <S.DetailModal
                style={{
                  backgroundImage: movie?.data?.backdrop_path
                    ? `url(${makeBgPath(movie?.data?.backdrop_path as string)})`
                    : "transparent",
                }}
                as={motion.section}
                layoutId={`layout-${movieId}`}
              >
                <h3>{movie?.data?.title}</h3>
                <p>{movie?.data?.overview}</p>
                <ul>
                  {movie?.data?.genres.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </S.DetailModal>
            </S.Overlay>
          ))}
      </AnimatePresence>
    </>
  );
};

export default Popular;
