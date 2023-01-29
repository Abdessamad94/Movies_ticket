import Movies from "../server/Movies";

export const getMovies = () => {
  return (dispatch) => {
    dispatch({ type: "ALL_MOVIES", paylod: Movies });
  };
};

export const getMovie = (id) => {
  return (dispatch) => {
    dispatch({
      type: "ONE_MOVIE",
      paylod: Movies.filter((movie) => {
        return (movie.id = id);
      }),
    });
  };
};
