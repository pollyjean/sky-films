import { MovieInfo, getVoteStar, makeImagePath } from "@/utilities";
import { CardLink, MovieItem, HalfStar, RatingStar, Caption } from "@/styles";

const S = { CardLink, MovieItem, HalfStar, RatingStar, Caption };

interface MovieCardProps {
  item: MovieInfo;
}

const MovieCard = ({ item }: MovieCardProps) => {
  return (
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
  );
};

export default MovieCard;
