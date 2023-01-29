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
import { FaImdb } from "react-icons/fa";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    if (movies) {
      setMovie(
        ...movies?.filter((movie) => {
          return movie.id === id;
        })
      );
    }
  }, [movies]);

  const opts = {
    width: "400",
    height: "200",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <SingleMovie back={movie.landscape}>
        {console.log(movie)}
        <MovieInfoContianer>
          <MovieTrailer>
            <div className="trailer">
              <YouTube videoId={movie?.trailer} opts={opts} />
            </div>
            <div className="infomovie">
              <h1>{movie?.title}</h1>
              <p>{movie?.description}</p>
              <div>{movie?.price} DH</div>
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
