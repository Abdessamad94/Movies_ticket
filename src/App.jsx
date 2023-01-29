import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/style/Header";
import Movie from "./pages/SingleMovie";
import { AppContainer } from "./components/style/AppContainer";
import Checkout from "./pages/Checkout";

function App() {
  const navLinks = [
    {
      title: "Whats'on",
      to: "/",
    },
    {
      title: "About Us",
      to: "/about",
    },
  ];

  return (
    <AppContainer background="https://images5.alphacoders.com/688/688145.jpg">
      <Header>
        <div className="logo">
          <Link path="/" element={Home}>
            MOVIES
          </Link>
        </div>
        <div className="nav">
          <nav>
            <ul>
              {navLinks.map(({ title, to }) => (
                <li key={title}>
                  <Link to={to}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="login"></div>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Movie/:id" element={<Movie />} />
        <Route path="/Checkout/" element={<Checkout />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
