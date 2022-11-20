import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallary from "./components/Gallary";
import Favourite from "./components/Favourite";
import classes from "./App.module.scss";

import FavContextProvider from "./store/favourite-context";

function App() {
  return (
    <FavContextProvider>
      <div>
        <Router>
          <header className={classes.header}>
            <ul>
              <li>
                <Link to="/">Gallary</Link>
              </li>
              <li>
                <Link to="/favourite">Favourite</Link>
              </li>
            </ul>
          </header>
          <div className={classes.container}>
            <Routes>
              <Route path="/" element={<Gallary />} />
              <Route path="/favourite" element={<Favourite />} />
            </Routes>
          </div>
        </Router>
      </div>
    </FavContextProvider>
  );
}

export default App;
