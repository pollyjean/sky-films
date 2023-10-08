import { useQuery } from "react-query";
import { ErrorPage, Loading } from ".";
import {
  getPopular,
  APIResponse,
  makeImagePath,
  MovieDataDetail,
  getMovie,
  makeBgPath,
  getMovieId,
  getRandom,
  getVoteStar,
} from "@/utilities";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { backgroundState } from "@/utilities/atom";

const List = styled.ul`
  position: relative;
  z-index: 2;
  list-style: none;
  display: flex;
  gap: 3rem 2rem;
  flex-wrap: wrap;
  max-width: 60rem;
  padding: 3rem 0;
`;

const MovieItem = styled.li`
  position: relative;
  width: 10rem;
  height: 15rem;
`;

const CardLink = styled(Link)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  width: 10rem;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);
  overflow: hidden;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  &:hover figcaption {
    display: flex;
  }
`;

const Caption = styled.figcaption`
  position: absolute;
  z-index: 2;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  width: 100%;
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1;
  opacity: 1;
  text-transform: uppercase;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 20%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const RatingStar = styled.strong`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HalfStar = styled.span`
  display: inline-block;
  width: 0.45rem;
  overflow: hidden;
`;

const DetailModal = styled.section`
  position: absolute;
  margin: 0 20%;
  min-height: 30rem;
  background-color: #141414;
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.4);
  color: #fefefe;
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Overlay = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const S = { List, DetailModal, CardLink, Overlay, MovieItem, HalfStar, RatingStar, Caption };

const SequentialList = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const SequentialItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const M = { SequentialList, SequentialItem };

const Popular = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setPageBackground = useSetRecoilState(backgroundState);
  const [isOpen, setIsOpen] = useState(false);
  const [movieId, setMovieId] = useState("");
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
            whileHover={{ scale: 1.2, top: -20 }}
          >
            <S.CardLink to={`?movie=${item.id}`}>
              <figure>
                <img src={`${makeImagePath(item.poster_path as string)}`} alt="" />
                <S.Caption>
                  <span>{item.title}</span>
                  <S.RatingStar title={`Vote Average : ${item.vote_average + ""}`}>
                    {getVoteStar(item.vote_average as number).star}
                    {getVoteStar(item.vote_average as number).half ? <S.HalfStar>⭐</S.HalfStar> : null}
                  </S.RatingStar>
                </S.Caption>
              </figure>
            </S.CardLink>
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
                  {movie?.data?.genres?.map((item) => (
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
