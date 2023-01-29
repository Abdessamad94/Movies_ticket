import React from "react";
import Container from "../components/style/Container";
import { useFormik } from "formik";
import { useEffect } from "react";
import { MovieTicket } from "../components/style/SingleMovie";
import { connect, useDispatch } from "react-redux";
import { getMovies } from "../store/MoviesActions";
import { useParams } from "react-router-dom";
import { formatMovieDate } from "../helper/date";

function Checkout({ movies }) {
  const { id, time, dayTimestamp } = useParams();
  const { dayOfMonth, dayName, monthName } = formatMovieDate(dayTimestamp);
  const dispatch = useDispatch();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Firstname is Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Lastname is Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.phone) {
      errors.phone = "Phone is Required";
    } else if (values.lastName.length > 20) {
      errors.phone = "Must be 20 characters or less";
    } else if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        values.phone
      )
    ) {
      errors.phone = "Invalid Phone Number";
    }

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const movie = movies?.filter((movie) => {
    return movie.id === id;
  });

  return (
    <>
      <Container>
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <p className="err">{formik.errors.firstName}</p>
            <input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <p className="err">{formik.errors.lastName}</p>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <p className="err">{formik.errors.email}</p>
            <input
              id="phone"
              name="phone"
              placeholder="Phone"
              type="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <p className="err">{formik.errors.phone}</p>
            <button type="submit">Booking</button>
          </form>
        </div>
        <div className="movieInfo">
          <MovieTicket bg="">
            <div className="ticketinfo">
              <div className="date">
                {monthName},{dayName} {dayOfMonth}
              </div>
              <div className="name">{movie.title}</div>
              <div className="price">{movie.price} DH</div>
            </div>
          </MovieTicket>
        </div>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies,
});
export default connect(mapStateToProps)(Checkout);
