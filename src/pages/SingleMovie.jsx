import React, { useEffect, useState } from "react";
import {
  SingleMovie,
  MovieInfoContianer,
  MovieTrailer,
  MovieScheduleContainer,
  Day,
} from "../components/style/SingleMovie";
import { useParams } from "react-router-dom";
import { useDispatch, connect, useSelector } from "react-redux";
import { getMovies } from "../store/MoviesActions";
import DateCard from "../components/DateCard";
import YouTube from "react-youtube";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    setMovie(
      ...movies?.filter((movie) => {
        return movie.id === id;
      })
    );
  }, [dispatch]);

  const opts = {
    width: "240",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <SingleMovie bg={movie?.landscape}>
        {console.log(movie)}
        <MovieInfoContianer>
          <MovieTrailer>
            <div className="trailer">
              <YouTube videoId={movie?.trailer} opts={opts} />
            </div>
            <div>
              <h2>{movie?.title}</h2>
              <p>{movie?.description}</p>
              <div>{movie?.imdbRate} Imdb</div>
            </div>
          </MovieTrailer>
          <MovieScheduleContainer>
            {movie?.schedules?.map((schedule) => {
              return <DateCard schedule={schedule} id={movie?.id}></DateCard>;
            })}
          </MovieScheduleContainer>
        </MovieInfoContianer>
      </SingleMovie>
    </>
  );
}

// const mapStateToProps = (state) => ({
//   movies: state.movies,
// });
export default Movie;
