import React, { useState } from "react";
import Container from "../components/style/Container";
import MovieTitle from "../components/style/Movie-title";
import Card from "../components/Card";
import { useEffect } from "react";
import MovieContainer from "../components/style/MovieContainer";
import { BsFillStarFill } from "react-icons/bs";
import Button from "../components/style/Button";
import { useDispatch, connect, useSelector } from "react-redux";
import { getMovies } from "../store/MoviesActions";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const [bestMovie, setBestMovie] = useState({});
  const movies = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getMovies());
    setBestMovie(
      ...movies?.filter((movie) => {
        return movie.bestsaller || {};
      })
    );
  }, [dispatch]);

  if (!movies || movies.length === 0) return null;

  return (
    <>
      <Container bg={bestMovie.landscape}>
        {console.log(bestMovie)}
        <MovieTitle>
          <div>
            <h1>{bestMovie.title}</h1>
            <p>{bestMovie.description}</p>
            <div className="rate">
              <div className="icon">
                <BsFillStarFill />
              </div>
              <div className="rating">{bestMovie.imdbRate}</div>
            </div>
            <div className="btn">
              <Button as={Link} to={`/Movie/${bestMovie.id}`}>
                More
              </Button>
            </div>
          </div>
        </MovieTitle>
        <MovieContainer>
          <div>
            {movies
              ?.filter((movie) => !movie.bestsaller)
              .map((movie) => {
                return <Card key={movie.id} movie={movie} />;
              })}
          </div>
        </MovieContainer>
      </Container>
    </>
  );
}

// const mapStateToProps = (state) => ({
//   movies: state.movies,
// });
export default Home;
