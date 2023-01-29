import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ThankYouContainer } from "../components/style/SingleMovie";
import { getMovies } from "../store/MoviesActions";
import QRCode from "react-qr-code";

export default function Thankyou() {
  const { id, time, dayTimestamp } = useParams();
  const [movie, setMovie] = useState({});

  const dispatch = useDispatch();
  const date = new Date(parseInt(dayTimestamp)).toDateString();
  const movies = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getMovies());
  });

  useEffect(() => {
    if (movies) {
      setMovie(
        ...movies.filter((movie) => {
          return movie.id === id;
        })
      );
    }
  }, [movies]);

  return (
    <ThankYouContainer bg={movie?.landscape}>
      {console.log(movie)}
      <div className="thankyou">
        <p>
          Thank you for visiting our cinema. To see "{movie?.title}" at {date}{" "}
          {time}, <br /> please go to the cinema next to you and get your ticket
          using this QR code.
          {/* <br />
          <QRCode /> */}
          <div className="qr">
            <img
              src="https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg"
              alt="qr"
            />
          </div>
        </p>
      </div>
    </ThankYouContainer>
  );
}
